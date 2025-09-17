import subprocess
import re
from config.settings import Config

def dnscan_subdomains(domain):
    try:
        command = f"""
        cd {Config.DNSCAN_PATH} && \
        python3 dnscan.py -d {domain} -w subdomains-1000.txt -t 50
        """

        result = subprocess.run(['bash', '-c', command], capture_output=True, text=True, check=True)

        subdomains = []
        for line in result.stdout.splitlines():
            line = line.strip()
            # Busca líneas con subdominios encontrados con IPs
            match = re.match(r"^\d{1,3}(?:\.\d{1,3}){3} - ([\w\.-]+\." + re.escape(domain) + r")$", line)
            if match:
                subdomains.append(match.group(1))

        return list(set(subdomains))

    except subprocess.CalledProcessError as e:
        print(f"[!] Error al ejecutar dnscan: {e.stderr.strip()}")
        return []
    except FileNotFoundError:
        print(f"[!] dnscan.py no encontrado en la ruta especificada.")
        return []
