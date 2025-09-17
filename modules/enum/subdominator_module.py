import subprocess
import re
from config.settings import Config

def get_subdominator(domain):
    try:
        # Llamar al binario directamente con su ruta absoluta
        command = f"/home/warrior/Escritorio/Bugbountry/herramienta/env/bin/subdominator -d {domain}"
        result = subprocess.run(command, shell=True, capture_output=True, text=True, check=True)

        subdomains = []
        for line in result.stdout.splitlines():
            line = line.strip()
            if line and domain in line and not line.startswith("["):
                if re.match(r"^(?:[a-zA-Z0-9_\-]+\.)+" + re.escape(domain) + r"$", line):
                    subdomains.append(line)
        print(f"[+] Subdominator ha encontrado {len(subdomains)} subdominios.")
        return list(set(subdomains))

    except subprocess.CalledProcessError as e:
        print(f"[!] Error al ejecutar Subdominator: {e.stderr.strip()}")
        return []
    except FileNotFoundError:
        print(f"[!] Subdominator no encontrado.")
        return []


