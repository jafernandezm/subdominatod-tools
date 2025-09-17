# main.py
import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urlparse
from modules.main import process_target
from config.settings import Config
from modules import open_redirect

def normalize_domain(value: str) -> str:
    """Normaliza una URL o dominio: devuelve hostname sin www. si es posible."""
    v = value.strip()
    parsed = urlparse(v if "://" in v else ("http://" + v))
    hostname = parsed.hostname or v
    if hostname.startswith("www."):
        hostname = hostname[4:]
    return hostname

def main():
    parser = argparse.ArgumentParser(description="BugHunter Toolkit")
    parser.add_argument("-u", "--url", help="Dominio/URL objetivo")
    parser.add_argument("-l", "--list", help="Archivo con lista de dominios")
    parser.add_argument("-d", "--subdomains", action="store_true")
    parser.add_argument("-li", "--list-indexed", action="store_true")
    parser.add_argument("-X", "--xss", action="store_true")
    parser.add_argument("-sqlm", "--sqlmap", action="store_true")
    parser.add_argument("-O", "--open-redirect", action="store_true")
    parser.add_argument("-i", "--index-files", action="store_true")
    parser.add_argument("--hilos", type=int, default=1)
    parser.add_argument("--save", help="Carpeta de salida para guardar resultados")
    parser.add_argument("-Or", "--open-redirect-results", help="Carpeta base con los resultados a validar")
    parser.add_argument("--dirsearch", action="store_true", help="Ejecutar dirsearch (fuzzing) sobre el target")
    args = parser.parse_args()

    # Open Redirect especial (modo resultados)
    if args.open_redirect_results:
        open_redirect.probar_open_redirects(Config.carpeta_base, Config.payloads_file, Config.output_file)
        return

    # Lista de objetivos
    targets = []

    # Si se pasó -l (archivo), lo procesamos (como antes)
    if args.list:
        with open(args.list, "r") as f:
            for line in f:
                domain = line.strip().lower()
                if domain.startswith("www."):
                    domain = domain[4:]
                if domain:
                    targets.append(domain)

    # Si se pasó -u (único objetivo), lo agregamos normalizado
    if args.url:
        targets.append(normalize_domain(args.url.lower()))

    if not targets:
        print("[-] Debes indicar un objetivo con -u, -l o usar -Or para validar Open Redirects")
        return

    # Ejecutar en paralelo
    with ThreadPoolExecutor(max_workers=args.hilos) as executor:
        futures = {executor.submit(process_target, t, args): t for t in targets}
        for future in as_completed(futures):
            t = futures[future]
            try:
                future.result()
            except Exception as e:
                print(f"[!] Error procesando {t}: {e}")


if __name__ == "__main__":
    main()
