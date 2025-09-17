def clean_domains(domains, main_domain):
    seen = set()
    cleaned = []

    for domain in domains:
        domain = domain.strip().lower()
        if (domain.endswith(f".{main_domain}") or domain == main_domain) and domain not in seen:
            seen.add(domain)
            cleaned.append(domain)
    return sorted(cleaned)

def save_results(domains, filename):
    with open(filename, 'w') as f:
        for d in domains:
            f.write(f"{d}\n")
