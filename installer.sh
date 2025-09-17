#!/bin/bash
set -e

# Función para verificar comando
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

echo "[*] Verificando Go..."
if ! command_exists go; then
    echo "[+] Go no encontrado, instalando..."
    sudo apt update
    sudo apt install -y golang-go
else
    echo "[+] Go ya está instalado: $(go version)"
fi

# Carpeta GOPATH/bin
GOBIN=$(go env GOPATH)/bin
export PATH=$PATH:$GOBIN

# Instalar herramientas Go
echo "[*] Instalando qsreplace..."
go install github.com/tomnomnom/qsreplace@latest

echo "[*] Instalando hakrawler..."
go install github.com/hakluke/hakrawler@latest

echo "[*] Instalando httpx..."
go install github.com/projectdiscovery/httpx/cmd/httpx@latest

echo "[+] Instalación completa. Verificando versiones:"
qsreplace -h | head -1
hakrawler -h | head -1
httpx -h | head -1

echo "[+] Todo listo!"
