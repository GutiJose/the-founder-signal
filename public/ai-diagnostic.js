// The Founder Signal, AI Diagnostics
// TWO independent tests, each with its own 0 to 100 score and recommendations:
//   · AI_TESTS.leverage    → "AI Leverage"    (how much AI works FOR you; higher = better)
//   · AI_TESTS.disruption  → "Disruption Risk"(how exposed your model is; lower = safer)
// Trilingual (EN/ES/PT), same conventions as script.js. Each test stands alone.
//
// Data anchors used to calibrate questions & recommendations (2025–2026):
//  · ~80% of early-stage SaaS startups already use AI tools; AI-using startups
//    more profitable (61% vs 54%).  (Kruze Consulting / HubSpot for Startups)
//  · AI-native startups: ~$3.48M revenue/employee (~6x SaaS median), ~40% leaner
//    teams, unicorn ~1 year faster.  (HubSpot for Startups)
//  · ~71% of companies use generative AI in core functions; product dev is #1 (~38%).
//    (Menlo Ventures, State of Generative AI 2025)
//  · The model is NOT the moat. The five durable moats are data flywheel, workflow
//    integration, distribution, brand/trust, network effects. Prompts + UI are not
//    defensible.  (a16z / Marc Andreessen; Menlo; Startups.com "AI Moat")

// ============================================================================
//  Shared interface strings (navigation, common labels)
// ============================================================================
const AI_UI = {
  en: {
    backBtn: "← Back",
    backHome: "← Exit test",
    scoreOutOf: "/100",
    questionOf: "Question {n} of {total}",
    sourcesLabel: "Sources:",
    chooseBadge: "Free 2-minute diagnostics",
    chooseTitle: "Choose your diagnostic",
    chooseSubtitle: "Three quick tests. Each gives a 0 to 100 score and recommendations you can act on.",
    matTitle: "Startup Maturity",
    matText: "Where your startup stands across problem, product, traction, model and runway."
  },
  es: {
    backBtn: "← Atrás",
    backHome: "← Salir del test",
    scoreOutOf: "/100",
    questionOf: "Pregunta {n} de {total}",
    sourcesLabel: "Fuentes:",
    chooseBadge: "Diagnósticos gratis de 2 minutos",
    chooseTitle: "Elige tu diagnóstico",
    chooseSubtitle: "Tres tests rápidos. Cada uno te da un score de 0 a 100 y recomendaciones accionables.",
    matTitle: "Madurez de la Startup",
    matText: "En qué punto está tu startup: problema, producto, tracción, modelo y runway."
  },
  pt: {
    backBtn: "← Voltar",
    backHome: "← Sair do teste",
    scoreOutOf: "/100",
    questionOf: "Pergunta {n} de {total}",
    sourcesLabel: "Fontes:",
    chooseBadge: "Diagnósticos grátis de 2 minutos",
    chooseTitle: "Escolha seu diagnóstico",
    chooseSubtitle: "Três testes rápidos. Cada um te dá um score de 0 a 100 e recomendações acionáveis.",
    matTitle: "Maturidade da Startup",
    matText: "Em que ponto sua startup está: problema, produto, tração, modelo e runway."
  }
};

// Data sources shown discreetly on the AI result screens (transparency).
const AI_SOURCES = [
  { label: "Menlo Ventures (2025)", url: "https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/" },
  { label: "HubSpot for Startups", url: "https://www.hubspot.com/startups/ai/ai-stats-for-startups" },
  { label: "Startups.com (AI Moat)", url: "https://www.startups.com/lexicon/ai-moat" }
];

