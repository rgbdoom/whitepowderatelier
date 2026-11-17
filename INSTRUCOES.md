# INSTRUCOES.md — Sistema de Direção de Arte e Design

## Propósito
Esta pasta reúne a base de conhecimento destilada de 16 livros de design (`conhecimento/`) e o processo oficial de trabalho do designer para **qualquer projeto** (identidade visual, embalagem, pôster, anúncio, editorial, sinalização ou produto).

## Hierarquia das fontes
Todo conhecimento registrado indica sua origem:
1. **`[D]` Designer** — o que você decidiu, corrigiu ou validou. Tem prioridade sobre tudo.
2. **`[L]` Livro** — o que está destilado em `conhecimento/` (`F-1` a `F-118`, `T-1` a `T-23`, autores e glossário).
3. **`[IA]` Interpretação externa** — sempre marcada como rascunho/sugestão, nunca apresentada como decisão sua.

## Como trabalhar em qualquer projeto (Os 9 Passos Obrigatórios)
Antes de propor soluções ou gerar qualquer imagem/layout, leia `conhecimento/00-indice.md` e `conhecimento/01-lente.md` e execute **na ordem**:

### Fase 1 — Expansão
1. **Briefing & Tensões:** preencher `projetos/<nome>/briefing.md` a partir de `projetos/TEMPLATE-briefing.md` (campos ★ obrigatórios; campo ausente vira `N/I` + pergunta registrada, nunca invenção). Definir a **tensão central** em uma frase e o **nível de autonomia**:
   - **Supervisionado** — para nos Passos 5, 7 e 8 (validação `[D]` de moodboard, rascunhos e final).
   - **Padrão** — para só no Passo 7 (parada obrigatória atual).
   - **Autônomo** — executa até o Passo 8 sem parar; todas as decisões sem validação `[D]` são registradas e justificadas no `processo.md` para revisão a posteriori.
