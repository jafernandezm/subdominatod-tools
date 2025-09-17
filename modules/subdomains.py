# modules/subdomains.py
from concurrent.futures import ThreadPoolExecutor, as_completed
from modules.enum.amass_module import get_amass
from modules.enum.crt_module import get_crt_domains
from modules.enum.dnscan_module import dnscan_subdomains
from modules.enum.virustotal_module import get_virustotal_subdomains
from modules.enum.urlscan_module import get_urlscan_subdomains
from modules.enum.subdominator_module import get_subdominator
from modules.utils.helpers import clean_domains
from modules.enum.subfinder import get_subfinder_results
from modules.enum.shuffledns import ShuffleDNS  
def run_module(module_func, domain):
    try:
        return module_func(domain)
    except Exception as e:
        print(f"[!] Error en módulo {module_func.__name__}: {e}")
        return []
def get_shuffledns_subdomains(domain):
    wordlist = "modules/dir/diccionarios.txt"
    resolvers = "modules/dir/resolvers.txt"
    scanner = ShuffleDNS(domain, wordlist, resolvers)
    success = scanner.run_bruteforce()
    if success:
        return scanner.get_results()
    return []

def enumerate(domain):
    modules = [
        get_amass,
        get_crt_domains,
        #dnscan_subdomains,
        get_virustotal_subdomains,
        get_urlscan_subdomains,
        get_subdominator,
        get_subfinder_results,
        #get_shuffledns_subdomains,
    ]
    all_results = []

    # Crear ThreadPool con tantos hilos como módulos
    with ThreadPoolExecutor(max_workers=len(modules)) as executor:
        futures = {executor.submit(run_module, m, domain): m for m in modules}
        for future in as_completed(futures):
            results = future.result()
            all_results.extend(results)

    return clean_domains(all_results, domain)