// ============================================================================
//  The two tests
//  Each test: { key, accent, actionOrder, ui{en,es,pt}, questions[6], bands[5] }
//  actionOrder "asc"  → recommend the weakest answers first (leverage gaps)
//  actionOrder "desc" → recommend the highest-scoring answers first (risk exposure)
// ============================================================================
const AI_TESTS = {

  // -------------------------------------------------------------------------
  //  TEST 1, AI LEVERAGE  (higher score = more AI working for you)
  // -------------------------------------------------------------------------
  leverage: {
    key: "leverage",
    accent: "readiness",     // styling hook
    actionOrder: "asc",
    ui: {
      en: {
        navLabel: "AI Leverage",
        badge: "Free 2-minute AI test",
        title: "How much is AI working FOR your startup?",
        subtitle: "6 questions on how deeply you leverage AI across product and operations. You get a 0 to 100 AI Leverage score and your highest-impact moves.",
        startBtn: "Run the AI Leverage test",
        hint: "No sign-up · 6 questions · grounded in market data",
        cardTitle: "AI Leverage",
        cardText: "How much AI works for you, in your product, your ops and your economics.",
        scoreLabel: "AI Leverage",
        scoreHint: "Higher is stronger",
        recTitle: "Your highest-impact moves",
        retryBtn: "Retake this test"
      },
      es: {
        navLabel: "Palanca de IA",
        badge: "Test de IA gratis de 2 minutos",
        title: "¿Cuánto trabaja la IA PARA tu startup?",
        subtitle: "6 preguntas sobre cuánto aprovechas la IA en producto y operaciones. Obtienes un score de Palanca de IA de 0 a 100 y tus movimientos de mayor impacto.",
        startBtn: "Hacer el test de Palanca de IA",
        hint: "Sin registro · 6 preguntas · basado en datos de mercado",
        cardTitle: "Palanca de IA",
        cardText: "Cuánto trabaja la IA para ti, en tu producto, tus operaciones y tu economía.",
        scoreLabel: "Palanca de IA",
        scoreHint: "Más alto es más fuerte",
        recTitle: "Tus movimientos de mayor impacto",
        retryBtn: "Rehacer este test"
      },
      pt: {
        navLabel: "Alavancagem de IA",
        badge: "Teste de IA grátis de 2 minutos",
        title: "Quanto a IA está trabalhando A FAVOR da sua startup?",
        subtitle: "6 perguntas sobre quanto você alavanca a IA em produto e operações. Você recebe um score de Alavancagem de IA de 0 a 100 e suas ações de maior impacto.",
        startBtn: "Fazer o teste de Alavancagem de IA",
        hint: "Sem cadastro · 6 perguntas · baseado em dados de mercado",
        cardTitle: "Alavancagem de IA",
        cardText: "Quanto a IA trabalha a seu favor, no produto, nas operações e na economia.",
        scoreLabel: "Alavancagem de IA",
        scoreHint: "Maior é mais forte",
        recTitle: "Suas ações de maior impacto",
        retryBtn: "Refazer este teste"
      }
    },
    questions: [
      {
        q: {
          en: "How central is AI to the value your product delivers?",
          es: "¿Qué tan central es la IA en el valor que entrega tu producto?",
          pt: "Quão central é a IA no valor que seu produto entrega?"
        },
        answers: [
          { t: { en: "No AI in the product", es: "Sin IA en el producto", pt: "Sem IA no produto" }, p: 0 },
          { t: { en: "A minor add-on feature", es: "Una función secundaria", pt: "Uma funcionalidade secundária" }, p: 1 },
          { t: { en: "AI powers a key part of the experience", es: "La IA impulsa una parte clave de la experiencia", pt: "A IA impulsiona uma parte-chave da experiência" }, p: 2 },
          { t: { en: "AI is the core of what we deliver", es: "La IA es el núcleo de lo que entregamos", pt: "A IA é o núcleo do que entregamos" }, p: 3 }
        ],
        rec: {
          en: "Map one workflow where AI could 10x the outcome for your user, not as a gimmick, but as the core value, and prototype it in two weeks.",
          es: "Mapea un flujo donde la IA pueda multiplicar por 10 el resultado para tu usuario, no como gimmick sino como valor central, y prototípalo en dos semanas.",
          pt: "Mapeie um fluxo em que a IA possa multiplicar por 10 o resultado para o seu usuário, não como enfeite, mas como valor central, e prototipe em duas semanas."
        }
      },
      {
        q: {
          en: "Do you have a data flywheel, usage that makes the product measurably better?",
          es: "¿Tienes un data flywheel: uso que mejora el producto de forma medible?",
          pt: "Você tem um data flywheel: uso que melhora o produto de forma mensurável?"
        },
        answers: [
          { t: { en: "No proprietary data at all", es: "Sin datos propios", pt: "Nenhum dado proprietário" }, p: 0 },
          { t: { en: "We collect data but don't use it to improve", es: "Recolectamos datos pero no los usamos para mejorar", pt: "Coletamos dados mas não usamos para melhorar" }, p: 1 },
          { t: { en: "Usage data improves the product over time", es: "Los datos de uso mejoran el producto con el tiempo", pt: "Os dados de uso melhoram o produto ao longo do tempo" }, p: 2 },
          { t: { en: "A live flywheel: every use makes it measurably better", es: "Un flywheel vivo: cada uso lo mejora de forma medible", pt: "Um flywheel vivo: cada uso o torna mensuravelmente melhor" }, p: 3 }
        ],
        rec: {
          en: "The data flywheel is the #1 durable AI moat: capture and label the corrections users already make, so your model improves in ways a competitor plugging into the same API cannot copy.",
          es: "El data flywheel es el moat de IA más duradero: captura y etiqueta las correcciones que tus usuarios ya hacen, para que tu modelo mejore de un modo que un competidor con la misma API no puede copiar.",
          pt: "O data flywheel é o moat de IA mais durável: capture e rotule as correções que seus usuários já fazem, para que seu modelo melhore de um jeito que um concorrente na mesma API não consegue copiar."
        }
      },
      {
        q: {
          en: "How deeply is AI used inside your company's operations?",
          es: "¿Qué tan a fondo usas IA en las operaciones de tu empresa?",
          pt: "Quão a fundo a IA é usada nas operações da sua empresa?"
        },
        answers: [
          { t: { en: "We don't use AI tools internally", es: "No usamos herramientas de IA internamente", pt: "Não usamos ferramentas de IA internamente" }, p: 0 },
          { t: { en: "A few people use ChatGPT ad hoc", es: "Algunas personas usan ChatGPT de forma puntual", pt: "Algumas pessoas usam ChatGPT de forma pontual" }, p: 1 },
          { t: { en: "AI is standard in several functions", es: "La IA es estándar en varias funciones", pt: "A IA é padrão em várias funções" }, p: 2 },
          { t: { en: "Embedded company-wide with measurable productivity gains", es: "Integrada en toda la empresa con ganancias de productividad medibles", pt: "Integrada em toda a empresa com ganhos de produtividade mensuráveis" }, p: 3 }
        ],
        rec: {
          en: "AI-native teams run ~40% leaner. Pick your three most repetitive functions (support, content, ops) and set a 30-day target to move them onto AI-assisted workflows.",
          es: "Los equipos AI-native operan ~40% más ligeros. Elige tus tres funciones más repetitivas (soporte, contenido, ops) y ponte una meta a 30 días para pasarlas a flujos asistidos por IA.",
          pt: "Times AI-native operam ~40% mais enxutos. Escolha suas três funções mais repetitivas (suporte, conteúdo, ops) e defina uma meta de 30 dias para movê-las para fluxos assistidos por IA."
        }
      },
      {
        q: {
          en: "What's your team's ability to build with AI?",
          es: "¿Cuál es la capacidad de tu equipo para construir con IA?",
          pt: "Qual é a capacidade do seu time de construir com IA?"
        },
        answers: [
          { t: { en: "Nobody really understands AI", es: "Nadie entiende realmente la IA", pt: "Ninguém entende realmente de IA" }, p: 0 },
          { t: { en: "We depend fully on external agencies/tutorials", es: "Dependemos por completo de agencias/tutoriales externos", pt: "Dependemos totalmente de agências/tutoriais externos" }, p: 1 },
          { t: { en: "At least one person can build with AI APIs", es: "Al menos una persona construye con APIs de IA", pt: "Pelo menos uma pessoa constrói com APIs de IA" }, p: 2 },
          { t: { en: "In-house AI capability; we ship AI features fast", es: "Capacidad de IA interna; lanzamos features de IA rápido", pt: "Capacidade de IA interna; lançamos features de IA rápido" }, p: 3 }
        ],
        rec: {
          en: "You don't need a PhD, you need shipping velocity. Get one builder fluent in the model APIs (function calling, RAG, evals) so you stop outsourcing your core advantage.",
          es: "No necesitas un PhD, necesitas velocidad de entrega. Consigue que una persona domine las APIs de los modelos (function calling, RAG, evals) para dejar de tercerizar tu ventaja central.",
          pt: "Você não precisa de um PhD, precisa de velocidade de entrega. Faça uma pessoa dominar as APIs dos modelos (function calling, RAG, evals) para parar de terceirizar sua vantagem central."
        }
      },
      {
        q: {
          en: "How fast do you experiment and ship AI improvements?",
          es: "¿Qué tan rápido experimentas y lanzas mejoras con IA?",
          pt: "Quão rápido você experimenta e lança melhorias com IA?"
        },
        answers: [
          { t: { en: "We haven't tested any AI use case", es: "No hemos probado ningún caso de uso de IA", pt: "Não testamos nenhum caso de uso de IA" }, p: 0 },
          { t: { en: "We've experimented but shipped nothing", es: "Experimentamos pero no lanzamos nada", pt: "Experimentamos mas não lançamos nada" }, p: 1 },
          { t: { en: "We ship AI improvements occasionally", es: "Lanzamos mejoras con IA de vez en cuando", pt: "Lançamos melhorias com IA de vez em quando" }, p: 2 },
          { t: { en: "We test and ship AI-driven changes continuously", es: "Probamos y lanzamos cambios con IA de forma continua", pt: "Testamos e lançamos mudanças com IA continuamente" }, p: 3 }
        ],
        rec: {
          en: "Models improve weekly. Set a standing cadence, one AI experiment shipped every two weeks, and an eval to measure whether it actually helped. Cadence beats a big one-off bet.",
          es: "Los modelos mejoran cada semana. Fija una cadencia, un experimento de IA lanzado cada dos semanas, y un eval para medir si de verdad ayudó. La cadencia gana a una apuesta única.",
          pt: "Os modelos melhoram toda semana. Fixe uma cadência, um experimento de IA lançado a cada duas semanas, e um eval para medir se realmente ajudou. Cadência vence uma aposta única."
        }
      },
      {
        q: {
          en: "Has AI changed your cost structure or unit economics?",
          es: "¿La IA ha cambiado tu estructura de costos o unit economics?",
          pt: "A IA já mudou sua estrutura de custos ou unit economics?"
        },
        answers: [
          { t: { en: "We've never modeled AI's impact on costs", es: "Nunca modelamos el impacto de la IA en costos", pt: "Nunca modelamos o impacto da IA nos custos" }, p: 0 },
          { t: { en: "Aware it could help, but no action yet", es: "Sabemos que podría ayudar, pero sin acción aún", pt: "Sabemos que poderia ajudar, mas sem ação ainda" }, p: 1 },
          { t: { en: "AI already lowers some costs", es: "La IA ya reduce algunos costos", pt: "A IA já reduz alguns custos" }, p: 2 },
          { t: { en: "AI structurally changed our margins / cost-to-serve", es: "La IA cambió estructuralmente nuestros márgenes / costo de servir", pt: "A IA mudou estruturalmente nossas margens / custo de servir" }, p: 3 }
        ],
        rec: {
          en: "Model it explicitly: which cost line (support, content, onboarding, dev) could AI cut 30–50%? A better cost-to-serve is often a faster path to profitability than more revenue.",
          es: "Modélalo explícitamente: ¿qué línea de costo (soporte, contenido, onboarding, dev) podría recortar la IA un 30–50%? Un mejor costo de servir suele ser un camino a la rentabilidad más rápido que más ingresos.",
          pt: "Modele explicitamente: qual linha de custo (suporte, conteúdo, onboarding, dev) a IA poderia cortar 30–50%? Um melhor custo de servir costuma ser um caminho para a lucratividade mais rápido do que mais receita."
        }
      }
    ],
    bands: [
      {
        min: 0, max: 20,
        name: { en: "AI-Absent", es: "Ausente en IA", pt: "Ausente em IA" },
        desc: {
          en: "AI is barely part of your product or your operations. With ~80% of early-stage startups already using AI, this is a widening gap, not yet a crisis, but a clear opportunity.",
          es: "La IA casi no está en tu producto ni en tus operaciones. Con ~80% de las startups tempranas ya usando IA, es una brecha que se agranda, todavía no una crisis, pero una oportunidad clara.",
          pt: "A IA quase não está no seu produto nem nas suas operações. Com ~80% das startups iniciais já usando IA, é uma lacuna que cresce, ainda não uma crise, mas uma oportunidade clara."
        },
        rec: {
          en: "Start where it pays back fastest: pick one internal task (support replies, content, research) and one product experiment, and ship both in 30 days. Don't boil the ocean, get one AI win in production.",
          es: "Empieza donde retorna más rápido: elige una tarea interna (respuestas de soporte, contenido, research) y un experimento de producto, y lanza ambos en 30 días. No hiervas el océano, logra una victoria de IA en producción.",
          pt: "Comece onde o retorno é mais rápido: escolha uma tarefa interna (respostas de suporte, conteúdo, pesquisa) e um experimento de produto, e lance os dois em 30 dias. Não tente ferver o oceano, coloque uma vitória de IA em produção."
        }
      },
      {
        min: 21, max: 40,
        name: { en: "AI-Curious", es: "Curioso con IA", pt: "Curioso com IA" },
        desc: {
          en: "You've dabbled, some tools, some experiments, but AI isn't yet compounding into an advantage. The gap now is consistency and turning use into proprietary data.",
          es: "Has coqueteado, algunas herramientas, algunos experimentos, pero la IA aún no se acumula en ventaja. El reto ahora es consistencia y convertir el uso en datos propios.",
          pt: "Você já experimentou, algumas ferramentas, alguns testes, mas a IA ainda não se acumula em vantagem. O desafio agora é consistência e transformar uso em dados proprietários."
        },
        rec: {
          en: "Move from ad-hoc to systematic: name an owner for AI, set a two-week shipping cadence, and start capturing the data your usage generates so it becomes a moat, not just a tool.",
          es: "Pasa de lo puntual a lo sistemático: nombra un responsable de IA, fija una cadencia de entrega quincenal y empieza a capturar los datos que genera tu uso para que se vuelvan un moat, no solo una herramienta.",
          pt: "Saia do pontual para o sistemático: nomeie um responsável por IA, fixe uma cadência de entrega quinzenal e comece a capturar os dados que seu uso gera para que virem um moat, não só uma ferramenta."
        }
      },
      {
        min: 41, max: 60,
        name: { en: "AI-Applied", es: "IA Aplicada", pt: "IA Aplicada" },
        desc: {
          en: "AI is doing real work in your product and operations. You're ahead of the median. The next level is defensibility, making your AI advantage compound and hard to copy.",
          es: "La IA hace trabajo real en tu producto y operaciones. Estás por encima de la mediana. El siguiente nivel es la defensibilidad, que tu ventaja de IA se acumule y sea difícil de copiar.",
          pt: "A IA faz trabalho real no seu produto e nas operações. Você está acima da mediana. O próximo nível é defensibilidade, fazer sua vantagem de IA se acumular e ser difícil de copiar."
        },
        rec: {
          en: "Convert usage into a flywheel: instrument every interaction so corrections and outcomes feed back into a better product. That's the difference between using AI and owning an AI advantage.",
          es: "Convierte el uso en flywheel: instrumenta cada interacción para que correcciones y resultados retroalimenten un mejor producto. Esa es la diferencia entre usar IA y poseer una ventaja de IA.",
          pt: "Converta uso em flywheel: instrumente cada interação para que correções e resultados retroalimentem um produto melhor. Essa é a diferença entre usar IA e ter uma vantagem de IA."
        }
      },
      {
        min: 61, max: 80,
        name: { en: "AI-Embedded", es: "IA Integrada", pt: "IA Integrada" },
        desc: {
          en: "AI is woven through product and company, a genuine operating advantage. You likely run leaner and ship faster than peers. Protect and extend the lead.",
          es: "La IA está tejida en producto y empresa, una ventaja operativa real. Probablemente operas más ligero y lanzas más rápido que tus pares. Protege y extiende la ventaja.",
          pt: "A IA está entranhada no produto e na empresa, uma vantagem operacional real. Você provavelmente opera mais enxuto e lança mais rápido que os pares. Proteja e amplie a dianteira."
        },
        rec: {
          en: "Institutionalize it: evals to catch regressions, a data strategy that widens your flywheel, and a habit of adopting new model capabilities within days. Turn your speed into a structural moat.",
          es: "Institucionalízalo: evals para detectar regresiones, una estrategia de datos que amplíe tu flywheel y el hábito de adoptar nuevas capacidades de modelos en días. Convierte tu velocidad en un moat estructural.",
          pt: "Institucionalize: evals para pegar regressões, uma estratégia de dados que amplie seu flywheel e o hábito de adotar novas capacidades dos modelos em dias. Transforme sua velocidade em um moat estrutural."
        }
      },
      {
        min: 81, max: 100,
        name: { en: "AI-Native", es: "AI-Native", pt: "AI-Native" },
        desc: {
          en: "AI is your foundation, not a feature. Startups in this class show ~6x revenue per employee and reach scale faster. The risk now is complacency and over-dependence.",
          es: "La IA es tu base, no un feature. Las startups de esta clase muestran ~6x de ingresos por empleado y escalan más rápido. El riesgo ahora es la complacencia y la sobredependencia.",
          pt: "A IA é sua fundação, não um feature. Startups dessa classe mostram ~6x de receita por funcionário e escalam mais rápido. O risco agora é a acomodação e a dependência excessiva."
        },
        rec: {
          en: "Play offense on distribution and defense on concentration: your leverage is real, so widen the moat (brand, network, data) and de-risk single-provider dependence before it becomes your ceiling. Now run the Disruption Risk test to check the other side.",
          es: "Ataca en distribución y defiende en concentración: tu palanca es real, así que amplía el moat (marca, red, datos) y reduce la dependencia de un único proveedor antes de que sea tu techo. Ahora haz el test de Riesgo de disrupción para ver el otro lado.",
          pt: "Ataque na distribuição e defenda na concentração: sua alavancagem é real, então amplie o moat (marca, rede, dados) e reduza a dependência de um único provedor antes que ela vire seu teto. Agora faça o teste de Risco de disrupção para checar o outro lado."
        }
      }
    ]
  },

  // -------------------------------------------------------------------------
  //  TEST 2, DISRUPTION RISK  (higher score = more exposed to AI killing you)
  // -------------------------------------------------------------------------
  disruption: {
    key: "disruption",
    accent: "risk",
    actionOrder: "desc",
    ui: {
      en: {
        navLabel: "Disruption Risk",
        badge: "Free 2-minute AI test",
        title: "Could AI kill your business model?",
        subtitle: "6 questions on how exposed your model is to being commoditized by AI. You get a 0 to 100 Disruption Risk score and how to defend, lower is safer.",
        startBtn: "Run the Disruption Risk test",
        hint: "No sign-up · 6 questions · grounded in market data",
        cardTitle: "Disruption Risk",
        cardText: "How exposed your model is to being replicated or commoditized by AI.",
        scoreLabel: "Disruption Risk",
        scoreHint: "Lower is safer",
        recTitle: "How to defend",
        retryBtn: "Retake this test"
      },
      es: {
        navLabel: "Riesgo de disrupción",
        badge: "Test de IA gratis de 2 minutos",
        title: "¿Puede la IA matar tu modelo de negocio?",
        subtitle: "6 preguntas sobre qué tan expuesto está tu modelo a ser comoditizado por la IA. Obtienes un score de Riesgo de disrupción de 0 a 100 y cómo defenderte, más bajo es más seguro.",
        startBtn: "Hacer el test de Riesgo de disrupción",
        hint: "Sin registro · 6 preguntas · basado en datos de mercado",
        cardTitle: "Riesgo de disrupción",
        cardText: "Qué tan expuesto está tu modelo a ser replicado o comoditizado por la IA.",
        scoreLabel: "Riesgo de disrupción",
        scoreHint: "Más bajo es más seguro",
        recTitle: "Cómo defenderte",
        retryBtn: "Rehacer este test"
      },
      pt: {
        navLabel: "Risco de disrupção",
        badge: "Teste de IA grátis de 2 minutos",
        title: "A IA pode matar seu modelo de negócio?",
        subtitle: "6 perguntas sobre quão exposto seu modelo está a ser comoditizado pela IA. Você recebe um score de Risco de disrupção de 0 a 100 e como se defender, menor é mais seguro.",
        startBtn: "Fazer o teste de Risco de disrupção",
        hint: "Sem cadastro · 6 perguntas · baseado em dados de mercado",
        cardTitle: "Risco de disrupção",
        cardText: "Quão exposto seu modelo está a ser replicado ou comoditizado pela IA.",
        scoreLabel: "Risco de disrupção",
        scoreHint: "Menor é mais seguro",
        recTitle: "Como se defender",
        retryBtn: "Refazer este teste"
      }
    },
    questions: [
      {
        q: {
          en: "How easily could a general AI assistant (ChatGPT/Claude) do what you do?",
          es: "¿Con qué facilidad un asistente de IA general (ChatGPT/Claude) haría lo que tú haces?",
          pt: "Com que facilidade um assistente de IA geral (ChatGPT/Claude) faria o que você faz?"
        },
        answers: [
          { t: { en: "Not at all, needs access/rights they'll never have", es: "Para nada, requiere accesos/permisos que nunca tendrán", pt: "De jeito nenhum, exige acessos/permissões que eles nunca terão" }, p: 0 },
          { t: { en: "Hard, needs deep integrations and trust we own", es: "Difícil, requiere integraciones profundas y confianza que poseemos", pt: "Difícil, exige integrações profundas e confiança que temos" }, p: 1 },
          { t: { en: "Partially, a determined user could replicate some of it", es: "Parcialmente, un usuario decidido podría replicar parte", pt: "Parcialmente, um usuário decidido poderia replicar parte" }, p: 2 },
          { t: { en: "Easily, our core output is basically a prompt away", es: "Fácilmente, nuestro output central está a un prompt de distancia", pt: "Facilmente, nosso output central está a um prompt de distância" }, p: 3 }
        ],
        rec: {
          en: "If a user can get 80% of your value from a chatbot, your remaining value must live where the model can't reach: proprietary data, integrations, workflow and accountability. Move your roadmap there now.",
          es: "Si un usuario obtiene el 80% de tu valor desde un chatbot, tu valor restante debe vivir donde el modelo no llega: datos propios, integraciones, flujo de trabajo y responsabilidad. Lleva tu roadmap ahí ya.",
          pt: "Se um usuário consegue 80% do seu valor num chatbot, o valor restante precisa morar onde o modelo não alcança: dados proprietários, integrações, workflow e responsabilização. Leve seu roadmap para lá agora."
        }
      },
      {
        q: {
          en: "Is your product essentially a thin layer over a foundation model (a 'wrapper')?",
          es: "¿Tu producto es esencialmente una capa fina sobre un modelo base (un 'wrapper')?",
          pt: "Seu produto é essencialmente uma camada fina sobre um modelo base (um 'wrapper')?"
        },
        answers: [
          { t: { en: "No, most value sits outside the model", es: "No, la mayor parte del valor está fuera del modelo", pt: "Não, a maior parte do valor está fora do modelo" }, p: 0 },
          { t: { en: "Partly, but wrapped in workflow/data others lack", es: "En parte, pero envuelto en flujo/datos que otros no tienen", pt: "Em parte, mas envolto em workflow/dados que outros não têm" }, p: 1 },
          { t: { en: "Largely a wrapper with some custom logic", es: "En gran parte un wrapper con algo de lógica propia", pt: "Em grande parte um wrapper com alguma lógica própria" }, p: 2 },
          { t: { en: "Yes, essentially prompts + UI over an API", es: "Sí, esencialmente prompts + UI sobre una API", pt: "Sim, essencialmente prompts + UI sobre uma API" }, p: 3 }
        ],
        rec: {
          en: "Prompts and a UI aren't a moat, anyone can rebuild them, and the model provider can ship your feature natively. Compound defensibility fast: own the data, the integrations and the distribution around the model.",
          es: "Los prompts y una UI no son un moat, cualquiera los rehace y el proveedor del modelo puede lanzar tu feature de forma nativa. Acumula defensibilidad rápido: apropia los datos, las integraciones y la distribución alrededor del modelo.",
          pt: "Prompts e uma UI não são moat, qualquer um os refaz e o provedor do modelo pode lançar sua feature nativamente. Acumule defensibilidade rápido: seja dono dos dados, das integrações e da distribuição em torno do modelo."
        }
      },
      {
        q: {
          en: "How high is the switching cost for your customers?",
          es: "¿Qué tan alto es el costo de cambio para tus clientes?",
          pt: "Quão alto é o custo de troca para seus clientes?"
        },
        answers: [
          { t: { en: "Very high, deep workflow, data and integrations", es: "Muy alto, flujo, datos e integraciones profundas", pt: "Muito alto, workflow, dados e integrações profundas" }, p: 0 },
          { t: { en: "Moderate, some setup and history to lose", es: "Moderado, algo de configuración e historial que perder", pt: "Moderado, alguma configuração e histórico a perder" }, p: 1 },
          { t: { en: "Low, they could leave in a day", es: "Bajo, podrían irse en un día", pt: "Baixo, poderiam sair em um dia" }, p: 2 },
          { t: { en: "None, no reason to stay if something cheaper appears", es: "Ninguno, sin razón para quedarse si aparece algo más barato", pt: "Nenhum, sem motivo para ficar se surgir algo mais barato" }, p: 3 }
        ],
        rec: {
          en: "Manufacture switching cost on purpose: store the customer's history and preferences, integrate into their stack, and make your product the system of record. Lock-in should be earned through value, not friction.",
          es: "Fabrica costo de cambio a propósito: guarda el historial y las preferencias del cliente, intégrate en su stack y sé su sistema de registro. El lock-in debe ganarse con valor, no con fricción.",
          pt: "Fabrique custo de troca de propósito: guarde o histórico e as preferências do cliente, integre-se ao stack dele e seja o sistema de registro. Lock-in deve ser conquistado com valor, não com fricção."
        }
      },
      {
        q: {
          en: "What kind of moat actually protects you?",
          es: "¿Qué tipo de moat te protege realmente?",
          pt: "Que tipo de moat realmente te protege?"
        },
        answers: [
          { t: { en: "Strong, at least two durable moats", es: "Fuerte, al menos dos moats duraderos", pt: "Forte, pelo menos dois moats duráveis" }, p: 0 },
          { t: { en: "One real moat we're deepening", es: "Un moat real que estamos profundizando", pt: "Um moat real que estamos aprofundando" }, p: 1 },
          { t: { en: "Mostly a first-mover / feature lead", es: "Sobre todo ventaja de ser primeros / de features", pt: "Sobretudo vantagem de pioneirismo / de features" }, p: 2 },
          { t: { en: "Honestly, no real moat", es: "Sinceramente, ningún moat real", pt: "Sinceramente, nenhum moat real" }, p: 3 }
        ],
        rec: {
          en: "The five durable AI-era moats are data flywheel, workflow integration, distribution, brand/trust and network effects. Pick ONE you can realistically own in 6 months and make it your strategy, a feature lead evaporates in a model release.",
          es: "Los cinco moats duraderos en la era IA son: data flywheel, integración en el flujo, distribución, marca/confianza y efectos de red. Elige UNO que puedas poseer en 6 meses y hazlo tu estrategia, una ventaja de features se evapora con un release de modelo.",
          pt: "Os cinco moats duráveis na era da IA são: data flywheel, integração no workflow, distribuição, marca/confiança e efeitos de rede. Escolha UM que você consiga possuir em 6 meses e faça dele sua estratégia, vantagem de feature evapora num release de modelo."
        }
      },
      {
        q: {
          en: "Is AI putting pressure on what customers will pay?",
          es: "¿La IA está presionando lo que los clientes están dispuestos a pagar?",
          pt: "A IA está pressionando o quanto os clientes se dispõem a pagar?"
        },
        answers: [
          { t: { en: "No, AI makes our offer MORE valuable", es: "No, la IA hace nuestra oferta MÁS valiosa", pt: "Não, a IA torna nossa oferta MAIS valiosa" }, p: 0 },
          { t: { en: "Some pressure, but they pay for outcome/trust", es: "Algo de presión, pero pagan por resultado/confianza", pt: "Alguma pressão, mas pagam por resultado/confiança" }, p: 1 },
          { t: { en: "Customers increasingly ask 'why not just use ChatGPT?'", es: "Cada vez más preguntan '¿por qué no uso ChatGPT?'", pt: "Cada vez mais perguntam 'por que não uso o ChatGPT?'" }, p: 2 },
          { t: { en: "AI is collapsing what people will pay for this", es: "La IA está hundiendo lo que la gente pagará por esto", pt: "A IA está derrubando o que as pessoas pagarão por isto" }, p: 3 }
        ],
        rec: {
          en: "Reprice around outcomes, not effort. If AI makes your task cheap to do, sell the result, the guarantee, or the integration, the things a raw model won't deliver, before your price gets benchmarked against a $20 chatbot.",
          es: "Reprecia por resultados, no por esfuerzo. Si la IA abarata tu tarea, vende el resultado, la garantía o la integración, lo que un modelo crudo no entrega, antes de que tu precio se compare con un chatbot de $20.",
          pt: "Reprecifique por resultados, não por esforço. Se a IA barateia sua tarefa, venda o resultado, a garantia ou a integração, o que um modelo cru não entrega, antes que seu preço seja comparado a um chatbot de $20."
        }
      },
      {
        q: {
          en: "How dependent are you on a single foundation-model provider?",
          es: "¿Qué tan dependiente eres de un único proveedor de modelo base?",
          pt: "Quão dependente você é de um único provedor de modelo base?"
        },
        answers: [
          { t: { en: "Model-agnostic, we own the key parts", es: "Agnósticos al modelo, poseemos las partes clave", pt: "Agnósticos ao modelo, somos donos das partes-chave" }, p: 0 },
          { t: { en: "Multi-provider with some abstraction", es: "Multi-proveedor con algo de abstracción", pt: "Multi-provedor com alguma abstração" }, p: 1 },
          { t: { en: "One provider, but we could migrate", es: "Un proveedor, pero podríamos migrar", pt: "Um provedor, mas poderíamos migrar" }, p: 2 },
          { t: { en: "Fully dependent, their pricing/policy could sink us", es: "Totalmente dependientes, su precio/política podría hundirnos", pt: "Totalmente dependentes, preço/política deles poderia nos afundar" }, p: 3 }
        ],
        rec: {
          en: "Concentration is existential risk: a price hike, rate limit or policy change upstream can end you. Add a provider-abstraction layer and validate a fallback model, so no single vendor holds your business hostage.",
          es: "La concentración es riesgo existencial: una subida de precio, un límite de uso o un cambio de política aguas arriba puede acabarte. Añade una capa de abstracción de proveedor y valida un modelo de respaldo, para que ningún proveedor tenga tu negocio de rehén.",
          pt: "Concentração é risco existencial: um aumento de preço, um limite de uso ou uma mudança de política lá em cima pode acabar com você. Adicione uma camada de abstração de provedor e valide um modelo reserva, para que nenhum fornecedor mantenha seu negócio refém."
        }
      }
    ],
    bands: [
      {
        min: 0, max: 20,
        name: { en: "Insulated", es: "Blindado", pt: "Blindado" },
        desc: {
          en: "Your model is well protected from AI commoditization, real moats, high switching costs and value the model can't replicate. AI is far more tailwind than threat.",
          es: "Tu modelo está bien protegido de la comoditización por IA, moats reales, alto costo de cambio y valor que el modelo no puede replicar. La IA es mucho más viento a favor que amenaza.",
          pt: "Seu modelo está bem protegido da comoditização por IA, moats reais, alto custo de troca e valor que o modelo não consegue replicar. A IA é muito mais vento a favor do que ameaça."
        },
        rec: {
          en: "Stay paranoid but press the advantage: your position frees you to use AI aggressively for growth and margin. Re-run this test each quarter, moats erode, and the model frontier moves fast.",
          es: "Mantente paranoico pero presiona la ventaja: tu posición te permite usar IA de forma agresiva para crecer y mejorar margen. Repite este test cada trimestre, los moats se erosionan y la frontera de los modelos avanza rápido.",
          pt: "Continue paranoico, mas pressione a vantagem: sua posição te permite usar IA de forma agressiva para crescer e melhorar margem. Refaça este teste a cada trimestre, moats se erodem e a fronteira dos modelos avança rápido."
        }
      },
      {
        min: 21, max: 40,
        name: { en: "Resilient", es: "Resiliente", pt: "Resiliente" },
        desc: {
          en: "You have meaningful protection, but a soft spot or two, perhaps some wrapper exposure or moderate switching cost. Manageable if you act deliberately.",
          es: "Tienes protección relevante, pero uno o dos puntos débiles, quizá algo de exposición como wrapper o costo de cambio moderado. Manejable si actúas con intención.",
          pt: "Você tem proteção relevante, mas um ou dois pontos fracos, talvez alguma exposição como wrapper ou custo de troca moderado. Gerenciável se você agir com intenção."
        },
        rec: {
          en: "Identify your single weakest link from the actions below and close it this quarter. One deliberate moat-deepening move now prevents a scramble when a competitor or a model release exposes it.",
          es: "Identifica tu eslabón más débil en las acciones de abajo y ciérralo este trimestre. Un movimiento deliberado para profundizar el moat evita una carrera contra el reloj cuando un competidor o un release lo exponga.",
          pt: "Identifique seu elo mais fraco nas ações abaixo e feche-o neste trimestre. Um movimento deliberado para aprofundar o moat evita uma corrida contra o tempo quando um concorrente ou um release o expuser."
        }
      },
      {
        min: 41, max: 60,
        name: { en: "Exposed", es: "Expuesto", pt: "Exposto" },
        desc: {
          en: "A material part of your value could be replicated by a general model or a fast follower. You're not doomed, but disruption risk is real and rising, this needs to be on your roadmap now.",
          es: "Una parte relevante de tu valor podría replicarse con un modelo general o un seguidor rápido. No estás condenado, pero el riesgo de disrupción es real y creciente, debe estar en tu roadmap ya.",
          pt: "Uma parte relevante do seu valor poderia ser replicada por um modelo geral ou um seguidor rápido. Você não está condenado, mas o risco de disrupção é real e crescente, precisa estar no seu roadmap agora."
        },
        rec: {
          en: "Shift your roadmap toward what the model can't copy: proprietary data, deep integrations, outcome-based pricing and switching cost. Treat the two highest-scoring risk answers below as this quarter's priorities.",
          es: "Reorienta tu roadmap hacia lo que el modelo no puede copiar: datos propios, integraciones profundas, precios por resultado y costo de cambio. Trata las dos respuestas de mayor riesgo de abajo como prioridades del trimestre.",
          pt: "Reoriente seu roadmap para o que o modelo não copia: dados proprietários, integrações profundas, preço por resultado e custo de troca. Trate as duas respostas de maior risco abaixo como prioridades do trimestre."
        }
      },
      {
        min: 61, max: 80,
        name: { en: "High Risk", es: "Alto Riesgo", pt: "Alto Risco" },
        desc: {
          en: "Much of what you sell sits directly in AI's path, thin defensibility, low switching cost, or heavy model dependence. A single model release or price move could hit your core. This is urgent.",
          es: "Buena parte de lo que vendes está justo en la trayectoria de la IA, poca defensibilidad, bajo costo de cambio o fuerte dependencia del modelo. Un solo release o cambio de precio podría golpear tu núcleo. Es urgente.",
          pt: "Boa parte do que você vende está bem no caminho da IA, pouca defensibilidade, baixo custo de troca ou forte dependência do modelo. Um único release ou mudança de preço pode atingir seu núcleo. É urgente."
        },
        rec: {
          en: "Treat this as a strategic priority, not a backlog item. Pick one durable moat (data, workflow or distribution) and reorient the next 90 days around owning it. If you can't build defensibility, consider narrowing to a niche the giants won't chase, or evolving the model before the market forces you to.",
          es: "Trátalo como prioridad estratégica, no como un item del backlog. Elige un moat duradero (datos, flujo o distribución) y reorienta los próximos 90 días en poseerlo. Si no puedes construir defensibilidad, considera acotarte a un nicho que los gigantes no perseguirán, o evolucionar el modelo antes de que el mercado te obligue.",
          pt: "Trate isso como prioridade estratégica, não como item de backlog. Escolha um moat durável (dados, workflow ou distribuição) e reoriente os próximos 90 dias em possuí-lo. Se não conseguir construir defensibilidade, considere estreitar para um nicho que os gigantes não vão perseguir, ou evoluir o modelo antes que o mercado te obrigue."
        }
      },
      {
        min: 81, max: 100,
        name: { en: "Existential", es: "Existencial", pt: "Existencial" },
        desc: {
          en: "Your business model is largely a prompt away from being done by the model itself, with little to keep customers or pricing. This is the highest-risk zone: assume the clock is running.",
          es: "Tu modelo de negocio está en gran parte a un prompt de ser hecho por el propio modelo, con poco que retenga clientes o precio. Es la zona de mayor riesgo: asume que el reloj corre.",
          pt: "Seu modelo de negócio está em grande parte a um prompt de ser feito pelo próprio modelo, com pouco que segure clientes ou preço. É a zona de maior risco: assuma que o relógio está correndo."
        },
        rec: {
          en: "Act like the model does what you do, because soon it might. Options, in order: (1) pivot to a defensible layer (proprietary data, regulated access, deep integration); (2) go where the model won't, high-trust, high-accountability niches; (3) reprice around guaranteed outcomes. Choose one and commit this month.",
          es: "Actúa como si el modelo hiciera lo que tú haces, porque pronto podría. Opciones, en orden: (1) pivota a una capa defensible (datos propios, acceso regulado, integración profunda); (2) ve a donde el modelo no irá, nichos de alta confianza y responsabilidad; (3) repreciar por resultados garantizados. Elige una y comprométete este mes.",
          pt: "Aja como se o modelo fizesse o que você faz, porque em breve pode fazer. Opções, em ordem: (1) pivote para uma camada defensável (dados proprietários, acesso regulado, integração profunda); (2) vá para onde o modelo não vai, nichos de alta confiança e responsabilização; (3) reprecifique por resultados garantidos. Escolha uma e comprometa-se este mês."
        }
      }
    ]
  }
};

// ============================================================================
//  Scoring, pure function, no DOM. One function serves both tests.
//    testKey: "leverage" | "disruption"
//    points : array aligned with that test's questions (0–3 each)
//  Returns: { score, band, actions }  (actions = top 3 recommendations)
// ============================================================================
function computeTestResult(testKey, points, language) {
  const L = language || "pt";
  const test = AI_TESTS[testKey];
  let sum = 0, max = 0;
  const items = [];
  test.questions.forEach((q, i) => {
    const p = points[i] || 0;
    sum += p; max += 3;
    items.push({ rec: q.rec[L], p, order: i });
  });
  const score = Math.round((sum / max) * 100);
  const band = test.bands.find((b) => score >= b.min && score <= b.max);
  const asc = test.actionOrder !== "desc"; // leverage: weakest first; disruption: highest risk first
  const actions = items
    .sort((a, b) => asc ? (a.p - b.p || a.order - b.order) : (b.p - a.p || a.order - b.order))
    .slice(0, 3)
    .map((x) => x.rec);
  return { score, band, actions };
}

// Export for module use (site) while remaining plain globals for the standalone demo.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { AI_UI, AI_TESTS, AI_SOURCES, computeTestResult };
}