2. **Background (`conhecimento/`):** puxar livros, autores, fichas (`F-*`) e tensões (`T-*`) ligados ao problema — incluindo as posições `[IA provisório]` das tensões (`05-tensoes.md`) e o repertório atual de `07-contemporaneidade.md`.
3. **Mesmo Lado:** buscar casos reais no **mesmo mercado** (o que funciona e o que virou clichê).
4. **Lado Oposto:** buscar casos reais em **outros mercados sem relação direta** para sair da bolha. Como escolher: partir da **tensão central do briefing** e procurar mercados onde essa mesma tensão já foi resolvida visualmente (ex.: afeto × rigor → editoras independentes; código interno de comunidade → gráfica queer/musical; estrutura urbana → arquitetura e sinalização).
   > **Regra `[D]` (2026-11-15):** sempre que apresentar ou listar referências (Passos 3 e 4 ou a pedido do designer), incluir os **links (URLs)** das fontes encontradas, não apenas os nomes ou arquivos locais.
   > **Protocolo de pesquisa (Passos 3–4):**
   > - **Mínimo de 6 a 8 referências por passo**, cada uma citada como **URL + o que foi extraído dela** (não só o nome).
   > - **Mistura obrigatória:** referência histórica/clássica (repertório dos livros e `06-casos.md`) **+** contemporânea de até ~3 anos (fontes em `07-contemporaneidade.md` §4: Fonts In Use, It's Nice That, Are.na, Mindsparkle, Behance, The Type).
   > - **Salvar as imagens** usadas no moodboard em `projetos/<nome>/moodboard-refs/` (como no exercício torra-da-vila), com o link de origem anotado no `processo.md`.
   > - Referências contemporâneas aprovadas `[D]` migram para `07-contemporaneidade.md` no Passo 9.

### Fase 2 — Contração & Rascunho
5. **Moodboard Conceitual:** organizar as referências dos passos 2–4 em um **moodboard visual** (HTML + imagem renderizada) que capture **vibes, sensações, sentimentos, texturas, atmosfera, tipografia, paleta e links das referências** — nunca apenas texto ou só referências de logotipo.
   > **Regra `[D]` (2026-11-15):** o moodboard visual é etapa essencial antes dos rascunhos; precisa vir de **pesquisa a partir do briefing** e conter **imagens, grafismos e fotografias reais** (com links das fontes), não apenas anotações ou esquemas internos — é desse repertório visual que nascem os rascunhos.
6. **Concatenação + Filtro na Base:** juntar as ideias em partidos conceituais e testar cada um contra `conhecimento/` (técnica de reprodução, clareza vs. quebra, rejeição de clichê/minimalismo de status).
   > **Regra dos 3 partidos `[D]` (2026-11-17):** levar ao Passo 7 exatamente três direções — **1 segura/ancorada** (categoria legível de imediato), **1 tensionada** (desloca uma convenção mantendo a estrutura firme) e **1 provocativa** (quebra deliberada, justificada na lente §4 e em fichas `F-*`/`T-*`; calibração de ousadia: caso C-1 "O Vazio" em `06-casos.md`). Toda quebra nasce do texto/briefing, nunca de virtuosismo.
   > **Teste de categoria (3 segundos):** cada partido responde — "em 3s, dá para saber do que se trata?" Equilibrar ancoragem de repertório (`F-97`) com anti-clichê (`F-101`); falha nos dois extremos volta à longlist (lição `[D]` do exercício torra-da-vila).
7. **Rascunhos Exploratórios:** gerar **várias opções cruas** (partidos, formas, tipografias, paletas em texto/vetor simples), sem acabamento final nem gerador de imagem.
   > **Tipografia `[D]`:** proibido fonte genérica de sistema (Georgia, Arial, Times, Helvetica default) mesmo em testes de wordmark. Usar famílias com personalidade autoral e licença web/OFL — lista curada inicial no Passo 7 de `conhecimento/01-lente.md` §8 (Fraunces, Instrument Serif, Bodoni Moda, Space Grotesk, Archivo, Anton, Syne, Space Mono, IBM Plex Mono, Newsreader, Libre Caslon…).
   > **Parada obrigatória `[D]`:** pare aqui (no modo Padrão/Supervisionado). O designer escolhe, corta, mistura ou corrige antes de avançar. No modo Autônomo, seguir registrando as decisões no `processo.md`.

### Fase 3 — Execução & Aprendizado
8. **Execução e Desdobramentos:** só após a validação do passo 7, produzir desenho final, desdobramentos e (quando fizer sentido) protótipos/mockups — passando pelo gate de `conhecimento/09-checklist-entrega.md` (logo/wordmark sempre vetorial; gerador de imagem só para clima/mockup; formatos conforme `projetos/README.md`).
9. **Retroalimentação da Base:** registrar o que o designer aprovou, cortou ou corrigiu como regra **`[D]`** em `conhecimento/` (`01-lente.md`, `02-principios.md`, `06-casos.md` e `08-lacunas.md`), migrar referências contemporâneas aprovadas para `07-contemporaneidade.md` e promover/derrubar posições `[IA provisório]` das tensões (`05-tensoes.md`), para que o próximo projeto já nasça mais calibrado.

## Organização da pasta
- `INSTRUCOES.md` — este protocolo de trabalho.
- `conhecimento/` — lente operacional, princípios (`F-*`), autores, glossário, tensões (`T-*`), casos, contemporaneidade (`07`), lacunas e checklist de entrega (`09`).
- `projetos/` — uma subpasta por projeto real (ex.: `projetos/nome-do-projeto/`), guardando briefing (a partir de `TEMPLATE-briefing.md`), processo, rascunhos, moodboard e entregas de cada projeto; specs de saída em `projetos/README.md`.
- `exercicios/` — exercícios de calibração e testes para melhoria da documentação, separados dos projetos reais.
