from dotenv import load_dotenv
import os

load_dotenv()

THREADS = int(os.getenv("THREADS", 5))
TIMEOUT = int(os.getenv("TIMEOUT", 10))
USER_AGENT = os.getenv("USER_AGENT", "BugHunter/1.0")
PROXY = os.getenv("PROXY", None)