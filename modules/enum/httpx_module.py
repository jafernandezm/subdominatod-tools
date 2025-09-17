# modules/httpx_module.py
import subprocess
import json
import logging
from typing import List, Dict
from tempfile import NamedTemporaryFile
from concurrent.futures import ThreadPoolExecutor
from config.settings import Config

logger = logging.getLogger(__name__)

def run_httpx_scan(domains: List[str], timeout: int = 30, threads: int = None, retries: int = None) -> List[Dict]:
    """Ejecuta httpx sobre una lista de dominios y devuelve resultados crudos."""
    if not domains:
        return []

    threads = threads or getattr(Config, 'HTTPX_THREADS', 50)
    retries = retries or getattr(Config, 'HTTPX_RETRIES', 2)
    httpx_path = getattr(Config, 'HTTPX_PATH', '/usr/local/bin/httpx')

    results = []

    if not httpx_path or not os.path.isfile(httpx_path):
        logger.error(f"No se encontró httpx en {httpx_path}")
        return []

    try:
        with NamedTemporaryFile('w+', suffix='.txt') as tmpfile:
            tmpfile.write('\n'.join(domains))
            tmpfile.flush()

            command = [
                httpx_path,
                '-l', tmpfile.name,
                '-probe',
                '-json',
                '-timeout', str(timeout),
                '-retries', str(retries),
                '-threads', str(threads),
                '-ports', '80,81,443,3000,8000,8008,8080,8081,8088,8443,8888,9000,9090'
            ]

            logger.info(f"Ejecutando httpx para {len(domains)} dominios")
            process = subprocess.run(
                command,
                capture_output=True,
                text=True,
                timeout=max(len(domains) * timeout * 2, 60)
            )

            for line in process.stdout.splitlines():
                try:
                    results.append(json.loads(line))
                except json.JSONDecodeError:
                    logger.warning(f"Línea no parseable: {line}")

    except subprocess.TimeoutExpired:
        logger.warning("httpx excedió el tiempo límite")
    except Exception as e:
        logger.error(f"Error inesperado en httpx: {e}")

    return results


def run_httpx_parallel(domains: List[str], chunk_size: int = 100, workers: int = 2, timeout: int = 30, threads: int = None, retries: int = None) -> List[Dict]:
    """Ejecuta httpx en paralelo, dividiendo la lista de dominios en chunks."""
    results = []

    def worker(sublist):
        return run_httpx_scan(sublist, timeout=timeout, threads=threads, retries=retries)

    with ThreadPoolExecutor(max_workers=workers) as executor:
        futures = [executor.submit(worker, domains[i:i+chunk_size])
                   for i in range(0, len(domains), chunk_size)]
        for f in futures:
            results.extend(f.result())

    return results


def filter_active_hosts(httpx_results: List[Dict]) -> List[Dict]:
    """Filtra solo los hosts activos y devuelve información resumida."""
    active_hosts = []

    for result in httpx_results:
        if not result.get('failed', True) and result.get('status_code', 0) < 500:
            tech_list = []

            # webserver puede ser string o lista
            webserver = result.get('webserver')
            if isinstance(webserver, list):
                tech_list.extend(webserver)
            elif webserver:
                tech_list.append(str(webserver))

            # frameworks, cms y tech (array principal de httpx)
            for key in ['frameworks', 'cms', 'tech']:
                value = result.get(key, [])
                if isinstance(value, list):
                    tech_list.extend(value)
                elif value:
                    tech_list.append(str(value))

            host_info = {
                'url': result.get('url', ''),
                'host': result.get('host', ''),
                'ip': result.get('ip', ''),
                'scheme': result.get('scheme', ''),
                'port': result.get('port', 0),
                'status_code': result.get('status_code', 0),
                'title': result.get('title', ''),
                'tech': ', '.join(sorted(set(tech_list))),
                'content_type': result.get('content_type', ''),
                'response_size': result.get('content_length', 0),
                'tls_cn': result.get('tls_cn', ''),
                'cname': result.get('cname', ''),
                'cdn': result.get('cdn', False),
            }
            active_hosts.append(host_info)

    logger.info(f"Hosts activos encontrados: {len(active_hosts)}")
    return active_hosts
