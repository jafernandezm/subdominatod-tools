import os
from urllib.parse import urlparse, parse_qs
from core.output import save_txt, make_unique_sorted, get_domain_name

def filter_by_vulnerabilities(target, filepath, base_output="output"):
    """
    Filtra URLs candidatas para SQLi, XSS, Open Redirect y Keys/Secrets.
    Diseñado para ser usado directamente con sqlmap, dalfox y pruebas de Open Redirect.
    """
    # Patrones
    redirect_params = ['redirect', 'url', 'next', 'goto', 'destination', 'dest']
    secret_keywords = ['apikey', 'token', 'secret', 'key', 'auth', 'bearer']

    # Extensiones excluidas (archivos estáticos)
    excluded_exts = [
        '.js', '.json', '.css', '.png', '.jpg', '.jpeg', '.gif', '.bmp',
        '.svg', '.webp', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.pdf', '.zip'
    ]

    sql_lines, xss_lines, open_redirect_lines, keys_lines = [], [], [], []

    with open(filepath, "r") as f:
        lines = f.read().splitlines()

    for url in lines:
        url = url.strip()
        url_lower = url.lower()

        # Descarta recursos estáticos
        if any(url_lower.endswith(ext) for ext in excluded_exts):
            continue

        parsed = urlparse(url)
        qs = parse_qs(parsed.query)

        # SQLi: URLs con parámetros
        if qs:
            sql_lines.append(url)

        # XSS: URLs con parámetros
        if qs:
            xss_lines.append(url)

        # Open Redirect: parámetros típicos de redirección
        if any(param in qs for param in redirect_params):
            open_redirect_lines.append(url)

        # Keys / Secrets: parámetros con keywords
        if any(k in qs for k in secret_keywords):
            keys_lines.append(url)

    # Guardar resultados
    save_txt(sql_lines, target, "sql.txt", base_output)
    save_txt(xss_lines, target, "xss.txt", base_output)
    save_txt(open_redirect_lines, target, "openRedirect.txt", base_output)
    save_txt(keys_lines, target, "keys.txt", base_output)

    # Unificar y ordenar
    domain_folder = os.path.join(base_output, get_domain_name(target))
    for file in ["sql.txt", "xss.txt", "openRedirect.txt", "keys.txt"]:
        make_unique_sorted(os.path.join(domain_folder, file))

    print("[+] Filtrado profesional de vulnerabilidades completado")
