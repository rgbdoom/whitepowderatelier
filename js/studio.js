/**
 * RGBDOOM Studio — Motores
 * Módulo 1: ResolverEngine  (briefing → tensões → fichas → decisões)
 * Módulo 2: StepPipeline    (orquestra os 9 passos obrigatórios)
 * Módulo 3: MoodboardEngine (renderização p5.js)
 *
 * Depende de KNOWLEDGE (js/knowledge-db.js) no escopo global.
 * p5.js e Fuse.js são opcionais via CDN (com fallback interno).
 */

// ── utilidades compartilhadas ──────────────────────────────────────────────

const StudioUtil = {
  norm(texto) {
    return String(texto || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  },
  hexToRgb(hex) {
    const h = String(hex).replace("#", "");
    const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    const n = parseInt(full, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  },
  contem(normText, lista) {
    return lista.reduce((acc, kw) => acc + (normText.includes(this.norm(kw)) ? 1 : 0), 0);
  },
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// MÓDULO 1: RESOLVER ENGINE
// ═══════════════════════════════════════════════════════════════════════════

class ResolverEngine {
  constructor(knowledge) {
    this.K = knowledge;
  }

  // BRIEFING → TENSÕES
  // Varre o briefing contra as keywords (e polos) de cada tensão.
  // Retorna lista ordenada por relevância: [{ id, score, ...tensao }].
  resolverTensoes(briefing) {
    const texto = this._texto(briefing);
    const norm = StudioUtil.norm(texto);
    const out = [];
    for (const id of Object.keys(this.K.tensoes)) {
      const t = this.K.tensoes[id];
      let score = StudioUtil.contem(norm, t.keywords || []);
      score += StudioUtil.contem(norm, [t.titulo]) * 2;
      for (const polo of t.polos || []) {
        score += StudioUtil.contem(norm, [polo]) ? 1 : 0;
      }
      if (score > 0) {
        out.push(Object.assign({ id, score }, t));
      }
    }
    out.sort((a, b) => b.score - a.score);
    return out;
  }

  // TENSÕES → FICHAS
  // Cada tensão aponta fichas relacionadas; remove duplicadas,
  // mantém a ordem de relevância e devolve com metadados da base.
  resolverFichas(tensoes) {
    const ordenadas = (tensoes || []).slice().sort((a, b) => b.score - a.score);
    const ids = [];
    const vistos = {};
    for (const t of ordenadas) {
      for (const fid of t.fichas || []) {
        if (!vistos[fid]) { vistos[fid] = true; ids.push(fid); }
      }
    }
    // Reforça fichas citadas pelos casos mais ousados quando há tensão de quebra.
    const quebraAtiva = ordenadas.some((t) => ["T-9", "T-18", "T-19", "T-4"].includes(t.id));
    if (quebraAtiva) {
      for (const fid of ["F-22", "F-42", "F-114"]) {
        if (!vistos[fid]) { vistos[fid] = true; ids.push(fid); }
      }
    }
    return ids
      .map((id) => Object.assign({ id }, this.K.fichas[id]))
      .filter((f) => f.titulo);
  }

  // BRIEFING + FICHAS + TENSÕES → DECISÕES DE DESIGN
  resolverDecisoes(briefing, fichas, tensoes) {
    return {
      paleta: this.resolverPaleta(briefing),
      tipografia: this.resolverTipografia(briefing),
      composicao: this.resolverComposicao(fichas, tensoes),
      textura: this.resolverTextura(briefing),
      mood: this.resolverMood(briefing, tensoes)
    };
  }

  // PALETA: palavras-chave do briefing → paleta base
  resolverPaleta(briefing) {
    const norm = StudioUtil.norm(this._texto(briefing));
    const mapas = {
      terra: ["terra", "café", "cafe", "artesanal", "natural", "orgânico", "organico", "madeira", "torra", "grão", "grao", "rústico", "rustico", "campo"],
      editorial: ["editorial", "livro", "revista", "imprensa", "publica", "cultural", "jornal", "ensaio", "leitura"],
      brutalista: ["brutal", "experimental", "provocativo", "underground", "rua", "urbano", "punk", "digital", "radical"],
      caloroso: ["calor", "afeto", "acolhedor", "humano", "quente", "familiar", "afetivo", "acolhimento"],
      institucional: ["institucional", "corporativo", "governo", "empresa", "financeiro", "serviço", "servico", "tecnologia", "consultoria", "saúde", "saude"]
    };
    let melhor = "terra";
    let melhorScore = 0;
    for (const chave of Object.keys(mapas)) {
      const s = StudioUtil.contem(norm, mapas[chave]);
      if (s > melhorScore) { melhorScore = s; melhor = chave; }
    }
    return {
      nome: melhor,
      cores: this.K.paletas[melhor].slice()
    };
  }

  // TIPOGRAFIA: par display + corpo a partir do tom do briefing
  resolverTipografia(briefing) {
    const norm = StudioUtil.norm(this._texto(briefing));
    const pick = (lista) => lista[0];

    const editorial = ["editorial", "livro", "revista", "cultural", "jornal", "imprensa", "erudito", "ensaio"];
    const artesanal = ["artesanal", "afeto", "café", "cafe", "natural", "calor", "feito à mão", "torra", "acolhedor", "humano"];
    const rigor = ["industrial", "rigor", "técnico", "tecnologia", "preciso", "engenharia", "sistema", "dados", "institucional", "corporativo"];
    const expressivo = ["experimental", "provocativo", "expressivo", "ousado", "vanguarda", "artístico", "artistico", "brutal", "underground"];

    const sEd = StudioUtil.contem(norm, editorial);
    const sAr = StudioUtil.contem(norm, artesanal);
    const sRg = StudioUtil.contem(norm, rigor);
    const sEx = StudioUtil.contem(norm, expressivo);

    const T = this.K.tipografia;
    let duo = "Display humanista + corpo grotesca";
    let display = pick(T.displaySerifadas);
    let corpo = pick(T.grotescas);

    // prioridade: expressivo > editorial > rigor > artesanal (default)
    if (sEx > 0 && sEx >= Math.max(sEd, sRg, sAr)) {
      display = pick(T.expressivas);
      corpo = T.grotescas[0];
      duo = "Display expressiva + corpo grotesca (quebra controlada)";
    } else if (sEd > 0 && sEd >= sRg && sEd >= sAr) {
      display = pick(T.editoriais);
      corpo = pick(T.editoriais);
      duo = "Editorial: serifa display + serifa de texto";
    } else if (sRg > 0 && sRg >= sAr) {
      display = T.grotescas[0];
      corpo = T.mono[0];
      duo = "Rigor: grotesca display + corpo mono";
    } else {
      display = pick(T.displaySerifadas);
      corpo = pick(T.grotescas);
      duo = "Aconchego: serifa display + corpo grotesca";
    }

    return { display, corpo, duo };
  }

  // COMPOSIÇÃO: grid / hierarquia / densidade / vazio, lidos das fichas
  resolverComposicao(fichas, tensoes) {
    const ids = (fichas || []).map((f) => f.id);
    const tem = (f) => ids.includes(f);

    let comp = {
      grid: "escala modular (Bringhurst)",
      hierarquia: "mínima → em camadas (espaço, peso, escala)",
      densidade: "respirado",
      vazioIdeal: 34,
      quebra: "nenhuma"
    };

    if (tem("F-13") || tem("F-28") || tem("F-29")) comp.grid = "grid modular estável";
    if (tem("F-32") || tem("F-34")) comp.grid = "quebra sobre base firme (assimétrico)";
    if (tem("F-22")) comp.vazioIdeal = 45;
    if (tem("F-42")) comp.vazioIdeal += 10;
    if (tem("F-114")) comp.vazioIdeal = Math.max(comp.vazioIdeal, 55);
    if (tem("F-31")) comp.densidade = "denso, com módulos vazios de respiro";
    if (tem("F-33")) comp.hierarquia = "diferenciação óptica exagerada (percurso garantido)";

    const quebra = (tensoes || []).some((t) => ["T-9", "T-19", "T-18"].includes(t.id));
    if (quebra && tem("F-10")) comp.quebra = "um desvio lido contra o padrão (F-10)";

    return comp;
  }

  // TEXTURA: acabamento visual a partir das correntes contemporâneas
  resolverTextura(briefing) {
    const norm = StudioUtil.norm(this._texto(briefing));
    const mapas = {
      grain: ["grain", "grão", "grao", "risografia", "impresso", "papel", "artesanal", "textura", "tátil", "tactil", "manual", "torra", "café", "cafe"],
      limpo: ["limpo", "clean", "minimal", "suíço", "suico", "institucional", "tecnologia", "corporativo", "preciso"],
      brutalista: ["brutal", "experimental", "underground", "rua", "punk", "radical", "cru"],
      risografia: ["risografia", "spot", "serigrafia", "zine", "carimbo", "ficha"]
    };
    let melhor = "grain";
    let melhorScore = 0;
    for (const chave of Object.keys(mapas)) {
      const s = StudioUtil.contem(norm, mapas[chave]);
      if (s > melhorScore) { melhorScore = s; melhor = chave; }
    }
    return melhor;
  }

  // MOOD: 3-5 adjetivos que guiam o tom visual
  resolverMood(briefing, tensoes) {
    const norm = StudioUtil.norm(this._texto(briefing));
    const grupos = [
      { adj: ["quente", "tátil", "acolhedor", "afetuoso"], kw: ["calor", "afeto", "quente", "acolhedor", "café", "cafe", "artesanal", "humano", "familiar"] },
      { adj: ["preciso", "rigoroso", "técnico", "controlado"], kw: ["rigor", "técnico", "tecnologia", "preciso", "industrial", "engenharia", "sistema", "institucional"] },
      { adj: ["bruto", "direto", "cru", "visceral"], kw: ["brutal", "experimental", "underground", "rua", "cru", "provocativo", "punk", "radical"] },
      { adj: ["cultural", "editorial", "sofisticado", "erudito"], kw: ["editorial", "livro", "revista", "cultural", "jornal", "imprensa", "ensaio"] },
      { adj: ["natural", "terroso", "orgânico", "manual"], kw: ["natural", "orgânico", "organico", "terra", "grão", "grao", "madeira", "artesanal"] },
      { adj: ["urbano", "contemporâneo", "vivo", "direto"], kw: ["urbano", "cidade", "são paulo", "contemporâneo", "periferia", "bairro"] }
    ];

    const mood = [];
    for (const g of grupos) {
      const s = StudioUtil.contem(norm, g.kw);
      if (s > 0) mood.push(g.adj[0]);
    }
    // garante um traço a partir da tensão central
    const principal = (tensoes || [])[0];
    if (mood.length === 0 && principal) {
      if (principal.id === "T-16" || principal.id === "T-5") mood.push("consciente");
      else if (principal.id === "T-18") mood.push("tenso");
      else mood.push("intencional");
    }
    return mood.slice(0, 5);
  }

  // RESOLVE OS 3 PARTIDOS a partir das decisões (regra [D] 2026-11-17)
  gerarTresPartidos(decisoes, briefing) {
    const base = decisoes.paleta.cores;
    const nome = this._titulo(briefing) || "Projeto";

    const seguro = {
      nome: "Seguro",
      descricao: "Ancorado no repertório da categoria (F-97): categoria legível de imediato.",
      paleta: base,
      tipografia: decisoes.tipografia,
      composicao: {
        grid: "grid modular estável",
        hierarquia: "em camadas (espaço → peso → escala)",
        densidade: "respirado",
        vazioIdeal: 32,
        quebra: "nenhuma"
      },
      textura: "limpo",
      mood: decisoes.mood,
      ousadia: "minima",
      justificativa: ["F-97", "F-9", "T-18 (clareza imediata)"]
    };

    const tensionado = {
      nome: "Tensionado",
      descricao: "Desloca UMA convenção mantendo a estrutura firme (ex.: paleta inesperada, grid assimétrico leve).",
      paleta: StudioUtil.shuffle(base),
      tipografia: decisoes.tipografia,
      composicao: {
        grid: "assimétrico leve",
        hierarquia: "expressiva (um desvio contra o padrão, F-10)",
        densidade: "respirado com um elemento rompendo a margem",
        vazioIdeal: 42,
        quebra: "desloca a cor ou a margem; wordmark ainda legível"
      },
      textura: decisoes.textura,
      mood: decisoes.mood,
      ousadia: "media",
      justificativa: ["F-10", "F-31", "F-33 (percurso do olho)", "T-4 (tipografia fala)"]
    };

    const provocativo = {
      nome: "Provocativo",
      descricao: "Quebra deliberada justificada na lente §4 e calibrada pelo caso C-1 (O Vazio).",
      paleta: [base[base.length - 1], "#FFFFFF", base[0], base[2]].filter(Boolean),
      tipografia: {
        display: decisoes.tipografia.display,
        corpo: decisoes.tipografia.corpo,
        duo: decisoes.tipografia.duo + " (ampliado ao monumental)"
      },
      composicao: {
        grid: "quebrado (sangria e corte)",
        hierarquia: "monumental: tipo empurrado para o corte",
        densidade: "~70% de branco ativo",
        vazioIdeal: 70,
        quebra: "nasce do texto, nunca de virtuosismo (lente §4)"
      },
      textura: decisoes.textura,
      mood: decisoes.mood.concat(["radical"]),
      ousadia: "maxima",
      justificativa: ["C-1 (calibração de ousadia)", "F-22", "F-42", "F-114", "F-111", "T-18 (closure)"]
    };

    return { seguro, tensionado, provocativo, projeto: nome };
  }

  _texto(briefing) {
    return (typeof briefing === "string") ? briefing : (briefing && briefing.texto) || "";
  }

  _titulo(briefing) {
    if (typeof briefing === "string") {
      const linha = briefing.trim().split("\n")[0];
      return linha.split(/[:—–-]/)[0].trim();
    }
    return briefing && briefing.titulo;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// MÓDULO 2: STEP PIPELINE
// ═══════════════════════════════════════════════════════════════════════════

class StepPipeline {
  constructor(resolver, uiCallbacks) {
    this.resolver = resolver;
    this.ui = uiCallbacks || {};
    this.currentStep = 1;
    this.modo = "padrao";
    this.state = {};
    this.gates = {
      supervisionado: [5, 7, 8],
      padrao: [7],
      autonomo: []
    };
  }

  setModo(m) {
    if (this.gates[m]) this.modo = m;
  }

  async executar(briefingTexto) {
    this.state = {};
    const briefing = this.parseBriefing(briefingTexto);
    this.state.briefing = briefing;
    this.log(1, "Briefing extraído: " + (briefing.titulo || "(sem título)"));

    for (let step = 1; step <= 9; step++) {
      this.currentStep = step;
      const resultado = this.executarStep(step);
      this.state["step" + step] = resultado;
      if (this.deveParar(step)) {
        this.ui.mostrarGate && this.ui.mostrarGate(step, resultado);
        return this.state;
      }
    }
    this.ui.finalizar && this.ui.finalizar(this.state);
    return this.state;
  }

  log(step, msg) {
    this.ui.atualizarLog && this.ui.atualizarLog(step, msg);
  }

  deveParar(step) {
    return this.gates[this.modo].includes(step);
  }

  parseBriefing(texto) {
    const t = String(texto || "");
    const norm = StudioUtil.norm(t);
    const titulo = this.resolver._titulo(t);
    const publicoMatch = /(público|publico|público-alvo)[^\n]*/i.exec(t);
    const tensaoMatch = /(tensão|tensao|conflito)[^\n]*/i.exec(t);
    return {
      titulo,
      texto: t,
      publico: publicoMatch ? publicoMatch[0].trim() : "N/I",
      tensaoCentral: tensaoMatch ? tensaoMatch[0].trim() : "N/I",
      keywords: StudioUtil.norm(t)
    };
  }

  executarStep(step) {
    switch (step) {
      case 1: {
        // Briefing & tensão central
        const tensoesRasas = this.resolver.resolverTensoes(this.state.briefing.texto);
        this.log(1, "Tensão central definida: " + (tensoesRasas[0] ? tensoesRasas[0].id + " — " + tensoesRasas[0].titulo : "indefinida"));
        return { tensaoCentral: tensoesRasas[0] || null };
      }
      case 2: {
        // Background: tensões → fichas
        const tensoes = this.resolver.resolverTensoes(this.state.briefing.texto);
        const fichas = this.resolver.resolverFichas(tensoes);
        this.log(2, "Fichas ativadas: " + fichas.map((f) => f.id).join(", "));
        return { tensoes, fichas };
      }
      case 3: {
        this.log(3, "Referências (mesmo lado) — cole URLs no painel esquerdo");
        return { referencias: this._lerReferencias() };
      }
      case 4: {
        this.log(4, "Referências (lado oposto) — cole URLs no painel esquerdo");
        return { referencias: this._lerReferencias() };
      }
      case 5: {
        // Moodboard: decisões + render
        const { tensoes, fichas } = this.state.step2 || { tensoes: [], fichas: [] };
        const decisoes = this.resolver.resolverDecisoes(this.state.briefing.texto, fichas, tensoes);
        decisoes.projeto = this.state.briefing.titulo || "Projeto";
        const partidos = this.resolver.gerarTresPartidos(decisoes, this.state.briefing.texto);
        this.log(5, "Moodboard conceitual resolvido (paleta " + decisoes.paleta.nome + ")");
        this.ui.renderMoodboard && this.ui.renderMoodboard(decisoes, partidos.tensionado, partidos);
        return { decisoes, partidos };
      }
      case 6: {
        this.log(6, "3 partidos gerados: seguro / tensionado / provocativo");
        return this.state.step5.partidos;
      }
      case 7: {
        // Rascunhos: variações cruas a partir das decisões
        const decisoes = this.state.step5.decisoes;
        const variacoes = this.gerarRascunhos(decisoes);
        this.log(7, "Rascunhos: " + variacoes.length + " variações cruas");
        this.ui.renderRascunhos && this.ui.renderRascunhos(variacoes);
        return { variacoes };
      }
      case 8: {
        // Execução: desdobramentos finais (após válidar passo 7)
        this.log(8, "Execução: desdobramentos finais (wordmark vetorial via SVG)");
        return { desdobramentos: ["wordmark.svg", "aplicação-16px", "aplicação-1080x1080"] };
      }
      case 9: {
        // Retroalimentação: log de decisões para o processo.md
        const resumo = {
          projeto: this.state.briefing.titulo,
          tensoes: (this.state.step2.tensoes || []).map((x) => x.id),
          fichas: (this.state.step2.fichas || []).map((x) => x.id),
          decisoes: this.state.step5.decisoes,
          partidos: Object.keys(this.state.step5.partidos).filter((k) => k !== "projeto")
        };
        this.log(9, "Retroalimentação pronta — copie o estado JSON para o processo.md");
        return { resumo };
      }
      default:
        return null;
    }
  }

  _lerReferencias() {
    const el = document.getElementById("refs-input");
    const raw = el ? el.value : "";
    return raw.split(/\n+/).map((l) => l.trim()).filter(Boolean);
  }

  // Gera variações cruas (Passo 7) — pequenas permutações de paleta/tipografia
  gerarRascunhos(decisoes) {
    const base = decisoes.paleta.cores;
    const out = [];
    for (let i = 0; i < 3; i++) {
      out.push({
        id: "rasc" + (i + 1),
        paleta: StudioUtil.shuffle(base),
        tipografia: decisoes.tipografia,
        textura: decisoes.textura,
        nota: "variação crua " + (i + 1)
      });
    }
    return out;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// MÓDULO 3: MOODBOARD ENGINE (p5.js, instance mode)
// ═══════════════════════════════════════════════════════════════════════════

class MoodboardEngine {
  constructor(containerEl) {
    this.container = containerEl;
    this.p5 = null;
    this.decisoes = null;
    this.partido = null;
    this.referencias = [];
    this._init();
  }

  _init() {
    if (typeof p5 === "undefined") {
      this.container.innerHTML =
        '<p style="color:#fff;padding:24px;font-family:monospace">p5.js não carregou — verifique a conexão (CDN).</p>';
      return;
    }
    const self = this;
    this.p5 = new p5((p) => {
      p.setup = () => {
        p.createCanvas(1200, 800);
        p.noLoop();
      };
      p.draw = () => self._draw(p);
    }, this.container);
  }

  render(decisoes, partido, referencias) {
    this.decisoes = decisoes;
    this.partido = partido || (decisoes && decisoes.tensionado);
    if (referencias) this.referencias = referencias;
    if (this.p5 && this.decisoes) this.p5.redraw();
  }

  _draw(p) {
    if (!this.decisoes) return;
    const d = this.decisoes;
    const pto = this.partido || { paleta: d.paleta.cores, ousadia: "media", textura: d.textura };
    const cores = (pto.paleta || d.paleta.cores).map((c) => StudioUtil.hexToRgb(c));

    p.clear();
    p.background(248, 245, 240);

    this._atmosfera(p, d, cores);
    this._paleta(p, pto, cores);
    this._tipografia(p, d, pto);
    this._referencias(p, pto);
    this._molduras(p);
    this._meta(p, d, pto);
  }

  _atmosfera(p, d, cores) {
    // tom do fundo a partir da cor dominante da paleta
    const dom = cores[0] || { r: 26, g: 26, b: 26 };
    p.noStroke();
    p.fill(dom.r, dom.g, dom.b, 12);
    p.noiseDetail(3, 0.55);
    for (let i = 0; i < 5; i++) {
      const x = p.width * p.noise(i * 17.3 + 10);
      const y = p.height * p.noise(i * 31.7 + 50);
      const r = p.random(120, 320);
      p.ellipse(x, y, r, r);
    }

    // grain generativo sutil
    for (let i = 0; i < 900; i++) {
      p.fill(0, 0, 0, p.random(3, 20));
      p.rect(p.random(p.width), p.random(p.height), 2, 2);
    }
  }

  _paleta(p, pto, cores) {
    const y = p.height - 96;
    const n = cores.length;
    const total = p.width - 160;
    const gap = 10;
    const w = (total - gap * (n - 1)) / n;
    const base = 120;

    for (let i = 0; i < n; i++) {
      const c = cores[i] || { r: 0, g: 0, b: 0 };
      const x = 80 + i * (w + gap);
      // proporção áurea: a primeira swatch domina
      const h = i === 0 ? w * 1.618 : w;
      p.fill(c.r, c.g, c.b);
      p.noStroke();
      p.rect(x, y - h, w, h);
      p.stroke(0, 0, 0, 30);
      p.noFill();
      p.rect(x, y - h, w, h);
      // hex code
      p.noStroke();
      p.fill(60);
      p.textFont("Space Mono", 10);
      const hex = "#" + [c.r, c.g, c.b].map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase();
      p.text(hex, x, y + 16);
    }
  }

  _tipografia(p, d, pto) {
    const nome = d.projeto || "";
    // Wordmark central em display, corpo monumental calibrado pelo partido
    const tamanho = pto.ousadia === "maxima" ? 230 : (pto.ousadia === "media" ? 150 : 120);
    const displayFont = (d.tipografia && d.tipografia.display && d.tipografia.display.css) || "Fraunces";
    const corpoFont = (d.tipografia && d.tipografia.corpo && d.tipografia.corpo.css) || "Space Grotesk";

    p.textAlign(p.LEFT, p.TOP);
    p.fill(20);
    p.textFont(corpoFont, 13);
    const upper = nome.toUpperCase();
    p.text(upper, 80, 64);

    p.textAlign(p.LEFT, p.BASELINE);
    p.fill(16);
    p.textFont(displayFont, tamanho);
    const word = upper.split(/[—–:]/)[0].slice(0, 14);
    const ty = pto.ousadia === "maxima" ? p.height * 0.78 : p.height * 0.52;
    // para o partido provocativo, empurra o wordmark para fora do corte
    const tx = pto.ousadia === "maxima" ? p.width - p.textWidth(word) * 0.4 : 80;
    p.text(word, tx, ty);

    // bloco de texto simulado (corpo)
    p.textAlign(p.LEFT, p.TOP);
    p.fill(40);
    p.textFont(corpoFont, 15);
    const linha = "Texto corrido simulado com medida confortável, entrelinha generosa e quebra de linha controlada.";
    p.text(linha, 80, 210, 340, 120);
  }

  _referencias(p, pto) {
    const refs = this.referencias && this.referencias.length ? this.referencias : ["ref-1", "ref-2", "ref-3", "ref-4", "ref-5", "ref-6"];
    const cols = 3;
    const startX = p.width - 420;
    const startY = 180;
    const cw = 120;
    const ch = 96;
    const gap = 16;
    p.textFont("Space Mono", 10);
    refs.slice(0, 6).forEach((r, i) => {
      const cx = startX + (i % cols) * (cw + gap);
      const cy = startY + Math.floor(i / cols) * (ch + 34);
      // placeholder colorido
      p.fill(220, 214, 202);
      p.noStroke();
      p.rect(cx, cy, cw, ch);
      p.stroke(60, 60, 60, 60);
      p.noFill();
      p.rect(cx, cy, cw, ch);
      p.noStroke();
      p.fill(80);
      const label = typeof r === "string" ? r.replace(/^https?:\/\//, "").slice(0, 22) : r.nome;
      p.text(label, cx, cy + ch + 8, cw);
    });
  }

  _molduras(p) {
    p.noFill();
    p.stroke(20, 20, 20, 90);
    p.strokeWeight(1);
    // margem respirada (F-22)
    p.rect(40, 40, p.width - 80, p.height - 80);
    p.line(40, 136, p.width - 40, 136);
  }

  _meta(p, d, pto) {
    const projeto = d.projeto || "Projeto";
    const selo = pto.nome || pto.ousadia || "—";
    p.textAlign(p.LEFT, p.BOTTOM);
    p.fill(90);
    p.textFont("Space Mono", 11);
    p.text(projeto + " — RGBDOOM Studio — " + new Date().toLocaleDateString("pt-BR"), 80, p.height - 52);
    // selo do partido
    const bw = p.textWidth(selo.toUpperCase()) + 40;
    p.fill(255, 107, 53);
    p.noStroke();
    p.rect(p.width - 80 - bw, p.height - 124, bw, 30);
    p.fill(255);
    p.textAlign(p.LEFT, p.CENTER);
    p.text(selo.toUpperCase(), p.width - 60 - bw + 20, p.height - 109);
  }

  exportarPNG() {
    return this.p5 ? this.p5.canvas.toDataURL("image/png") : null;
  }
}

// expõe no escopo global (sem módulos ES, para <script src> direto)
window.ResolverEngine = ResolverEngine;
window.StepPipeline = StepPipeline;
window.MoodboardEngine = MoodboardEngine;
window.StudioUtil = StudioUtil;