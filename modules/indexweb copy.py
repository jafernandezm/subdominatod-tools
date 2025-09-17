#modules/indexweb.py
import subprocess
import re
import shlex
from concurrent.futures import ThreadPoolExecutor, as_completed

# Extensiones sensibles (compiladas)
SENSITIVE_EXT = re.compile(r"\.(xls|xml|xlsx|json|pdf|sql|doc|docx|pptx|txt|zip|tar\.gz|tgz|bak|7z|rar)(\?|$)", re.IGNORECASE)
# Extensiones de imágenes (compiladas)
IMAGE_EXT = re.compile(r"\.(jpg|jpeg|png|gif|bmp|svg|webp)(\?|$)", re.IGNORECASE)
# Regex para extraer URLs http/https
URL_RE = re.compile(r"https?://[^\s'\"<>{}\)\]]+")

def run_command(cmd):
    """Ejecuta un comando en shell y devuelve lista de líneas (stdout + stderr)."""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        out = result.stdout or ""
        err = result.stderr or ""
        combined = (out + ("\n" + err if err else "")).strip()
        return combined.splitlines() if combined else []
    except Exception as e:
        # Si quieres debug, descomenta la siguiente linea:
        # print(f"Error ejecutando: {cmd} -> {e}")
        return []

def extract_urls_from_lines(lines):
    """Extrae todas las URLs válidas de una lista de líneas con URL_RE."""
    urls = []
    for line in lines:
        if not line:
            continue
        # Buscar todas las coincidencias en la línea
        for m in URL_RE.findall(line):
            urls.append(m.strip())
    return urls

def process_target(target):
    """
    Ejecuta las herramientas contra un target (paraleliza herramientas por target),
    extrae URLs y las clasifica en all, sensitive, images.
    """
    # asegurar valor seguro para shell
    tq = shlex.quote(target)

    # Comandos (usamos katana con -depth 3 -silent según pediste)
    commands = {
        "gau": f"echo {tq} | gau",
        "hakrawler": f"echo {tq} | hakrawler -silent",
        "waybackurls": f"echo {tq} | waybackurls",
        "katana": f"katana -u {tq} -depth 3 -silent"
    }

    all_urls = []
    sensitive_urls = []
    image_urls = []

    # Ejecutar todos los comandos en paralelo (por target)
    with ThreadPoolExecutor(max_workers=len(commands)) as ex:
        futures = {ex.submit(run_command, cmd): name for name, cmd in commands.items()}
        for future in as_completed(futures):
            name = futures[future]
            try:
                lines = future.result()
            except Exception as e:
                print(f"[-] Error ejecutando {name} en {target}: {e}")
                lines = []

            # Extraer URLs de la salida (independiente de si es JSON/HTML/JS)
            urls = extract_urls_from_lines(lines)

            # Clasificar cada URL
            for url in urls:
                if SENSITIVE_EXT.search(url):
                    sensitive_urls.append(url)
                elif IMAGE_EXT.search(url):
                    image_urls.append(url)
                else:
                    all_urls.append(url)

    # Eliminar duplicados y devolver
    return list(set(all_urls)), list(set(sensitive_urls)), list(set(image_urls))


def extract_sensitive_files(targets, max_workers=4):
    """
    Ejecuta process_target en paralelo para una lista de targets.
    Retorna un dict con estructura:
    { "target": { "all": [...], "sensitive": [...], "images": [...] } }
    """
    all_results = {}

    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        future_to_target = {executor.submit(process_target, t): t for t in targets}
        for future in as_completed(future_to_target):
            target = future_to_target[future]
            try:
                all_urls, sensitive_urls, image_urls = future.result()
                all_results[target] = {
                    "all": sorted(all_urls),
                    "sensitive": sorted(sensitive_urls),
                    "images": sorted(image_urls)
                }
            except Exception as e:
                print(f"[-] Error en {target}: {e}")
                all_results[target] = {"all": [], "sensitive": [], "images": []}

    return all_results
