#core/output.py
import os
from urllib.parse import urlparse

def get_domain_name(target):
    """
    Devuelve el hostname completo sin cortar.
    Ej:
      - https://bfb.com.br -> bfb.com.br
      - https://sub.test.com -> sub.test.com
    """
    hostname = urlparse(target).hostname or target
    return hostname.strip()

def save_txt(data, target, filename, base_output="output", save_arg=None):
    """
    Guarda resultados en:
    - Caso -u: output/<dominio>/<filename>
    - Caso -l con --save: output/<save>/<dominio>/<filename>
    """
    domain = get_domain_name(target)

    if save_arg:  # caso lista con --save itau
        folder = os.path.join(base_output, save_arg, domain)
    else:         # caso -u normal
        folder = os.path.join(base_output, domain)

    os.makedirs(folder, exist_ok=True)

    filepath = os.path.join(folder, filename)
    with open(filepath, "a") as f:
        for line in data:
            f.write(line.strip() + "\n")

    print(f"[+] Resultados guardados en {filepath}")
    return filepath

def make_unique_sorted(filepath):
    """
    Lee un archivo, elimina duplicados, ordena alfabéticamente
    y sobrescribe el mismo archivo.
    """
    try:
        with open(filepath, "r") as f:
            lines = f.read().splitlines()

        unique_sorted = sorted(set(line.strip() for line in lines if line.strip()))

        with open(filepath, "w") as f:
            for line in unique_sorted:
                f.write(line + "\n")

        print(f"[+] Archivo procesado (único y ordenado): {filepath}")

    except FileNotFoundError:
        print(f"[-] Archivo no encontrado: {filepath}")
