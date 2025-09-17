import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    os.environ["PATH"] = f"{os.path.expanduser('~')}/go/bin:{os.environ['PATH']}"
    DEFAULT_OUTPUT = os.getenv("OUTPUT_FOLDER", "output")
    payloads_file = os.getenv("OPENREDIRECT_PAYLOADS")
    carpeta_base = os.getenv("OPENREDIRECT_INPUT")
    output_file = os.getenv("OPENREDIRECT_OUTPUT")
    HTTPX_PATH = os.getenv('PATH_HTTPX')
    AMASS_PATH = os.getenv('PATH_AMASS')
    DNSCAN_PATH = os.getenv('PATH_DNSCAN')
    WORDLIST_PATH = os.getenv('WORDLIST_PATH')
    SUBDOMINATOR_PATH = os.getenv("SUBDOMINATOR_PATH")
    DNSCAN_PATH = os.getenv("DNSCAN_PATH")
    threads = os.getenv('HTTPX_THREADS', 50)
    retries = os.getenv('HTTPX_RETRIES', 2)