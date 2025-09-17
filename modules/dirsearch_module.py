# modules/dirsearch_module.py
import os
import shlex
import subprocess
from urllib.parse import urlparse

def _getenv_bool(key, default=False):
    v = os.getenv(key)
    if v is None:
        return default
    return v.lower() in ("1", "true", "yes", "y")

def sanitize_filename(name: str) -> str:
    keep = "".join(c for c in name if c.isalnum() or c in ("-", "_", "."))
    return keep or "output"

def hostname_from_target(target: str) -> str:
    parsed = urlparse(target)
    return parsed.hostname or target

def build_dirsearch_cmd(target: str,
                        output_path: str,
                        cmd_from_env: str = None,
                        extensions: str = None,
                        codes: str = None,
                        threads: int = None,
                        delay: float = None,
                        random_agent: bool = None,
                        extra_opts: str = None):
    """
    Construye el comando para dirsearch. Si cmd_from_env contiene espacios (p. ej. "python3 /ruta/dirsearch.py")
    se splittea para respetar la invocación completa.
    """
    # Valores por defecto desde env si no se pasan
    cmd_exe = cmd_from_env or os.getenv("DIRSEARCH_CMD", "dirsearch")
    extensions = extensions or os.getenv("DIRSEARCH_EXT", "php,html,js,txt")
    codes = codes or os.getenv("DIRSEARCH_CODES", "200,301,302")
    threads = threads or int(os.getenv("DIRSEARCH_THREADS", "50"))
    delay = delay or os.getenv("DIRSEARCH_DELAY", "1")
    random_agent = random_agent if random_agent is not None else _getenv_bool("DIRSEARCH_RANDOM_AGENT", True)

    # Si cmd_exe contiene espacios, usar shlex.split para respetar ruta + args
    cmd_list = shlex.split(cmd_exe) if " " in cmd_exe else [cmd_exe]

    cmd = cmd_list + [
        "-u", target,
        "-e", extensions,
        "-i", codes,
        "-t", str(threads),
        "--delay", str(delay),
        "-o", output_path
    ]

    if random_agent:
        cmd.append("--random-agent")

    if extra_opts:
        extra_parts = shlex.split(extra_opts)
        cmd.extend(extra_parts)

    return cmd

def run_dirsearch_for_target(target: str,
                             output_folder: str,
                             output_name: str = None,
                             extensions: str = None,
                             codes: str = None,
                             threads: int = None,
                             delay: float = None,
                             random_agent: bool = None,
                             extra_opts: str = None,
                             timeout: int = None):
    """
    Ejecuta dirsearch y guarda los resultados en output_folder/<hostname>/.
    """
    # hostname limpio
    host = hostname_from_target(target)
    if host.startswith("www."):
        host = host[4:]

    # carpeta final por hostname
    target_folder = os.path.join(output_folder, host)
    os.makedirs(target_folder, exist_ok=True)

    # nombre de archivo seguro
    if output_name:
        safe_name = sanitize_filename(output_name)
    else:
        safe_name = sanitize_filename(f"dirsearch_{host}.txt")

    output_path = os.path.join(target_folder, safe_name)

    # timeout
    if timeout is None:
        t_env = os.getenv("DIRSEARCH_TIMEOUT")
        timeout = int(t_env) if t_env and t_env.isdigit() and int(t_env) > 0 else None

    # construir comando
    cmd = build_dirsearch_cmd(
        target=target,
        output_path=output_path,
        cmd_from_env=os.getenv("DIRSEARCH_CMD"),
        extensions=extensions,
        codes=codes,
        threads=threads,
        delay=delay,
        random_agent=random_agent,
        extra_opts=extra_opts
    )

    try:
        completed = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout)
        if completed.returncode != 0:
            debug_path = output_path + ".debug.txt"
            with open(debug_path, "w", encoding="utf-8") as f:
                f.write("CMD: " + " ".join(shlex.quote(p) for p in cmd) + "\n\n")
                f.write("RETURN CODE: " + str(completed.returncode) + "\n\n")
                f.write("STDOUT:\n" + (completed.stdout or "") + "\n\n")
                f.write("STDERR:\n" + (completed.stderr or "") + "\n\n")
            return {"ok": False, "output_path": output_path, "debug": debug_path, "returncode": completed.returncode}

        return {"ok": True, "output_path": output_path}

    except Exception as e:
        err_path = output_path + ".error.txt"
        with open(err_path, "w", encoding="utf-8") as f:
            f.write(f"Exception running dirsearch: {e}\n")
        return {"ok": False, "output_path": output_path, "error": str(e)}
