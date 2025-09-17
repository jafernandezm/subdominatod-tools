import subprocess
import os

class ShuffleDNS:
    def __init__(self, domain, wordlist, resolvers, temp_output="modules/dir/brute_subdomain.txt", massdns_path=None):
        self.domain = domain
        self.wordlist = wordlist
        self.resolvers = resolvers
        self.temp_output = temp_output
        self.massdns_path = massdns_path
        self.results = []

    def run_bruteforce(self):
        """Ejecuta shuffledns y guarda resultados en memoria"""
        cmd = [
            "shuffledns",
            "-d", self.domain,
            "-w", self.wordlist,
            "-r", self.resolvers,
            "-o", self.temp_output,
            "-mode", "bruteforce",
            "-sw",
            "-t", "100"
        ]

        if self.massdns_path:
            cmd.extend(["-m", self.massdns_path])

        print(f"[INFO] Ejecutando: {' '.join(cmd)}")
        try:
            subprocess.run(cmd, capture_output=True, text=True, check=True)
        except subprocess.CalledProcessError as e:
            print(f"[ERROR] Ocurrió un error al ejecutar shuffledns:\n{e.stderr}")
            return False

        # Leer resultados
        if os.path.exists(self.temp_output):
            with open(self.temp_output, "r") as f:
                self.results = [line.strip() for line in f if line.strip()]
            # Borrar el archivo temporal
            os.remove(self.temp_output)
        return True

    def get_results(self):
        """Devuelve los subdominios encontrados"""
        return self.results
