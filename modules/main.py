# modules/main.py
import os
from urllib.parse import urlparse
from modules import subdomains, url_indexed, xss_scanner, sqli_scanner, open_redirect, httpx_module, indexweb, dirsearch_module
from core import output, utils
from modules.utils import output_handler

def get_output_folder(target, save_arg=None, base_output=None):
    """Devuelve la ruta final donde se guardarán los resultados"""
    if not base_output:
        from config.settings import Config
        base_output = Config.DEFAULT_OUTPUT

    if save_arg:
        return os.path.join(base_output, save_arg)

    hostname = urlparse(target).hostname or target
    # quitar www. si existe
    if hostname.startswith("www."):
        hostname = hostname[4:]
    return os.path.join(base_output, hostname)


def process_target(target, args):
    output_folder = get_output_folder(target, args.save)
    os.makedirs(output_folder, exist_ok=True)
    print(f"\n[+] Analizando: {target}")

    # === Subdominios ===
    subdomains_list = [target]
    if getattr(args, "subdomains", False):
        print(f"[+] Enumerando subdominios de {target}...")
        subdomains_list = subdomains.enumerate(target)
        print(f"[+] Subdominios encontrados: {len(subdomains_list)}")

        if subdomains_list:
            print("[+] Escaneando subdominios con httpx en paralelo...")

            # --- Configuración de paralelismo ---
            chunk_size = 100  # dominios por cada worker
            workers = 2       # número de workers paralelos, ajusta según RAM/CPU

            # Ejecutar httpx en paralelo
            httpx_results = httpx_module.run_httpx_parallel(
                subdomains_list,
                chunk_size=chunk_size,
                workers=workers,
                timeout=30,    # timeout por dominio
                threads=30,    # hilos internos de httpx
                retries=2
            )

            print(f"[+] Resultados de httpx obtenidos: {len(httpx_results)}")

            # Filtrar solo hosts activos
            active_results = httpx_module.filter_active_hosts(httpx_results)

            # --- Preparar resultados completos ---
            active_hosts_set = {r['host'] for r in active_results}

            full_results = active_results + [
                {
                    'url': sub,
                    'host': sub,
                    'ip': '',
                    'scheme': '',
                    'port': 0,
                    'status_code': 0,
                    'title': '',
                    'tech': '',
                    'content_type': '',
                    'response_size': 0,
                    'tls_cn': '',
                    'cname': '',
                    'cdn': False
                }
                for sub in subdomains_list if sub not in active_hosts_set
            ]

            # Filtramos y generamos archivos de salida según tu handler
            vivos, muertos = output_handler.filtrar_dominios(full_results, target, output_folder)

            print(f"[+] Subdominios vivos: {len(vivos)}")
            print(f"[+] Subdominios muertos: {len(muertos)}")
        else:
            print("[-] No se encontraron subdominios válidos.")


    # === URLs indexadas ===
    if getattr(args, "list_indexed", False):
        results = url_indexed.get_urls(target)
        output.save_txt(results, target, "indexed.txt", output_folder)

    # === XSS ===
    if getattr(args, "xss", False):
        results = xss_scanner.scan(target)
        output.save_txt(results, target, "xss.txt", output_folder)

    # === SQL Injection ===
    if getattr(args, "sqlmap", False):
        results = sqli_scanner.run_sqlmap(target)
        output.save_txt(results, target, "sqlmap.txt", output_folder)

    # === Open Redirect ===
    if getattr(args, "open_redirect", False):
        results = open_redirect.check(target)
        output.save_txt(results, target, "redirect.txt", output_folder)

    # === Index Files ===
    if getattr(args, "index_files", False):
        results_dict = indexweb.extract_sensitive_files(subdomains_list, max_workers=getattr(args, "hilos", 1))
        for sub_target, data in results_dict.items():
            path_all = output.save_txt(data["all"], sub_target, "salidatodo.txt", output_folder)
            path_sensitive = output.save_txt(data["sensitive"], sub_target, "dataExtensiones.txt", output_folder)
            path_images = output.save_txt(data["images"], sub_target, "imagenes.txt", output_folder)
            path_js = output.save_txt(data["js"], sub_target, "jsfiles.txt", output_folder)
            path_secrets = output.save_txt(data["secrets"], sub_target, "secret-js.txt", output_folder)

            output.make_unique_sorted(path_all)
            output.make_unique_sorted(path_sensitive)
            output.make_unique_sorted(path_images)
            output.make_unique_sorted(path_js)
            output.make_unique_sorted(path_secrets)

            utils.filter_by_vulnerabilities(sub_target, path_all, output_folder)


    # === Dirsearch ===
# === Dirsearch ===
    if getattr(args, "dirsearch", False):
        print("[+] Ejecutando Dirsearch...")
        output_name = getattr(args, "dirsearch_output_name", None)  # opcional
        result = dirsearch_module.run_dirsearch_for_target(
            target=target,
            output_folder=output_folder,  # aquí es solo la carpeta base
            output_name=output_name       # opcional, solo nombre de archivo
        )
        if result.get("ok"):
            print(f"[+] Dirsearch finalizado. Resultados en: {result['output_path']}")
        else:
            print(f"[!] Error en Dirsearch. Ver detalles en: {result.get('debug') or result.get('error')}")
