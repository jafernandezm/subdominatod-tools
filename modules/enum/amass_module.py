# modules/enum/amass_module.py
import subprocess
from config.settings import Config

def get_amass(domain, timeout=1):
    try:
        command = ['amass', 'enum', '-d', domain, '-timeout', str(timeout), '-nocolor']
        result = subprocess.run(command, capture_output=True, text=True, check=True)
        
        subdomains = set()
        for line in result.stdout.splitlines():
            line = line.strip()
            if line and domain in line:
                # Tomar solo el subdominio limpio
                subdomains.add(line.split(' ')[0])

        print(f"[+] Amass encontró {len(subdomains)} subdominios.")
        return list(subdomains)

    except subprocess.CalledProcessError as e:
        print(f"[!] Error en Amass (código {e.returncode}): {e.stderr.strip()}")
        return []
    except FileNotFoundError:
        print(f"[!] Amass no encontrado en: {Config.AMASS_PATH}")
        return []