/**
 * RGBDOOM Studio — Base de Conhecimento
 * Tradução operacional de `conhecimento/` para um objeto que vive no browser.
 * Sem backend, sem fetch: importe via <script src="js/knowledge-db.js"></script>.
 *
 * Origem das entradas (INSTRUCOES.md §Hierarquia das fontes):
 *   [D] designer · [L] livro (conhecimento/) · [IA] interpretação externa.
 * Posições [IA provisório] são substituíveis por qualquer [D] posterior (Passo 9).
 */

const KNOWLEDGE = {

  // ── FICHAS ────────────────────────────────────────────────────────────────
  // Extraídas de conhecimento/02-principios.md (F-1..F-118).
  // Seleção das ~85 operacionalmente úteis para decisões visuais automatizáveis:
  // tipografia, cor, composição, grid, textura, ética visual.
  fichas: {
    "F-1":  { titulo: "Regras tipográficas são tradições vivas, não leis", fonte: "Lupton, Pensar con tipos", tipo: "convenção", frase: "Convenções tipográficas são históricas e mutáveis; erros devem ser explicados sem juízo moral.", tags: ["tipografia", "convenção", "metodologia"], quandoVale: "Ensino, escolha de fonte, convenções de uso" },
    "F-2":  { titulo: "A forma da letra carrega a marca da tecnologia", fonte: "Lupton", tipo: "fundamento", frase: "Cada técnica (pena, gravura, pantógrafo, CRT, variável) imprime traços próprios na letra.", tags: ["tipografia", "técnica", "revival"], quandoVale: "Escolha de fonte, revivals, tamanhos ópticos" },
    "F-3":  { titulo: "Neutralidade tipográfica é construção histórica", fonte: "Lupton", tipo: "convenção", frase: "O grotesco nasceu para chamar atenção e só depois foi lido como neutro.", tags: ["tipografia", "conotação"], quandoVale: "Identidade, editorial, sinalização" },
    "F-4":  { titulo: "Tamanho muda a forma necessária (tamanhos ópticos)", fonte: "Lupton", tipo: "fundamento", frase: "Display ampliado fica frágil; texto ampliado fica tosco. Cada escala pede seu desenho.", tags: ["tipografia", "escala", "legibilidade"], quandoVale: "Sempre que o tipo vai da nota ao título" },
    "F-5":  { titulo: "Alinhamento óptico prevalece sobre o matemático", fonte: "Lupton", tipo: "fundamento", frase: "Pontuação pendurada e ajustes de linha de base produzem bordas que o olho lê como iguais.", tags: ["microtipografia", "percepção"], quandoVale: "Margens, títulos, combinação de corpos" },
    "F-6":  { titulo: "Medida de linha dentro de uma faixa (35–75 caracteres)", fonte: "Lupton", tipo: "fundamento", frase: "Linhas longas fazem perder a linha; curtas cansam pelo salto; ideal ~66 (48 em pt).", tags: ["medida", "leitura", "conforto"], quandoVale: "Texto de leitura, impresso ou tela" },
    "F-7":  { titulo: "Legibilidade ≠ inteligibilidade; serifa não garante leitura", fonte: "Lupton", tipo: "fundamento", frase: "Reconhecer glifos e compreender o texto são coisas diferentes.", tags: ["legibilidade", "mito"], quandoVale: "Livros, sinalização, acessibilidade" },
    "F-8":  { titulo: "Combinar fontes por diferença com semelhança", fonte: "Lupton", tipo: "convenção", frase: "Pares funcionam quando contrastam em algo e compartilham algo; a subjetividade é legítima.", tags: ["par tipográfico", "combinação"], quandoVale: "Identidade, editorial, sistemas" },
    "F-9":  { titulo: "Hierarquia: coerência estrutural acima de estilo", fonte: "Lupton", tipo: "fundamento", frase: "A hierarquia pode ser mínima (espaço → peso → escala) ou em camadas, mas deve marcar a estrutura.", tags: ["hierarquia", "estrutura"], quandoVale: "Qualquer documento com partes" },
    "F-10": { titulo: "A quebra só se lê contra um padrão", fonte: "Lupton (Gestalt)", tipo: "fundamento", frase: "Romper o padrão dominante de um grupo atrai o olhar e cria ênfase.", tags: ["quebra", "ênfase", "contraste"], quandoVale: "Layout, hierarquia, identidade" },
    "F-11": { titulo: "Tipografia como discurso × taça de cristal", fonte: "Lupton (Warde/McCoy)", tipo: "convenção", frase: "A tipografia pode recuar para servir o texto ou interpretar ativamente; às vezes convém deixar a interface falhar.", tags: ["papel", "discurso", "escola"], quandoVale: "Editorial, cartaz, livro de artista" },
    "F-12": { titulo: "Escalas tipográficas são escolha, não lei", fonte: "Lupton", tipo: "convenção", frase: "Escalas organizam corpos, mas usá-las é gosto pessoal e elas limitam ao combinar fontes.", tags: ["escala", "sistema"], quandoVale: "Sistemas tipográficos" },
    "F-13": { titulo: "O grid define o campo, não o preenche", fonte: "Lupton (Gerstner/Bill)", tipo: "convenção", frase: "O grid é esqueleto ligado ao conteúdo; a tradição suíça o tornou método.", tags: ["grid", "método"], quandoVale: "Publicações, sistemas, identidades" },
    "F-14": { titulo: "O ornamento pode ser estrutura", fonte: "Lupton (Derrida, parergon)", tipo: "convenção", frase: "Margens, molduras e ornamentos elevam o conteúdo e podem ser sistema cultural.", tags: ["ornamento", "moldura"], quandoVale: "Livro, identidade, tradição ornamental" },
    "F-15": { titulo: "As normas latinas não são universais", fonte: "Lupton", tipo: "fundamento", frase: "Itálico como ênfase, caixa-alta/baixa e espaço entre palavras são próprios do latino.", tags: ["multilíngue", "cânone"], quandoVale: "Projetos multilíngues; crítica do cânone" },
    "F-16": { titulo: "A tipografia existe para honrar o conteúdo", fonte: "Bringhurst", tipo: "convenção", frase: "A tipografia interpreta o texto como o músico interpreta a partitura, sem substituí-lo.", tags: ["conteúdo", "interpretação"], quandoVale: "Livro, editorial, peça com texto que importa" },
    "F-17": { titulo: "Quebre as regras com beleza, deliberadamente, bem", fonte: "Bringhurst", tipo: "posição", frase: "Regras são costumes vivos que se abandonam quando não servem ao texto, desde que se quebre de propósito.", tags: ["quebra", "ofício"], quandoVale: "Todo o ofício" },
    "F-18": { titulo: "A síncope precisa de batida", fonte: "Bringhurst", tipo: "fundamento", frase: "Desvios dão vida, mas o texto deve voltar à mesma batida; espaço vertical se soma em múltiplos da entrelinha.", tags: ["ritmo", "espaço vertical"], quandoVale: "Páginas de texto contínuo" },
    "F-19": { titulo: "Homogeneidade da cor tipográfica", fonte: "Bringhurst", tipo: "fundamento", frase: "A meta é a cor homogênea, que depende de desenho, entreletra, entrepalavra e entrelinha juntos.", tags: ["cor do texto", "microtipografia"], quandoVale: "Texto contínuo" },
    "F-20": { titulo: "Não deformar as letras", fonte: "Bringhurst", tipo: "fundamento", frase: "Condensar, expandir ou inclinar eletronicamente destrói o desenho; itálico não é romano inclinado.", tags: ["distorção", "proibição"], quandoVale: "Sempre que existir versão desenhada" },
    "F-21": { titulo: "Mude um parâmetro de cada vez", fonte: "Bringhurst", tipo: "convenção", frase: "Para ênfase, mude só uma variável; o peso deve diminuir quando o tamanho aumenta.", tags: ["hierarquia", "economia"], quandoVale: "Hierarquia em geral" },
    "F-22": { titulo: "O vazio constitui o equilíbrio", fonte: "Bringhurst", tipo: "fundamento", frase: "A página em branco deve ser infringida mas nunca desaparecer; o equilíbrio nasce do espaço branco.", tags: ["vazio", "equilíbrio", "branco"], quandoVale: "Rostos, aberturas, cartazes, páginas" },
    "F-23": { titulo: "Fidelidade histórica e cultural do tipo", fonte: "Bringhurst", tipo: "convenção", frase: "O tipo traz época e credo; deve ter afinidade real com o texto e pedir a página do seu idioma.", tags: ["história", "anacronismo"], quandoVale: "Livros, textos históricos" },
    "F-24": { titulo: "Qualidade intrínseca > função > conotação", fonte: "Bringhurst", tipo: "convenção", frase: "Primeiro um tipo bom, depois bom para a leitura, só então simpático ao tema; evite o literalismo.", tags: ["escolha", "clichê"], quandoVale: "Escolha de fonte" },
    "F-25": { titulo: "Proporções musicais e naturais; escala modular", fonte: "Bringhurst", tipo: "fundamento", frase: "Proporções derivadas de intervalos musicais agradam além do gosto regional; escala modular prefere o grid uniforme.", tags: ["escala", "proporção", "modular"], quandoVale: "Livro, página, sistemas" },
    "F-26": { titulo: "O livro é objeto sensorial completo", fonte: "Bringhurst", tipo: "fundamento", frase: "Papel, impressão, cheiro e som fazem parte da tipografia; fonte e papel se escolhem juntos.", tags: ["material", "objeto"], quandoVale: "Impresso, editorial, objeto" },
    "F-27": { titulo: "Tipografia contra a propriedade e a manipulação", fonte: "Bringhurst", tipo: "convenção", frase: "Boa tipografia é pão, não doce; resiste a logotipos que pedem privilégio.", tags: ["ética", "marca"], quandoVale: "Posição ética geral" },
    "F-28": { titulo: "O grid é convenção, não lei", fonte: "Samara", tipo: "convenção", frase: "O grid é uma convenção eficiente com história ideológica; impô-lo por princípio pode comprometer a experiência.", tags: ["grid", "convenção"], quandoVale: "Decisão de estrutura" },
    "F-29": { titulo: "Construir o grid a partir do conteúdo", fonte: "Samara", tipo: "fundamento", frase: "Partir do texto corrido (medida, entrelinha, medianiz): margem ≈ 2× medianiz.", tags: ["grid", "conteúdo"], quandoVale: "Projetos com texto relevante" },
    "F-30": { titulo: "Espaço é significado: perto = relacionado", fonte: "Samara", tipo: "fundamento", frase: "Contíguo fica mais perto; não relacionado, mais longe, numa progressão do entreletra às margens.", tags: ["proximidade", "espaço"], quandoVale: "Toda composição" },
    "F-31": { titulo: "Grids não fazem layouts chatos — designers fazem", fonte: "Samara", tipo: "convenção", frase: "Deixar módulos vazios, variar ritmo e escala, desviar com boa razão.", tags: ["grid", "monotonia"], quandoVale: "Sistemas editoriais e de identidade" },
    "F-32": { titulo: "Quebrar a partir do grid (desconstrução)", fonte: "Samara", tipo: "método", frase: "Instalar um grid base e então cortar, deslizar, deformar observando novas conexões de sentido.", tags: ["desconstrução", "grid"], quandoVale: "Projetos expressivos, cartazes" },
    "F-33": { titulo: "Na quebra, mantenha hierarquia e percurso do olho", fonte: "Samara", tipo: "fundamento", frase: "Layouts incomuns precisam de diferenciação óptica exagerada e pontos de entrada; na dúvida, simplificar.", tags: ["quebra", "hierarquia"], quandoVale: "Quebras de grid" },
    "F-34": { titulo: "Toda estrutura conota", fonte: "Samara", tipo: "convenção", frase: "Simetria soa clássica/autoritária; modular, racionalista; escolher estrutura é escolher significado.", tags: ["estrutura", "conotação"], quandoVale: "Identidade, editorial, cartaz" },
    "F-35": { titulo: "O olho acima da régua (ajuste óptico)", fonte: "Flor", tipo: "fundamento", frase: "Igualdade óptica, não matemática: overshoot, curvas mais pesadas que hastes.", tags: ["letra", "óptico", "desenho"], quandoVale: "Lettering, logotipos, ajustes finos" },
    "F-36": { titulo: "Espaço dentro ≈ espaço entre", fonte: "Flor", tipo: "fundamento", frase: "O branco interno da letra deve equivaler ao branco entre as letras; projeta-se a letra e o espaço juntos.", tags: ["lettering", "espaçamento"], quandoVale: "Lettering, logotipos, títulos" },
    "F-37": { titulo: "Distorcer desenhando, não deformando", fonte: "Flor", tipo: "fundamento", frase: "O 'skew' do software deixa letras estranhas; distorção legítima é desenhada no formato.", tags: ["distorção", "desenho"], quandoVale: "Lettering, títulos expressivos, embalagem" },
    "F-38": { titulo: "Consistência: as letras falam a mesma língua", fonte: "Flor", tipo: "fundamento", frase: "Decidida uma forma, ela se adapta a cada letra; desenhar palavras, não letras isoladas.", tags: ["lettering", "unidade"], quandoVale: "Lettering, logotipos, famílias" },
    "F-39": { titulo: "A mensagem certa acima da beleza", fonte: "Flor", tipo: "convenção", frase: "Lettering que comunica a mensagem errada falha, por mais bonito; efeitos não salvam forma ruim.", tags: ["mensagem", "qualidade"], quandoVale: "Toda peça expressiva" },
    "F-40": { titulo: "Iterar e preferir mudanças radicais", fonte: "Flor", tipo: "convenção", frase: "Esboçar rápido, ser desrespeitoso com o primeiro desenho, preferir mudanças radicais.", tags: ["processo", "esboço"], quandoVale: "Processo criativo" },
    "F-41": { titulo: "Descrição universal, significado não universal", fonte: "Lupton & Phillips", tipo: "fundamento", frase: "Elementos formais podem ser descritos de modo universal; o significado depende da cultura.", tags: ["universal", "cultura"], quandoVale: "Ensino, crítica, análise" },
    "F-42": { titulo: "Figura e fundo: o vazio é ativo", fonte: "Lupton & Phillips", tipo: "fundamento", frase: "O espaço negativo é parte da composição e pode gerar ambiguidade e energia.", tags: ["figura-fundo", "negativo"], quandoVale: "Toda composição, logotipos" },
    "F-43": { titulo: "Complexidade a partir de regras simples", fonte: "Lupton & Phillips", tipo: "convenção", frase: "Poucas regras, módulos ou acaso controlado geram resultados ricos e imprevistos.", tags: ["generativo", "sistema"], quandoVale: "Identidades dinâmicas, padrões" },
    "F-44": { titulo: "As três funções do design gráfico", fonte: "Hollis", tipo: "convenção", frase: "Identificar, informar/instruir, apresentar/promover; qualquer peça pode servir às três.", tags: ["função", "briefing"], quandoVale: "Análise e briefing de qualquer peça" },
    "F-46": { titulo: "A ideia acima da forma", fonte: "Hollis (direção de arte)", tipo: "convenção", frase: "O conceito governa; fotografia, tipografia e ilustração estão a seu serviço.", tags: ["conceito", "direção de arte"], quandoVale: "Publicidade, campanhas, capas" },
    "F-47": { titulo: "Forma nasce da técnica de reprodução", fonte: "Hollis", tipo: "fundamento", frase: "Cada técnica gera linguagem própria e dá mais controle; a ousadia segue a inovação técnica.", tags: ["técnica", "reprodução"], quandoVale: "Toda produção gráfica" },
    "F-48": { titulo: "Modernismo como postura, não estilo", fonte: "Hollis", tipo: "convenção", frase: "A Nova Tipografia nasceu como método; virou estilo e cruzada.", tags: ["modernismo", "método"], quandoVale: "Leitura do modernismo" },
    "F-49": { titulo: "Graus de determinação: a liberdade depende da função", fonte: "Melo (Duarte)", tipo: "fundamento", frase: "Um rótulo de remédio é muito determinado pela legibilidade; um cartaz cultural tem muito mais liberdade.", tags: ["liberdade", "função", "critério"], quandoVale: "Decidir quanto romper numa peça" },
    "F-50": { titulo: "Marca × identidade; valor de uso no topo", fonte: "Melo (Ulm/Wollner)", tipo: "convenção", frase: "A marca é um signo; a identidade é um sistema; o valor de uso vale mais que as aplicações de visibilidade.", tags: ["identidade", "sistema"], quandoVale: "Identidade visual, sistemas" },
    "F-52": { titulo: "O vernacular de massa como face real da linguagem", fonte: "Melo", tipo: "convenção", frase: "Sinais comerciais populares e o imaginário da rua formam a linguagem efetivamente vivida.", tags: ["vernacular", "rua", "popular"], quandoVale: "Comunicação de massa, quebra de cânone" },
    "F-53": { titulo: "O livro é objeto total; a capa é seu ícone", fonte: "Melo", tipo: "fundamento", frase: "O livro deve ser projetado como objeto íntegro; a capa é sua síntese gráfica.", tags: ["editorial", "capa"], quandoVale: "Editorial" },
    "F-54": { titulo: "Quebrar exige conhecer a regra e o ofício", fonte: "Poynor/Heller", tipo: "convenção", frase: "A ruptura com sentido apoia-se no domínio profundo das convenções; a quebra ignorante gera ruído.", tags: ["quebra", "ofício"], quandoVale: "Tipografia, editorial, identidade" },
    "F-57": { titulo: "A forma gráfica nasce da função e da estrutura do texto", fonte: "Armstrong (Tschichold)", tipo: "fundamento", frase: "A forma nasce das funções internas e da hierarquia do texto, jamais de moldes impostos de fora.", tags: ["função", "texto"], quandoVale: "Editorial, informativo, tipografia complexa" },
    "F-60": { titulo: "Apropriação do vernacular sem condescendência", fonte: "Poynor (Venturi/Kalman)", tipo: "convenção", frase: "O vernacular é fonte legítima, mas não pode virar ironia condescendente ou exotismo de elite.", tags: ["vernacular", "ética"], quandoVale: "Identidade, sinalização, embalagem popular" },
    "F-61": { titulo: "Leitura é ativa por natureza; clareza não cerceia", fonte: "Poynor (Stiff/Kinross)", tipo: "fundamento", frase: "Criar ilegibilidade em textos utilitários impõe a presença vaidosa do designer, não emancipa.", tags: ["clareza", "leitura"], quandoVale: "Design de informação, utilidade pública" },
    "F-65": { titulo: "Reformular a tradição: nem cópia servil nem tabula rasa", fonte: "Heller (Barnbrook/Hoefler)", tipo: "convenção", frase: "A história é reservatório vivo; o bom projeto acrescenta inflexão contemporânea autêntica.", tags: ["história", "tradição"], quandoVale: "Revivals, identidades institucionais" },
    "F-66": { titulo: "Design durável como responsabilidade ética", fonte: "Heller (Vignelli)/Sudjic", tipo: "convenção", frase: "Projetar com modismo é irresponsabilidade material; o relevante resiste ao descarte precoce.", tags: ["ética", "durabilidade"], quandoVale: "Sistemas, sinalização, produtos duradouros" },
    "F-67": { titulo: "Acessibilidade comunicativa: design público", fonte: "Heller (Bierut)", tipo: "convenção", frase: "Fazer utilidade pública como enigma para designers é condescendente e excludente.", tags: ["público", "acessibilidade"], quandoVale: "Comunicação pública, cívica" },
    "F-72": { titulo: "A invenção formal se desgasta pelo uso e cooptação", fonte: "Armstrong", tipo: "fundamento", frase: "Toda ruptura perde carga disruptiva com a repetição e vira estilo cosmético.", tags: ["vigilância", "moda"], quandoVale: "Avaliação de linguagens, identidade longa" },
    "F-73": { titulo: "Saber tácito e artesanal como fundamento", fonte: "Armstrong (Wild/Dormer)", tipo: "fundamento", frase: "O atrito físico com a matéria e as ferramentas confere singularidade e voz ao designer.", tags: ["material", "ofício"], quandoVale: "Desenho de tipos, produção, direção impressa" },
    "F-83": { titulo: "Projeto acima do espetáculo", fonte: "Bonsiepe", tipo: "convenção", frase: "Design é 'projeto' analítico e humanista, não styling ou fetiche mercantil.", tags: ["projeto", "ética"], quandoVale: "Escopo, políticas, ensino projetual" },
    "F-85": { titulo: "A estética é constitutiva do uso, não acabamento", fonte: "Bonsiepe/Sudjic", tipo: "fundamento", frase: "A qualidade estética é o modo como o uso se manifesta aos sentidos, não maquiagem externa.", tags: ["uso", "estética"], quandoVale: "Acabamento gráfico, editorial" },
    "F-87": { titulo: "Retórica visual inevitável", fonte: "Bonsiepe", tipo: "convenção", frase: "Não há discurso visual sem retórica; dominar a gramática das aparências evita a manipulação demagógica.", tags: ["retórica", "persuasão"], quandoVale: "Cartazes, campanhas, editorial" },
    "F-88": { titulo: "A visualidade é um domínio cognitivo próprio", fonte: "Bonsiepe", tipo: "fundamento", frase: "A infografia é modalidade autônoma de pensamento, não mera ilustração do texto.", tags: ["infografia", "dados"], quandoVale: "Design de informação, dados" },
    "F-89": { titulo: "Identidade cultural como construção viva", fonte: "Bonsiepe", tipo: "convenção", frase: "A identidade constrói-se na prática material, não em slogans de nation branding.", tags: ["identidade", "cultura"], quandoVale: "Identidade pública, marcas regionais" },
    "F-90": { titulo: "Artesanato como autonomia produtiva", fonte: "Bonsiepe", tipo: "convenção", frase: "Dialogar com o artesanato só se justifica se promover autonomia, sem paternalismo 'rústico'.", tags: ["artesanato", "autonomia"], quandoVale: "Projetos sociais, cooperativas" },
    "F-93": { titulo: "O significado do artefato é processo social", fonte: "Cardoso", tipo: "convenção", frase: "O significado não é gravado na forma pelo criador, mas negociado na circulação e apropriação.", tags: ["recepção", "semiótica"], quandoVale: "Estudo de recepção, marcas públicas" },
    "F-94": { titulo: "Funções no plural, em tensão", fonte: "Cardoso", tipo: "fundamento", frase: "Todo objeto opera em funções prática, estética, simbólica e social que conflitam entre si.", tags: ["função", "complexidade"], quandoVale: "Briefings complexos, diagnóstico" },
    "F-95": { titulo: "Estabilidade do corpo × instabilidade dos códigos", fonte: "Cardoso", tipo: "fundamento", frase: "Calibrar a fisiologia (ritmo milenar) com códigos de moda (ritmo acelerado).", tags: ["ergonomia", "biológico"], quandoVale: "Escalas, ergonomia, tamanhos ópticos" },
    "F-96": { titulo: "Mudar para permanecer", fonte: "Cardoso", tipo: "convenção", frase: "Sistema durável ajusta elementos secundários para preservar o núcleo no tempo.", tags: ["longevidade", "sistema"], quandoVale: "Redesenho de identidades históricas" },
    "F-97": { titulo: "Ancoragem de repertório", fonte: "Cardoso (MAYA)", tipo: "fundamento", frase: "Inovação ilegível gera rejeição; ancorar no repertório conhecido e introduzir o novo como inflexão.", tags: ["ancoragem", "cognição", "MAYA"], quandoVale: "Lançamento de paradigma, identidade" },
    "F-98": { titulo: "Pensar o ciclo de vida integral", fonte: "Cardoso", tipo: "fundamento", frase: "O escopo do design abrange extração, fabricação, reparo e descarte.", tags: ["sustentabilidade", "ciclo de vida"], quandoVale: "Especificação de papéis, embalagem" },
    "F-100": { titulo: "A conotação tipográfica é histórica e contextual", fonte: "Pater", tipo: "convenção", frase: "O que um tipo evoca vem de camadas de uso histórico, não de 'psicologia dos tipos' atemporal.", tags: ["conotação", "história"], quandoVale: "Escolha tipográfica para identidade" },
    "F-101": { titulo: "Combate ao estereótipo visual como atalho gráfico", fonte: "Pater", tipo: "convenção", frase: "Tipografias pretensamente étnicas e clichês folclóricos simplificam culturas de forma exótica.", tags: ["estereótipo", "anti-clichê"], quandoVale: "Embalagens, identidades culturais" },
    "F-103": { titulo: "Hierarquia tipográfica como poder", fonte: "Pater", tipo: "convenção", frase: "Tamanho e caixa codificam autoridade e prestígio; subverter ou reforçar criticamente.", tags: ["poder", "hierarquia"], quandoVale: "Documentos institucionais, ativismo" },
    "F-109": { titulo: "Minimalismo como sinal de status", fonte: "Sudjic", tipo: "convenção", frase: "Austeridade extrema exige processos caríssimos: não é despojamento ético, é status de elite.", tags: ["minimalismo", "status", "luxo"], quandoVale: "Identidade de luxo, premium" },
    "F-110": { titulo: "A definição relacional do luxo", fonte: "Sudjic", tipo: "convenção", frase: "Na saturação de estímulos, o luxo passa a ser silêncio, espaço vazio, tempo e matéria durável.", tags: ["luxo", "vazio", "escassez"], quandoVale: "Branding de alto valor, publicações restritas" },
    "F-111": { titulo: "Amplificação pela simplificação", fonte: "McCloud", tipo: "fundamento", frase: "Eliminar minúcias realistas amplifica o significado e abre o signo à identificação.", tags: ["ícone", "abstração"], quandoVale: "Marcas, pictogramas, ilustração conceitual" },
    "F-112": { titulo: "Modulação de empatia pelo realismo (efeito máscara)", fonte: "McCloud", tipo: "fundamento", frase: "Formas simplificadas convidam à projeção; o foto-realismo cria distanciamento.", tags: ["empatia", "realismo"], quandoVale: "Narrativa visual, campanhas de empatia" },
    "F-113": { titulo: "O campo visual entre realidade, linguagem e forma pura", fonte: "McCloud", tipo: "convenção", frase: "Toda imagem situa-se num triângulo: foto-realismo, linguagem codificada, forma plana pura.", tags: ["direção de arte", "vocabulário"], quandoVale: "Direção de arte conceitual" },
    "F-114": { titulo: "O fechamento na lacuna (closure)", fonte: "McCloud", tipo: "fundamento", frase: "A potência vem do branco entre as partes, onde a mente preenche ativamente as lacunas.", tags: ["closure", "vazio", "participação"], quandoVale: "Paginação, cartazes, identidades abertas" },
    "F-115": { titulo: "Tipos de transição e modulação de ritmo", fonte: "McCloud", tipo: "convenção", frase: "A escolha da transição governa cadência e atmosfera narrativa.", tags: ["ritmo", "narrativa"], quandoVale: "Paginação, exposições, sequências" },
    "F-116": { titulo: "Espaço como tempo", fonte: "McCloud", tipo: "fundamento", frase: "A largura de um quadro e a sangria modulam a sensação de pausa e lentidão.", tags: ["tempo", "espaço", "ritmo"], quandoVale: "Livros, duplas editoriais, catálogos" },
    "F-117": { titulo: "Interdependência ativa entre texto e imagem", fonte: "McCloud", tipo: "convenção", frase: "O texto diz o que a imagem não mostra e vice-versa; evitar redundância estéril.", tags: ["texto-imagem", "sinergia"], quandoVale: "Cartazes, capas, anúncios conceituais" },
    "F-118": { titulo: "As seis camadas estruturais da obra", fonte: "McCloud", tipo: "convenção", frase: "Ideia → forma → idioma → estrutura → técnica → superfície; projetar do centro para a casca.", tags: ["método", "camadas"], quandoVale: "Diagnóstico de projeto, método criativo" }
  },

  // ── TENSÕES ──────────────────────────────────────────────────────────────
  // Extraídas de conhecimento/05-tensoes.md (T-1..T-23).
  // São o coração decisório: cada uma tem polos + posição [IA provisório].
  // `keywords` alimenta a correspondência briefing→tensão (ResolverEngine).
  tensoes: {
    "T-1":  { titulo: "Escala: lei ou gosto?", polos: ["Bringhurst: não componha sem escala", "Lupton: escalas são questão de gosto pessoal"], posicao: "Escala como andaime; olho governa a régua (ajustável por projeto)", fichas: ["F-25", "F-12"], tipo: "convenção", keywords: ["escala", "tamanho", "corpo", "proporção"] },
    "T-2":  { titulo: "Hierarquia de estilos: fisiologia ou história?", polos: ["Bringhurst: ordem romano→itálico→bold é fisiológica", "Lupton: hierarquia é construção e carrega poder"], posicao: "Miolo = fisiologia; capa/identidade = construção negociável", fichas: ["F-9"], tipo: "fundamento + convenção", keywords: ["hierarquia", "estilo", "peso", "negrito", "itálico"] },
    "T-3":  { titulo: "Deformar letras", polos: ["Bringhurst: nunca escalar/inclinar no software", "Lupton: evite, salvo se a intenção é distorcer"], posicao: "Nunca distorcer no software; distorção desenhada é legítima (F-37)", fichas: ["F-20", "F-37"], tipo: "fundamento", keywords: ["distorcer", "deformar", "inclinar", "esticar", "condensar"] },
    "T-4":  { titulo: "A tipografia some ou fala?", polos: ["Warde: taça de cristal", "McCoy/Cranbrook: tipografia como discurso"], posicao: "Divisão por papel: texto corrido = taça; capa/cartaz = fala", fichas: ["F-11", "F-16", "F-27"], tipo: "fundamento + convenção", keywords: ["tipografia", "discurso", "taça", "texto corrido", "interface"] },
    "T-5":  { titulo: "Tipografia e mercado (marca, propaganda)", polos: ["Bringhurst: suspeita ética; logotipos como 'doces'", "Lupton: branding é exercício legítimo"], posicao: "Branding legítimo, mas sem ingenuidade sobre a retórica de sedução (F-109)", fichas: ["F-27", "F-109"], tipo: "convenção", keywords: ["marca", "branding", "propaganda", "publicidade", "mercado", "logotipo"] },
    "T-6":  { titulo: "Algarismos alinhados em texto", polos: ["Bringhurst: 'atitude ignorante'", "Lupton: escolha de tom ('técnico e factual')"], posicao: "Função decide: proporcionais no texto, tabulares em tabelas/dados", fichas: ["F-19"], tipo: "fundamento", keywords: ["algarismo", "número", "tabela", "dados", "figura"] },
    "T-7":  { titulo: "Grid uniforme × escala modular", polos: ["Suíços/Lupton: grid modular como método", "Bringhurst: escala modular musical é mais flexível"], posicao: "Default = escala modular para ritmo editorial; grid uniforme para sistemas reprodutíveis", fichas: ["F-13", "F-25"], tipo: "convenção", keywords: ["grid", "modular", "escala", "uniforme"] },
    "T-8":  { titulo: "Grid: fundamento ou convenção?", polos: ["Müller-Brockmann: cultivar a objetividade", "Samara: é uma convenção"], posicao: "Grid é convenção, mas base firme de hierarquia: quebra-se pouco e sobre base firme", fichas: ["F-9", "F-13", "F-28"], tipo: "convenção", keywords: ["grid", "estrutura", "esqueleto", "objetividade"] },
    "T-9":  { titulo: "Desconstrução: avanço ou desvio?", polos: ["Samara/Lupton: Cranbrook como linhagem legítima", "Bringhurst: pós-moderno 'guincha'"], posicao: "Legítima quando nasce do texto sobre base firme; rejeitada como pastiche de superfície", fichas: ["F-32", "F-54", "F-9"], tipo: "convenção", keywords: ["desconstrução", "pós-moderno", "pos-moderno", "quebra", "vanguarda"] },
    "T-10": { titulo: "Régua × olho", polos: ["Bringhurst: proporções calculadas", "Flor: 'largue a régua'"], posicao: "Cálculo como andaime ('improvise, calcule, improvise'); ajuste final pelo olho", fichas: ["F-35", "F-25", "F-5"], tipo: "fundamento", keywords: ["régua", "olho", "óptico", "ajuste", "precisão"] },
    "T-11": { titulo: "Universalidade da forma", polos: ["Bauhaus: linguagem da visão universal", "Pós-modernismo: significado é cultural"], posicao: "A fisiologia é universal; o significado é cultural e situado (F-41)", fichas: ["F-41", "F-15"], tipo: "fundamento + convenção", keywords: ["universal", "forma", "significado", "cultural"] },
    "T-12": { titulo: "Ideia × forma", polos: ["Lubalin: a ideia, o conceito", "Odermatt: imagem tirada do produto, não do conceito"], posicao: "Ideia primeiro, mas ideia e forma se resolvem juntas a partir do conteúdo", fichas: ["F-46", "F-57"], tipo: "convenção", keywords: ["ideia", "conceito", "forma", "produto"] },
    "T-13": { titulo: "Expressão pessoal do designer", polos: ["Hollis/Bringhurst: desvio da clareza", "McCoy/Cranbrook: designer como autor"], posicao: "Intérprete autoral crítico; quebra nasce do texto, não do exibicionismo", fichas: ["F-45", "F-56", "F-58"], tipo: "convenção", keywords: ["expressão", "voz", "autor", "autoria", "originalidade"] },
    "T-14": { titulo: "Universal (Ulm) × situado (Brasil)", polos: ["Ulm/ESDI/Wollner: método universal", "Aloísio/Lina/Duarte: crítica à transplantação"], posicao: "Projeto situado: método universal é ferramenta, não receita exportada", fichas: ["F-51", "F-52", "F-15"], tipo: "convenção", keywords: ["brasil", "local", "situado", "nacional", "periferia", "latino"] },
    "T-15": { titulo: "Autoria: prestador × autor/voz crítica", polos: ["Hollis/Glaser: tradutor do cliente", "Poynor/Armstrong: designer como autor"], posicao: "Intérprete autoral crítico: nem anônimo, nem estrela (Van Toorn, Flusser)", fichas: ["F-45", "F-58", "F-71"], tipo: "convenção", keywords: ["autoria", "autor", "cliente", "voz crítica", "prestador"] },
    "T-16": { titulo: "Funcionalismo: valor de uso × fetiche", polos: ["Modernismo: forma segue a função", "Flusser/Sudjic: design como sedução"], posicao: "Estética constitutiva do uso, vigilante contra fetiche e minimalismo de status", fichas: ["F-109", "F-68", "F-83"], tipo: "fundamento + convenção", keywords: ["função", "uso", "fetiche", "consumo", "minimalismo", "industrial", "produção", "escala"] },
    "T-17": { titulo: "Universalismo modernista × pluralismo pós-colonial", polos: ["Estilo Suíço: gramática universal", "Pater/Bonsiepe: universalismo como exportação imperialista"], posicao: "Gramática situada, respondendo à periferia sem folclore regressivo", fichas: ["F-51", "F-15"], tipo: "convenção", keywords: ["universalismo", "colonial", "hegemonia", "pluralismo"] },
    "T-18": { titulo: "Clareza imediata × leitor ativo", polos: ["Warde/Tschichold: transmissão direta", "McCoy/Van Toorn: texto aberto a camadas"], posicao: "Miolo = clareza; capa/abertura = tensão e closure que ativam o leitor (C-1)", fichas: ["F-61", "F-11", "F-114"], tipo: "fundamento + convenção", keywords: ["clareza", "leitura", "participação", "enigma", "legibilidade"] },
    "T-19": { titulo: "Regras: limites constitutivos × convenções a transgredir", polos: ["Dormer/Jury: regras constitutivas", "Keedy/Carson: dogma modernista como prisão"], posicao: "Regras como fundamento situado e negociável: quebra-se pouco, sobre base firme", fichas: ["F-1", "F-54", "F-55"], tipo: "fundamento + convenção", keywords: ["regras", "convenção", "transgredir", "dogma", "ofício"] },
    "T-20": { titulo: "Consciência histórica: repertório vivo × pastiche", polos: ["Vignelli: revivalismo como oportunismo", "Glaser/Hoefler: história como reservatório vivo"], posicao: "História usada com necessidade genuína; rejeição de jive modernism e pastiche", fichas: ["F-23", "F-65", "F-59"], tipo: "convenção", keywords: ["história", "retrô", "nostalgia", "pastiche", "clássico", "revival"] },
    "T-21": { titulo: "Vernacular: vitalidade autêntica × condescendência", polos: ["Kalman/Venturi: gráfica de rua viva", "Poynor/Pater: ironia e apropriação de elite"], posicao: "Vernacular com dignidade; rejeição da condescendência pitoresca e extrativismo", fichas: ["F-60", "F-52", "F-101"], tipo: "convenção", keywords: ["vernacular", "popular", "rua", "artesanato", "artesanal", "local", "periferia", "café", "feira"] },
    "T-22": { titulo: "Imagem técnica: objetividade × abstração", polos: ["Nova Objetividade: fotografia neutra", "McCloud: ícone permite identificação"], posicao: "Nenhuma imagem é neutra; papel documental ou icônico conforme a necessidade", fichas: ["F-80", "F-114", "F-111"], tipo: "fundamento + convenção", keywords: ["fotografia", "imagem", "ícone", "abstração", "ilustração", "documental"] },
    "T-23": { titulo: "Resistência ética: recusa × subversão de dentro", polos: ["Garland/FTF: recusa de clientes predatórios", "Kalman: infiltrar-se na barriga da baleia"], posicao: "Combinação tática: disputar espaços com competência, sem salvação ingênua nem cinismo", fichas: ["F-68", "F-62"], tipo: "convenção", keywords: ["ética", "resistência", "recusa", "subversão", "ativismo"] }
  },

  // ── TIPOGRAFIA CURADA ────────────────────────────────────────────────────
  // Curadoria inicial [D] de conhecimento/01-lente.md §8.
  // `google` = string para o Google Fonts CSS API; `css` = font-family no contexto.
  tipografia: {
    displaySerifadas: [
      { nome: "Fraunces", peso: 900, licenca: "OFL", google: "Fraunces:opsz,wght@9..144,400..900", css: "Fraunces" },
      { nome: "Instrument Serif", peso: 400, licenca: "OFL", google: "Instrument+Serif:ital@0;1", css: "Instrument Serif" },
      { nome: "Bodoni Moda", peso: 700, licenca: "OFL", google: "Bodoni+Moda:opsz,wght@6..96,400..900", css: "Bodoni Moda" },
      { nome: "Playfair Display", peso: 700, licenca: "OFL", google: "Playfair+Display:ital,wght@0,400..900;1,400..900", css: "Playfair Display" }
    ],
    grotescas: [
      { nome: "Space Grotesk", peso: "400;700", licenca: "OFL", google: "Space+Grotesk:wght@400..700", css: "Space Grotesk" },
      { nome: "Archivo", peso: "400;700", licenca: "OFL", google: "Archivo:wdth,wght@62..125,100..900", css: "Archivo" },
      { nome: "Anton", peso: 400, licenca: "OFL", google: "Anton", css: "Anton" },
      { nome: "Familjen Grotesk", peso: "400;700", licenca: "OFL", google: "Familjen+Grotesk:ital,wght@0,400..700;1,400..700", css: "Familjen Grotesk" }
    ],
    editoriais: [
      { nome: "Newsreader", peso: "400;700", licenca: "OFL", google: "Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700", css: "Newsreader" },
      { nome: "Source Serif 4", peso: "400;700", licenca: "OFL", google: "Source+Serif+4:opsz,wght@8..60,400..700", css: "Source Serif 4" },
      { nome: "Libre Caslon Display", peso: 400, licenca: "OFL", google: "Libre+Caslon+Display", css: "Libre Caslon Display" }
    ],
    expressivas: [
      { nome: "Syne", peso: "400;800", licenca: "OFL", google: "Syne:wght@400..800", css: "Syne" },
      { nome: "Unbounded", peso: "400;900", licenca: "OFL", google: "Unbounded:wght@400..900", css: "Unbounded" }
    ],
    mono: [
      { nome: "Space Mono", peso: "400;700", licenca: "OFL", google: "Space+Mono:ital,wght@0,400;0,700;1,400", css: "Space Mono" },
      { nome: "IBM Plex Mono", peso: "400;700", licenca: "OFL", google: "IBM+Plex+Mono:wght@400..700", css: "IBM Plex Mono" },
      { nome: "JetBrains Mono", peso: "400;700", licenca: "OFL", google: "JetBrains+Mono:wght@400..700", css: "JetBrains Mono" }
    ]
  },

  // ── PALETAS BASE ─────────────────────────────────────────────────────────
  // Derivadas das correntes de conhecimento/07-contemporaneidade.md §2.
  paletas: {
    terra:       ["#8B5E3C", "#D4A574", "#F5E6D3", "#2C1810", "#5C8A5E"],
    editorial:   ["#1A1A1A", "#F8F5F0", "#E63946", "#457B9D", "#A8DADC"],
    brutalista:  ["#000000", "#FFFFFF", "#FF6B35", "#00FF41", "#FF00FF"],
    caloroso:    ["#E07A5F", "#F4D06F", "#3D405B", "#81B29A", "#F2CC8F"],
    institucional: ["#1D3557", "#457B9D", "#A8DADC", "#F1FAEE", "#E63946"]
  },

  // ── REGRAS ──────────────────────────────────────────────────────────────
  // Extraídas de INSTRUCOES.md + 01-lente.md §8 + 07-contemporaneidade.md §4.
  regras: {
    minReferencias: 6,
    maxReferencias: 8,
    mixObrigatorio: ["historica", "contemporanea"],
    proibidoFonteSistema: ["Georgia", "Arial", "Times", "Helvetica", "Courier"],
    tresPartidos: ["seguro", "tensionado", "provocativo"],
    testeCategoria: "3 segundos: dá pra saber do que se trata?",
    calibracaoOusadia: "C-1 (O Vazio)",
    fontesPesquisa: [
      { nome: "Fonts In Use", url: "https://fontsinuse.com" },
      { nome: "It's Nice That", url: "https://www.itsnicethat.com" },
      { nome: "Are.na", url: "https://www.are.na" },
      { nome: "Mindsparkle Mag", url: "https://mindsparklemag.com" },
      { nome: "Behance", url: "https://www.behance.net" },
      { nome: "The Type", url: "https://www.thetype.com" }
    ]
  },

  // ── CASOS ────────────────────────────────────────────────────────────────
  // Extraídos de conhecimento/06-casos.md.
  casos: {
    "C-1": {
      titulo: "O Vazio — calibração de ousadia",
      descricao: "Capa 2:3 com 'VA' sangrando à direita, ~75% branco ativo, 'VAZIO' em corpo monumental (~245px) parcialmente fora do corte",
      fichasUsadas: ["F-22", "F-42", "F-111", "F-114"],
      quebra: "Manter título integralmente legível na capa frontal (T-18)",
      nivelOusadia: "maximo"
    },
    "C-2": {
      titulo: "Auditoria cruzada: Lente Editorial vs. taste-skill",
      descricao: "Recusa de imposições de landing comercial em favor do caminho editorial; sangria unilateral como decisão",
      fichasUsadas: ["F-9", "F-67", "F-57"],
      nivelOusadia: "medio"
    }
  },

  // ── CHECKLIST DE ENTREGA ────────────────────────────────────────────────
  // Extraído de conhecimento/09-checklist-entrega.md (gate do Passo 8).
  checklist: {
    conceitual: [
      "Teste de categoria (3s): reconhece o universo em 3 segundos?",
      "A ideia precede o ornamento (F-46)?",
      "Toda quebra nasceu do texto/briefing (com ficha F-*/T-*)?",
      "Honestidade × pastiche (T-20/T-21)?"
    ],
    formal: [
      "Hierarquia clara e intencional (F-9)?",
      "Legibilidade no suporte real (escala mínima/máxima)?",
      "Microtipografia sem rios/viúvas, kerning a olho (F-35)?",
      "Tamanhos ópticos para extremos de escala (F-4)?",
      "Contraste suficiente; monocromia viável quando necessário?",
      "Grid, margens e sangrias como decisões (F-18/F-33)?"
    ],
    tecnico: [
      "Logo/wordmark sempre vetorial (nunca gerador de imagem)?",
      "Fontes com licença compatível e listadas?",
      "Formatos conforme a spec de saída (projetos/README.md)?",
      "Mockups no suporte real declarado?"
    ]
  }
};