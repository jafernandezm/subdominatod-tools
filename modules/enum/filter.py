from typing import List

def filter_valid_domains(domains: List[str], main_domain: str) -> List[str]:
    valid_domains = set()
    
    for domain in domains:
        domain = domain.strip().lower()
        if domain.endswith(f".{main_domain}") or domain == main_domain:
            valid_domains.add(domain)
    
    return sorted(valid_domains)
