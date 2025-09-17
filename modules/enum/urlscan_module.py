# src/modules/urlscan_module.py

import requests
import json
from urllib.parse import urlparse

def get_urlscan_subdomains(domain):
    url = f"https://urlscan.io/api/v1/search/?q=domain:{domain}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
    except requests.RequestException as e:
        print(f"[-] Error al realizar la solicitud HTTP: {e}")
        return []
    except json.JSONDecodeError as e:
        print(f"[-] Error al decodificar la respuesta JSON: {e}")
        return []

    results = data.get('results', [])
    subdomains = []
    for result in results:
        page = result.get('page')
        if page:
            url_parsed = page.get('url')
            if url_parsed:
                subdomain = urlparse(url_parsed).netloc
                subdomains.append(subdomain)

    print(f"[✓] UrlScan encontró {len(subdomains)} subdominios.")
    return subdomains
