# Projetos

Cada novo briefing ganha uma subpasta aqui dentro (ex.: `projetos/torra-da-vila/`) contendo:
- `briefing.md` — cópia preenchida de `TEMPLATE-briefing.md` (Passo 1, incluindo o nível de autonomia).
- `processo.md` — Passos 1 a 8 (briefing, background, mesmo lado, lado oposto, moodboard, síntese e partidos, rascunhos, execução + checklist de entrega respondido).
- `moodboard-refs/` — imagens reais baixadas na pesquisa (Passos 3–5), com links de origem anotados no `processo.md`.
- `moodboard.html` / `moodboard.png` — moodboard visual conceitual (Passo 5).
- `rascunhos/` — variações cruas em texto ou SVG para validação `[D]` (Passo 7).
- `entrega/` — execução final e desdobramentos após aprovação do Passo 7 (gate: `../conhecimento/09-checklist-entrega.md`).

## Especificações de Saída (`entrega/`)

### Formatos
| Conteúdo | Formato mestre | Derivados obrigatórios |
|---|---|---|
| Logo / wordmark / símbolo | **SVG** (vetor editável, nunca bitmap de gerador) | PNG transparente nos tamanhos do briefing; PDF vetor quando houver impressão |
| Pôster / anúncio / embalagem (impressão) | PDF vetor (fontes em curvas ou licenciadas) | PNG 300 dpi na dimensão final |
| Social / tela | PNG ou SVG (1× e 2×) | dimensões exatas do briefing (ex.: 1080×1080, 1080×1920) |
| Mockups | PNG | identificados como mockup no `processo.md` |

### Nomeação
`<projeto>-<peça>-<variante>-<dimensão>.<ext>` — ex.: `torra-da-vila-logo-a-cor-1024.png`, `torra-da-vila-saco-250g-v1.pdf`.

### Regras
- Versões finais numeradas (`v1`, `v2`…); nunca sobrescrever entrega aprovada `[D]`.
- Cores: CMYK/Pantone declarado quando o suporte for impressão; RGB/sRGB para tela (registrar no `processo.md`).
- Fontes: listar famílias + licença no `processo.md`; incluir arquivos ou links quando a licença permitir redistribuição.
- Toda entrega passa pelo gate de `../conhecimento/09-checklist-entrega.md` antes de sair da pasta.
