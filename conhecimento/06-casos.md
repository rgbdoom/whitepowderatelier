# Casos (C-n)

Obras e projetos, do designer e de outros, analisados.

---

## C-1 — Capa experimental "O Vazio" (corte "VA" sangrando à direita, 2026)
- **Origem:** [IA] sugestão visual em `aplicacao-visual-v3.html` (Movimento 03), destacada espontaneamente pelo designer [D].
- **O que é e em que contexto foi feito:** Simulação de capa 2:3 para um livro fictício de ensaios (*O Vazio*), contraposta a uma capa superdeterminada e a um miolo clássico.
- **Decisões principais e restrições:** ~75% da área deixada em branco ativo; nome do autor e gênero no topo esquerdo em corpo pequeno; a palavra `VAZIO` em corpo monumental (245px) empurrada para o canto inferior direito de modo que apenas `VA` aparece dentro do corte da capa frontal.
- **Segue:** `F-22` (o vazio constitui o equilíbrio), `F-42` (figura e fundo: o vazio ativo empurra e esmaga o tipo), `F-111` (amplificação pela simplificação), `F-114` (fechamento na lacuna / *closure* — o leitor completa a palavra mentalmente ou imagina sua continuação na lombada/4ª capa, `F-53`).
- **Quebra:** A regra convencional de manter o título integralmente legível na capa frontal (`T-18` — clareza imediata × participação ativa). Mantém firme a legibilidade dos créditos e a proteção do miolo (separando o papel de ativar na capa e proteger na leitura longa).
- **O que eu digo sobre ele:** [D] Em 2026-11-13, ao ver o recorte `VA` na capa de *O Vazio*, o designer aprovou diretamente a provocação visual ("isso aqui ficou foda"). *Pendente aprofundar [D]:* se na prática deixaria `VA` morrer no corte ou completaria `ZIO` na lombada/contracapa.
- **Papel no sistema `[IA] (2026-11-17):** C-1 é a **calibração oficial do nível de ousadia** para a "regra dos 3 partidos" (Passo 6 — o partido provocativo deve mirar neste nível: quebra grande, mas sobre base firme e nascida do conteúdo). Aprovado `[D]` implicitamente pela reação de 2026-11-13.

---

## C-2 — Auditoria cruzada: Lente Editorial vs. taste-skill (`aplicacao-visual` v1 → v3, 2026)
- **Origem:** [IA] teste técnico solicitado pelo designer [D] em 2026-11-13.
- **O que é e em que contexto foi feito:** Submissão do artefato visual da Lente aos scripts validadores da skill `design-taste-frontend` (`copy-lint.mjs` e `consistency.mjs`).
- **Decisões principais e restrições:** Aproveitamento na v2 dos ajustes de higiene web que servem a qualquer suporte (`h1 > h2`, texto corrido `>= 16px`, `skip-link`, `<main>`, metadados); recusa na v3 das imposições de landing page comercial (botões de CTA obrigatórios, sorteio por CLI em vez de forma derivada do texto, proibição de sangria unilateral).
- **Segue:** `F-9` (hierarquia estrutural), `F-67` (acessibilidade comunicativa), `F-57` (forma nasce do conteúdo, na recusa ao sorteio de estilo).
- **Quebra:** Regras da `taste-skill` sobre margens idênticas de container e proibição de sobreposição/sangria (`F-18`, `F-33` exigem romper a margem com controle).
- **O que eu digo sobre ele:** [D] Gostou dos ajustes técnicos da v2, mas apontou que a skill trazia resultado pouco arrojado para direção de arte editorial, escolhendo explicitamente o caminho editorial da Lente ("o caminho 1, sem dúvida") que gerou a v3.
