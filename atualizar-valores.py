"""Atualiza duração e valor da sessão em todas as páginas do site.

COMO USAR
1. Altere os valores abaixo.
2. Rode, dentro desta pasta:  python3 atualizar-valores.py
"""
import re, glob, pathlib

VALORES = {
    "duracao": "50 minutos",
    "valor": "R$ 60,00",
}

pasta = pathlib.Path(__file__).resolve().parent
padrao = re.compile(r'(<span data-v="(\w+)">)[^<]*(</span>)')
total = 0
for arquivo in glob.glob(str(pasta / "*.html")):
    p = pathlib.Path(arquivo)
    texto = p.read_text(encoding="utf8")
    novo, n = padrao.subn(lambda m: m.group(1) + VALORES[m.group(2)] + m.group(3), texto)
    if novo != texto:
        p.write_text(novo, encoding="utf8")
    total += n
print(f"{total} valores atualizados.")
