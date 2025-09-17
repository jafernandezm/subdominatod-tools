import requests
from typing import List
import time
import logging
import random

logger = logging.getLogger(__name__)

def get_crt_domains(domain: str, max_retries: int = 3, retry_delay: int = 5) -> List[str]:
    subdomains = set()
    
    for attempt in range(max_retries):
        try:
            url = f"https://crt.sh/?q=%25.{domain}&output=json"
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                              '(KHTML, like Gecko) Chrome/120.0 Safari/537.36',
                'Accept': 'application/json'
            }
            
            response = requests.get(url, headers=headers, timeout=30)
            
            # Verificar si la respuesta parece JSON
            content_type = response.headers.get('Content-Type', '').lower()
            if "json" not in content_type:
                logger.warning(f"[crt.sh] Respuesta no es JSON (Content-Type={content_type}). "
                               f"Posible bloqueo o rate-limit.")
                return []  # no fallar todo, solo ignorar este módulo
            
            # Parsear JSON
            data = response.json()
            for entry in data:
                if isinstance(entry, dict):
                    # Procesar common_name
                    cn = entry.get('common_name', '').lower().strip()
                    if cn.endswith(f".{domain}"):
                        subdomains.add(cn)
                    
                    # Procesar name_value
                    names = entry.get('name_value', '').lower().split('\n')
                    for name in names:
                        name = name.strip()
                        if name.endswith(f".{domain}"):
                            subdomains.add(name)
            
            break  # si llegamos aquí, la solicitud fue exitosa

        except requests.RequestException as e:
            logger.warning(f"[crt.sh] Intento {attempt + 1} fallido: {e}")
            if attempt < max_retries - 1:
                sleep_time = retry_delay + random.randint(1, 5)  # evitar patrones
                logger.info(f"[crt.sh] Reintentando en {sleep_time}s...")
                time.sleep(sleep_time)
        except ValueError as e:
            logger.error(f"[crt.sh] Error al decodificar JSON: {e}")
            break
    
    logger.info(f"[crt.sh] Encontrados {len(subdomains)} subdominios para {domain}")
    return sorted(subdomains)
