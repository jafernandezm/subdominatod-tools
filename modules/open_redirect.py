import os
import glob
import asyncio
import httpx
from urllib.parse import urlparse, parse_qs, urlencode, urlunparse, unquote
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()
CONCURRENCY = int(os.getenv("PETICIONESOPEN", 100))
TIMEOUT = int(os.getenv("TIMEOUTOPEN", 5))

async def test_url(semaphore, client, url, payload):
    async with semaphore:
        parsed = urlparse(url)
        qs = parse_qs(parsed.query)
        results = []

        for param in qs:
            qs_copy = qs.copy()
            qs_copy[param] = [payload]
            new_query = urlencode(qs_copy, doseq=True)
            new_url = urlunparse(parsed._replace(query=new_query))

            try:
                r = await client.get(new_url, timeout=TIMEOUT, follow_redirects=False)
                location = r.headers.get("location", "")
                if payload in unquote(location):
                    results.append(f"{new_url} -> {location}")
            except:
                pass  # ignorar errores para solo mostrar positivos
        return results

async def process_file(semaphore, client, archivo, payloads):
    validated = []
    with open(archivo, "r") as f:
        urls = [line.strip() for line in f if line.strip()]

    tasks = []
    for url in urls:
        parsed = urlparse(url)
        if parse_qs(parsed.query):
            for payload in payloads:
                tasks.append(test_url(semaphore, client, url, payload))

    for task_results in await asyncio.gather(*tasks):
        validated.extend(task_results)

    return validated

async def probar_open_redirects_async(carpeta_base, payloads_file, output_file):
    with open(payloads_file, "r") as f:
        payloads = [line.strip() for line in f if line.strip()]

    archivos = glob.glob(os.path.join(carpeta_base, "**", "openRedirect.txt"), recursive=True)

    semaphore = asyncio.Semaphore(CONCURRENCY)
    all_validated = []

    async with httpx.AsyncClient() as client:
        tasks = [process_file(semaphore, client, archivo, payloads) for archivo in archivos]
        for file_results in await asyncio.gather(*tasks):
            all_validated.extend(file_results)

    if all_validated:
        os.makedirs(os.path.dirname(output_file), exist_ok=True)
        with open(output_file, "w") as f:
            f.write("\n".join(all_validated))
        print(f"\n[+] Resultados positivos guardados en {output_file}")
    else:
        print("\n[-] No se encontraron redirecciones válidas.")

def probar_open_redirects(carpeta_base, payloads_file, output_file):
    asyncio.run(probar_open_redirects_async(carpeta_base, payloads_file, output_file))
