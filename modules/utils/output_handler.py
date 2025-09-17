# modules/utils/output_handler.py
import json
import os
import logging
from urllib.parse import urlparse

logger = logging.getLogger(__name__)

def limpiar_url(url: str) -> str:
    """Quita http(s):// y devuelve dominio limpio (sin puerto)."""
    parsed = urlparse(url)
    host = parsed.netloc if parsed.netloc else parsed.path
    if host.startswith("www."):
        host = host[4:]
    return host.split(":")[0]  # devolver solo dominio sin puerto


def filtrar_dominios(json_objects, domain, output_folder):
    """Filtra dominios vivos y muertos, guarda JSON y TXT."""

    dominios_positivos = []
    dominios_negativos = []

    for obj in json_objects:
        status = obj.get('status_code', 0)
        tech_list = obj.get('tech', [])
        if isinstance(tech_list, str):
            tech_list = [tech_list] if tech_list else []

        data = {
            'url': obj.get('url', ''),
            'host': obj.get('host', ''),
            'ip': obj.get('ip', ''),
            'scheme': obj.get('scheme', ''),
            'port': obj.get('port', 0),
            'status_code': status,
            'title': obj.get('title', ''),
            'tech': tech_list,
            'content_type': obj.get('content_type', ''),
            'response_size': obj.get('response_size', 0),
            'tls_cn': obj.get('tls_cn', ''),
            'cname': obj.get('cname', ''),
            'cdn': obj.get('cdn', False)
        }

        if status in [200, 301, 302, 303, 304, 307, 308]:
            dominios_positivos.append(data)
        else:
            dominios_negativos.append(data)

    os.makedirs(output_folder, exist_ok=True)

    # --- Normalización especial para TXT ---
    def normalizar(lista):
        vistos = set()
        resultado = []

        for d in lista:
            base = limpiar_url(d['url'])
            try:
                puerto = int(d.get('port', 0))  # Convertir a entero
            except ValueError:
                puerto = 0

            if puerto in [80, 443, 0]:
                # Solo dominio limpio, ignorar 80 y 443
                if base not in vistos:
                    vistos.add(base)
                    resultado.append(base)
            else:
                host_con_puerto = f"{base}:{puerto}"
                # Evitar duplicados
                if base not in vistos and host_con_puerto not in vistos:
                    vistos.add(host_con_puerto)
                    resultado.append(host_con_puerto)

        return sorted(resultado)

    files = {
        "positivos.json": dominios_positivos,
        "negativos.json": dominios_negativos,
        "positivos.txt": normalizar(dominios_positivos),
        "negativos.txt": normalizar(dominios_negativos),
    }

    for filename, content in files.items():
        path = os.path.join(output_folder, f"{domain}_{filename}")
        with open(path, "w") as f:
            if filename.endswith(".json"):
                json.dump(content, f, indent=2)
            else:
                f.writelines([h + "\n" for h in content])
        logger.info(f"Archivo guardado: {path}")

    return dominios_positivos, dominios_negativos
