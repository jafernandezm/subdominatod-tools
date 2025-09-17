import subprocess
import re
import shlex
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests

# Extensiones sensibles (compiladas)
SENSITIVE_EXT = re.compile(r"\.(xls|xml|xlsx|json|pdf|sql|doc|docx|pptx|txt|zip|tar\.gz|tgz|bak|7z|rar)(\?|$)", re.IGNORECASE)
# Extensiones de imágenes (compiladas)
IMAGE_EXT = re.compile(r"\.(jpg|jpeg|png|gif|bmp|svg|webp)(\?|$)", re.IGNORECASE)
# Extensiones JS
JS_EXT = re.compile(r"\.(js|json)(\?|$)", re.IGNORECASE)

# Regex para extraer URLs http/https
URL_RE = re.compile(r"https?://[^\s'\"<>{}\)\]]+")

# Regex para posibles secretos
SECRET_PATTERNS = re.compile(r"apikey|token|secret|key|authorization|bearer\s+[a-z0-9]+", re.IGNORECASE)

def run_command(cmd):
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        out = result.stdout or ""
        err = result.stderr or ""
        combined = (out + ("\n" + err if err else "")).strip()
        return combined.splitlines() if combined else []
    except Exception:
        return []

def extract_urls_from_lines(lines):
    urls = []
    for line in lines:
        if not line:
            continue
        urls.extend([m.strip() for m in URL_RE.findall(line)])
    return urls

def extract_js_files(urls):
    return [u for u in urls if JS_EXT.search(u)]

def scan_js_for_secrets(js_urls, max_lines=10):
    """
    Escanea JS en busca de secretos y guarda las primeras `max_lines` líneas del contenido.
    """
    secrets = []
    for url in js_urls:
        try:
            r = requests.get(url, timeout=8)
            if r.status_code == 200:
                lines = r.text.splitlines()
                snippet = "\n".join(lines[:max_lines])
                for match in SECRET_PATTERNS.findall(r.text):
                    secrets.append(f"{url} -> {match}\n{snippet}")
        except requests.RequestException:
            continue
    return list(set(secrets))

def process_target(target):
    tq = shlex.quote(target)
    commands = {
        "gau": f"echo {tq} | gau",
        "hakrawler": f"echo {tq} | hakrawler -silent",
        "waybackurls": f"echo {tq} | waybackurls",
        "katana": f"katana -u {tq} -depth 3 -silent"
    }

    all_urls = []
    sensitive_urls = []
    image_urls = []

    with ThreadPoolExecutor(max_workers=len(commands)) as ex:
        futures = {ex.submit(run_command, cmd): name for name, cmd in commands.items()}
        for future in as_completed(futures):
            name = futures[future]
            try:
                lines = future.result()
            except Exception as e:
                print(f"[-] Error ejecutando {name} en {target}: {e}")
                lines = []

            urls = extract_urls_from_lines(lines)
            for url in urls:
                if SENSITIVE_EXT.search(url):
                    sensitive_urls.append(url)
                elif IMAGE_EXT.search(url):
                    image_urls.append(url)
                else:
                    all_urls.append(url)

    # Extraer JS y secretos con snippet de las primeras líneas
    js_urls = extract_js_files(all_urls + sensitive_urls)
    js_secrets = scan_js_for_secrets(js_urls, max_lines=10)

    return (
        list(set(all_urls)),
        list(set(sensitive_urls)),
        list(set(image_urls)),
        list(set(js_urls)),
        list(set(js_secrets))
    )

def extract_sensitive_files(targets, max_workers=4):
    all_results = {}
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        future_to_target = {executor.submit(process_target, t): t for t in targets}
        for future in as_completed(future_to_target):
            target = future_to_target[future]
            try:
                all_urls, sensitive_urls, image_urls, js_urls, js_secrets = future.result()
                all_results[target] = {
                    "all": sorted(all_urls),
                    "sensitive": sorted(sensitive_urls),
                    "images": sorted(image_urls),
                    "js": sorted(js_urls),
                    "secrets": sorted(js_secrets)
                }
            except Exception as e:
                print(f"[-] Error en {target}: {e}")
                all_results[target] = {
                    "all": [], "sensitive": [], "images": [], "js": [], "secrets": []
                }
    return all_results
