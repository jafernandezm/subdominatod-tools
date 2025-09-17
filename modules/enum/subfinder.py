import subprocess

def run_subfinder(domain, output_file="subdomain.txt"):
    """
    Ejecuta subfinder para un dominio y guarda el resultado en un archivo.
    """
    try:
        command = [
            "subfinder",
            "-d", domain,
            "-all",
            "-o", output_file
        ]
        subprocess.run(command, capture_output=True, text=True, check=True)
        print(f"[+] Subfinder ejecutado con éxito. Resultados guardados en {output_file}")
        return output_file

    except subprocess.CalledProcessError as e:
        print(f"[!] Error ejecutando Subfinder: {e.stderr.strip()}")
        return None
    except FileNotFoundError:
        print("[!] Subfinder no encontrado. Verifica que esté en tu PATH.")
        return None


def get_subfinder_results(domain):
    """
    Devuelve los subdominios encontrados por Subfinder como lista.
    """
    output_file = run_subfinder(domain)
    if output_file:
        with open(output_file, "r") as f:
            subdomains = [line.strip() for line in f if line.strip()]
        return subdomains
    return []
