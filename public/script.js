// The Founder Signal - lógica del quiz, score y traducciones (EN/ES/PT)

// ===== 1. Textos de la interfaz =====
const UI = {
  en: {
    badge: "Free 2-minute diagnostic",
    heroTitle: "How strong is your startup signal?",
    heroSubtitle: "Answer 10 quick questions and get an instant score of your startup's stage — plus the 3 things you should focus on next.",
    startBtn: "Get my score",
    heroHint: "No sign-up required · 10 questions · 2 minutes",
    feat1Title: "Instant score",
    feat1Text: "A 0–100 score based on the fundamentals investors and accelerators look at.",
    feat2Title: "Know your stage",
    feat2Text: "Idea, Validation, Building, Traction or Growth — see exactly where you stand.",
    feat3Title: "Clear next steps",
    feat3Text: "Your 3 highest-impact priorities, based on your weakest areas.",
    backBtn: "← Back",
    resultBadge: "Your Founder Signal",
    focusTitle: "Your top 3 priorities",
    emailTitle: "Want to level up your score?",
    emailText: "Leave your email and get practical resources for your stage. No spam.",
    emailPlaceholder: "you@startup.com",
    emailBtn: "Send me resources",
    emailDone: "✓ You're in! Check your inbox soon.",
    newsletterLink: "Or follow The Founder Signal newsletter on LinkedIn →",
    retryBtn: "Retake the quiz",
    questionOf: "Question {n} of {total}"
  },
  es: {
    badge: "Diagnóstico gratis de 2 minutos",
    heroTitle: "¿Qué tan fuerte es la señal de tu startup?",
    heroSubtitle: "Responde 10 preguntas rápidas y obtén al instante un score del estadio de tu startup — más las 3 cosas en las que deberías enfocarte.",
    startBtn: "Obtener mi score",
    heroHint: "Sin registro · 10 preguntas · 2 minutos",
    feat1Title: "Score instantáneo",
    feat1Text: "Un puntaje de 0–100 basado en los fundamentos que miran inversores y aceleradoras.",
    feat2Title: "Conoce tu etapa",
    feat2Text: "Idea, Validación, Construcción, Tracción o Crecimiento — ve exactamente dónde estás.",
    feat3Title: "Próximos pasos claros",
    feat3Text: "Tus 3 prioridades de mayor impacto, según tus áreas más débiles.",
    backBtn: "← Atrás",
    resultBadge: "Tu Founder Signal",
    focusTitle: "Tus 3 prioridades principales",
    emailTitle: "¿Quieres subir tu score?",
    emailText: "Deja tu email y recibe recursos prácticos para tu etapa. Sin spam.",
    emailPlaceholder: "tu@startup.com",
    emailBtn: "Enviarme recursos",
    emailDone: "✓ ¡Listo! Pronto recibirás noticias.",
    newsletterLink: "O sigue la newsletter The Founder Signal en LinkedIn →",
    retryBtn: "Rehacer el quiz",
    questionOf: "Pregunta {n} de {total}"
  },
  pt: {
    badge: "Diagnóstico grátis de 2 minutos",
    heroTitle: "Quão forte é o sinal da sua startup?",
    heroSubtitle: "Responda 10 perguntas rápidas e receba na hora um score do estágio da sua startup — além das 3 coisas em que você deveria focar.",
    startBtn: "Obter meu score",
    heroHint: "Sem cadastro · 10 perguntas · 2 minutos",
    feat1Title: "Score instantâneo",
    feat1Text: "Uma pontuação de 0–100 baseada nos fundamentos que investidores e aceleradoras analisam.",
    feat2Title: "Conheça seu estágio",
    feat2Text: "Ideia, Validação, Construção, Tração ou Crescimento — veja exatamente onde você está.",
    feat3Title: "Próximos passos claros",
    feat3Text: "Suas 3 prioridades de maior impacto, com base nas suas áreas mais fracas.",
    backBtn: "← Voltar",
    resultBadge: "Seu Founder Signal",
    focusTitle: "Suas 3 principais prioridades",
    emailTitle: "Quer aumentar seu score?",
    emailText: "Deixe seu email e receba recursos práticos para o seu estágio. Sem spam.",
    emailPlaceholder: "voce@startup.com",
    emailBtn: "Quero os recursos",
    emailDone: "✓ Pronto! Em breve você recebe novidades.",
    newsletterLink: "Ou siga a newsletter The Founder Signal no LinkedIn →",
    retryBtn: "Refazer o quiz",
    questionOf: "Pergunta {n} de {total}"
  }
};

// ===== 2. Preguntas =====
// Cada pregunta tiene 4 respuestas (0 a 3 puntos) y una recomendación
// que se muestra si esa área resulta débil.
const QUESTIONS = [
  {
    q: { en: "How well do you understand the problem you're solving?", es: "¿Qué tan bien entiendes el problema que resuelves?", pt: "Quão bem você entende o problema que está resolvendo?" },
    answers: [
      { t: { en: "It's mostly an idea I find interesting", es: "Es sobre todo una idea que me parece interesante", pt: "É principalmente uma ideia que acho interessante" }, p: 0 },
      { t: { en: "I've experienced the problem myself", es: "He vivido el problema en carne propia", pt: "Eu mesmo já vivi o problema" }, p: 1 },
      { t: { en: "I've talked to 5–15 people who have it", es: "He hablado con 5–15 personas que lo tienen", pt: "Falei com 5–15 pessoas que têm o problema" }, p: 2 },
      { t: { en: "I've interviewed 20+ potential customers and can describe their pain precisely", es: "He entrevistado a 20+ clientes potenciales y puedo describir su dolor con precisión", pt: "Entrevistei 20+ clientes potenciais e sei descrever a dor deles com precisão" }, p: 3 }
    ],
    rec: {
      en: "Talk to more customers. Interview at least 20 people who have the problem before building anything else — patterns in their answers are your roadmap.",
      es: "Habla con más clientes. Entrevista al menos a 20 personas que tengan el problema antes de construir nada más — los patrones en sus respuestas son tu hoja de ruta.",
      pt: "Fale com mais clientes. Entreviste pelo menos 20 pessoas que têm o problema antes de construir qualquer outra coisa — os padrões nas respostas são o seu roteiro."
    }
  },
  {
    q: { en: "Have you validated that people want your solution?", es: "¿Has validado que la gente quiere tu solución?", pt: "Você validou que as pessoas querem a sua solução?" },
    answers: [
      { t: { en: "Not yet — it's still on paper", es: "Todavía no — sigue en papel", pt: "Ainda não — está no papel" }, p: 0 },
      { t: { en: "Friends and family say they like it", es: "Amigos y familia dicen que les gusta", pt: "Amigos e família dizem que gostam" }, p: 1 },
      { t: { en: "Strangers signed up to a waitlist or tested a prototype", es: "Desconocidos se apuntaron a una lista de espera o probaron un prototipo", pt: "Desconhecidos entraram numa lista de espera ou testaram um protótipo" }, p: 2 },
      { t: { en: "People already pay or actively use it", es: "La gente ya paga o lo usa activamente", pt: "As pessoas já pagam ou usam ativamente" }, p: 3 }
    ],
    rec: {
      en: "Run a real validation test: a landing page with sign-ups, pre-orders, or a concierge MVP. Opinions from friends don't count — commitment does.",
      es: "Haz una prueba de validación real: una landing con registros, preventas o un MVP concierge. Las opiniones de amigos no cuentan — el compromiso sí.",
      pt: "Faça um teste de validação real: uma landing page com cadastros, pré-vendas ou um MVP concierge. Opinião de amigos não conta — compromisso sim."
    }
  },
  {
    q: { en: "What's the state of your product?", es: "¿Cuál es el estado de tu producto?", pt: "Qual é o estado do seu produto?" },
    answers: [
      { t: { en: "No product yet", es: "Aún no hay producto", pt: "Ainda não há produto" }, p: 0 },
      { t: { en: "Mockups or a prototype", es: "Mockups o un prototipo", pt: "Mockups ou um protótipo" }, p: 1 },
      { t: { en: "A working MVP with early users", es: "Un MVP funcional con primeros usuarios", pt: "Um MVP funcional com primeiros usuários" }, p: 2 },
      { t: { en: "A stable product that users rely on regularly", es: "Un producto estable que los usuarios usan con regularidad", pt: "Um produto estável que os usuários usam com regularidade" }, p: 3 }
    ],
    rec: {
      en: "Ship the smallest version that solves the core problem. Cut every feature that isn't essential — you can add them back once real users ask.",
      es: "Lanza la versión más pequeña que resuelva el problema central. Recorta toda función no esencial — las añades cuando usuarios reales las pidan.",
      pt: "Lance a menor versão que resolva o problema central. Corte toda funcionalidade não essencial — adicione depois, quando usuários reais pedirem."
    }
  },
  {
    q: { en: "How many active users or customers do you have?", es: "¿Cuántos usuarios o clientes activos tienes?", pt: "Quantos usuários ou clientes ativos você tem?" },
    answers: [
      { t: { en: "None yet", es: "Ninguno todavía", pt: "Nenhum ainda" }, p: 0 },
      { t: { en: "A handful of testers", es: "Un puñado de testers", pt: "Um punhado de testers" }, p: 1 },
      { t: { en: "Dozens of recurring users", es: "Decenas de usuarios recurrentes", pt: "Dezenas de usuários recorrentes" }, p: 2 },
      { t: { en: "Hundreds+ and growing month over month", es: "Cientos o más, creciendo mes a mes", pt: "Centenas ou mais, crescendo mês a mês" }, p: 3 }
    ],
    rec: {
      en: "Focus on getting your first 10 devoted users manually — DMs, communities, personal outreach. Do things that don't scale before optimizing anything.",
      es: "Enfócate en conseguir tus primeros 10 usuarios devotos a mano — mensajes directos, comunidades, contacto personal. Haz cosas que no escalan antes de optimizar nada.",
      pt: "Foque em conseguir seus primeiros 10 usuários fiéis manualmente — mensagens diretas, comunidades, contato pessoal. Faça coisas que não escalam antes de otimizar."
    }
  },
  {
    q: { en: "Is your startup making money?", es: "¿Tu startup está generando ingresos?", pt: "Sua startup está gerando receita?" },
    answers: [
      { t: { en: "No revenue and no pricing defined", es: "Sin ingresos y sin precio definido", pt: "Sem receita e sem preço definido" }, p: 0 },
      { t: { en: "Pricing defined but no sales yet", es: "Precio definido pero sin ventas aún", pt: "Preço definido, mas ainda sem vendas" }, p: 1 },
      { t: { en: "First paying customers", es: "Primeros clientes de pago", pt: "Primeiros clientes pagantes" }, p: 2 },
      { t: { en: "Consistent, growing monthly revenue", es: "Ingresos mensuales consistentes y crecientes", pt: "Receita mensal consistente e crescente" }, p: 3 }
    ],
    rec: {
      en: "Start charging earlier than feels comfortable. A single paying customer teaches you more about your business than a hundred free users.",
      es: "Empieza a cobrar antes de lo que te resulte cómodo. Un solo cliente que paga te enseña más sobre tu negocio que cien usuarios gratis.",
      pt: "Comece a cobrar antes do que parece confortável. Um único cliente pagante ensina mais sobre o seu negócio do que cem usuários grátis."
    }
  },
  {
    q: { en: "How clear is your business model?", es: "¿Qué tan claro es tu modelo de negocio?", pt: "Quão claro é o seu modelo de negócio?" },
    answers: [
      { t: { en: "I haven't thought about monetization", es: "No he pensado en la monetización", pt: "Ainda não pensei em monetização" }, p: 0 },
      { t: { en: "I have a rough idea of how it could make money", es: "Tengo una idea aproximada de cómo podría generar dinero", pt: "Tenho uma ideia aproximada de como poderia gerar dinheiro" }, p: 1 },
      { t: { en: "I know who pays, how much, and why", es: "Sé quién paga, cuánto y por qué", pt: "Sei quem paga, quanto e por quê" }, p: 2 },
      { t: { en: "My model is tested with real transactions and unit economics", es: "Mi modelo está probado con transacciones reales y unit economics", pt: "Meu modelo está testado com transações reais e unit economics" }, p: 3 }
    ],
    rec: {
      en: "Write a one-page business model: who pays, how much, what it costs you to serve them, and why they'd choose you. Test it with 5 real prospects.",
      es: "Escribe tu modelo de negocio en una página: quién paga, cuánto, cuánto te cuesta servirles y por qué te elegirían. Pruébalo con 5 prospectos reales.",
      pt: "Escreva seu modelo de negócio em uma página: quem paga, quanto, quanto custa atendê-los e por que escolheriam você. Teste com 5 prospects reais."
    }
  },
  {
    q: { en: "How is your founding team?", es: "¿Cómo está tu equipo fundador?", pt: "Como está o seu time fundador?" },
    answers: [
      { t: { en: "Just me, missing key skills for this product", es: "Solo yo, y me faltan habilidades clave para este producto", pt: "Só eu, e faltam habilidades-chave para este produto" }, p: 0 },
      { t: { en: "Just me, but I can build and sell the basics", es: "Solo yo, pero puedo construir y vender lo básico", pt: "Só eu, mas consigo construir e vender o básico" }, p: 1 },
      { t: { en: "Co-founders covering product and business, part-time", es: "Cofundadores cubriendo producto y negocio, a tiempo parcial", pt: "Cofundadores cobrindo produto e negócio, em tempo parcial" }, p: 2 },
      { t: { en: "Committed full-time team covering product, tech and sales", es: "Equipo comprometido a tiempo completo cubriendo producto, tecnología y ventas", pt: "Time comprometido em tempo integral cobrindo produto, tecnologia e vendas" }, p: 3 }
    ],
    rec: {
      en: "Close your skill gap: find a complementary co-founder or learn the missing skill enough to ship v1. Solo is fine — stuck is not.",
      es: "Cierra tu brecha de habilidades: busca un cofundador complementario o aprende lo mínimo de la habilidad faltante para lanzar la v1. Estar solo está bien — estar bloqueado no.",
      pt: "Feche sua lacuna de habilidades: encontre um cofundador complementar ou aprenda o mínimo da habilidade que falta para lançar a v1. Estar sozinho tudo bem — travado, não."
    }
  },
  {
    q: { en: "Do you track any key metrics?", es: "¿Mides alguna métrica clave?", pt: "Você acompanha alguma métrica-chave?" },
    answers: [
      { t: { en: "No, I go by intuition", es: "No, me guío por intuición", pt: "Não, sigo a intuição" }, p: 0 },
      { t: { en: "I check some numbers occasionally", es: "Reviso algunos números de vez en cuando", pt: "Vejo alguns números de vez em quando" }, p: 1 },
      { t: { en: "I track 1–2 core metrics weekly", es: "Sigo 1–2 métricas clave cada semana", pt: "Acompanho 1–2 métricas-chave por semana" }, p: 2 },
      { t: { en: "I have a dashboard and make decisions based on data", es: "Tengo un dashboard y decido con base en datos", pt: "Tenho um dashboard e decido com base em dados" }, p: 3 }
    ],
    rec: {
      en: "Pick ONE north-star metric (e.g. weekly active users or monthly revenue) and review it every week. What gets measured gets improved.",
      es: "Elige UNA métrica norte (p. ej. usuarios activos semanales o ingresos mensuales) y revísala cada semana. Lo que se mide, mejora.",
      pt: "Escolha UMA métrica norte (ex.: usuários ativos semanais ou receita mensal) e revise toda semana. O que é medido, melhora."
    }
  },
  {
    q: { en: "Do you have a repeatable way to get new users?", es: "¿Tienes una forma repetible de conseguir nuevos usuarios?", pt: "Você tem uma forma repetível de conseguir novos usuários?" },
    answers: [
      { t: { en: "No idea how I'd reach them", es: "No tengo idea de cómo llegar a ellos", pt: "Não faço ideia de como alcançá-los" }, p: 0 },
      { t: { en: "I've identified where my audience hangs out", es: "He identificado dónde está mi audiencia", pt: "Já identifiquei onde meu público está" }, p: 1 },
      { t: { en: "One channel brings users consistently", es: "Un canal me trae usuarios de forma consistente", pt: "Um canal traz usuários de forma consistente" }, p: 2 },
      { t: { en: "Multiple channels with known acquisition costs", es: "Varios canales con costos de adquisición conocidos", pt: "Vários canais com custos de aquisição conhecidos" }, p: 3 }
    ],
    rec: {
      en: "Test one acquisition channel at a time for 2 weeks each (communities, content, cold outreach, ads). Double down on the first one that shows signal.",
      es: "Prueba un canal de adquisición a la vez durante 2 semanas cada uno (comunidades, contenido, contacto en frío, ads). Apuesta fuerte por el primero que muestre señal.",
      pt: "Teste um canal de aquisição por vez, 2 semanas cada (comunidades, conteúdo, contato frio, anúncios). Invista pesado no primeiro que mostrar sinal."
    }
  },
  {
    q: { en: "How much runway (time/money) do you have to keep going?", es: "¿Cuánto runway (tiempo/dinero) tienes para seguir adelante?", pt: "Quanto runway (tempo/dinheiro) você tem para continuar?" },
    answers: [
      { t: { en: "I haven't calculated it", es: "No lo he calculado", pt: "Nunca calculei" }, p: 0 },
      { t: { en: "A few months, and it worries me", es: "Unos pocos meses, y me preocupa", pt: "Poucos meses, e isso me preocupa" }, p: 1 },
      { t: { en: "6–12 months of committed time or savings", es: "6–12 meses de tiempo comprometido o ahorros", pt: "6–12 meses de tempo comprometido ou poupança" }, p: 2 },
      { t: { en: "12+ months via revenue, savings or funding", es: "12+ meses vía ingresos, ahorros o inversión", pt: "12+ meses via receita, poupança ou investimento" }, p: 3 }
    ],
    rec: {
      en: "Calculate your runway this week: months you can keep going at current burn. Then plan milestones that fit inside it — with margin.",
      es: "Calcula tu runway esta semana: los meses que puedes seguir con tu gasto actual. Luego planea hitos que quepan dentro — con margen.",
      pt: "Calcule seu runway esta semana: quantos meses você aguenta no ritmo atual de gastos. Depois planeje marcos que caibam dentro dele — com margem."
    }
  }
];

// ===== 3. Etapas según el score =====
const STAGES = [
  {
    min: 0, max: 20,
    name: { en: "Idea Stage", es: "Etapa de Idea", pt: "Estágio de Ideia" },
    desc: {
      en: "You're at the very beginning. That's not bad news — it means your biggest wins are ahead. Right now, learning beats building.",
      es: "Estás en el comienzo. No es mala noticia — significa que tus mayores logros están por delante. Ahora mismo, aprender vale más que construir.",
      pt: "Você está no comecinho. Isso não é má notícia — significa que suas maiores vitórias estão à frente. Agora, aprender vale mais que construir."
    }
  },
  {
    min: 21, max: 40,
    name: { en: "Validation Stage", es: "Etapa de Validación", pt: "Estágio de Validação" },
    desc: {
      en: "You have real signals but not enough proof yet. Your mission: confirm people want this badly enough to pay or commit.",
      es: "Tienes señales reales pero aún no suficiente evidencia. Tu misión: confirmar que la gente lo quiere tanto como para pagar o comprometerse.",
      pt: "Você tem sinais reais, mas ainda não provas suficientes. Sua missão: confirmar que as pessoas querem isso a ponto de pagar ou se comprometer."
    }
  },
  {
    min: 41, max: 60,
    name: { en: "Building Stage", es: "Etapa de Construcción", pt: "Estágio de Construção" },
    desc: {
      en: "The foundations are in place. Now it's about shipping fast, learning from real users, and getting your first consistent revenue.",
      es: "Las bases están puestas. Ahora se trata de lanzar rápido, aprender de usuarios reales y conseguir tus primeros ingresos consistentes.",
      pt: "As bases estão prontas. Agora é lançar rápido, aprender com usuários reais e conquistar suas primeiras receitas consistentes."
    }
  },
  {
    min: 61, max: 80,
    name: { en: "Traction Stage", es: "Etapa de Tracción", pt: "Estágio de Tração" },
    desc: {
      en: "You have real traction — users, revenue, and momentum. Focus on what's working and fix your weakest link before scaling.",
      es: "Tienes tracción real — usuarios, ingresos y momentum. Enfócate en lo que funciona y arregla tu eslabón más débil antes de escalar.",
      pt: "Você tem tração real — usuários, receita e momentum. Foque no que funciona e corrija seu elo mais fraco antes de escalar."
    }
  },
  {
    min: 81, max: 100,
    name: { en: "Growth Stage", es: "Etapa de Crecimiento", pt: "Estágio de Crescimento" },
    desc: {
      en: "Strong signal! Your fundamentals are solid. Now the game is scaling channels, team and processes without breaking what works.",
      es: "¡Señal fuerte! Tus fundamentos son sólidos. Ahora el juego es escalar canales, equipo y procesos sin romper lo que funciona.",
      pt: "Sinal forte! Seus fundamentos são sólidos. Agora o jogo é escalar canais, time e processos sem quebrar o que funciona."
    }
  }
];

// ===== 4. Estado de la app =====
let lang = "en";
let current = 0;                 // pregunta actual
let points = [];                 // puntos por pregunta
let finalScore = 0;
let finalStage = null;

const $ = (id) => document.getElementById(id);

// ===== 5. Traducción de la interfaz =====
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = UI[lang][el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = UI[lang][el.dataset.i18nPlaceholder];
  });
  document.documentElement.lang = lang;
}

function setLanguage(newLang) {
  lang = newLang;
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  applyTranslations();
  // Re-renderiza la pantalla activa en el nuevo idioma
  if ($("quiz").classList.contains("active")) renderQuestion();
  if ($("result").classList.contains("active")) renderResult(false);
}

// ===== 6. Navegación entre pantallas =====
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo(0, 0);
}

// ===== 7. Quiz =====
function renderQuestion() {
  const q = QUESTIONS[current];
  $("progress-bar").style.width = `${(current / QUESTIONS.length) * 100}%`;
  $("question-count").textContent = UI[lang].questionOf
    .replace("{n}", current + 1)
    .replace("{total}", QUESTIONS.length);
  $("question-text").textContent = q.q[lang];

  const answersDiv = $("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach((a) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = a.t[lang];
    btn.onclick = () => {
      points[current] = a.p;
      current++;
      current < QUESTIONS.length ? renderQuestion() : renderResult(true);
    };
    answersDiv.appendChild(btn);
  });

  $("back-btn").style.visibility = current === 0 ? "hidden" : "visible";
}

// ===== 8. Resultado =====
function renderResult(recalculate) {
  if (recalculate) {
    const total = points.reduce((sum, p) => sum + p, 0);
    finalScore = Math.round((total / (QUESTIONS.length * 3)) * 100);
    finalStage = STAGES.find((s) => finalScore >= s.min && finalScore <= s.max);
  }

  showScreen("result");

  // Anima el número y el anillo
  $("score-value").textContent = finalScore;
  const circumference = 326.7;
  requestAnimationFrame(() => {
    $("ring-fill").style.strokeDashoffset = circumference * (1 - finalScore / 100);
  });

  $("stage-name").textContent = finalStage.name[lang];
  $("stage-desc").textContent = finalStage.desc[lang];

  // Top 3 recomendaciones = las 3 preguntas con menor puntaje
  const ranked = QUESTIONS
    .map((q, i) => ({ rec: q.rec[lang], score: points[i], order: i }))
    .sort((a, b) => a.score - b.score || a.order - b.order)
    .slice(0, 3);

  const list = $("recommendations");
  list.innerHTML = "";
  ranked.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = r.rec;
    list.appendChild(li);
  });
}

// ===== 9. Captura de email (opcional) =====
$("email-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = $("email-input").value;
  try {
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        score: finalScore,
        stage: finalStage.name.en,
        language: lang
      })
    });
  } catch {
    // Si el servidor no responde, no bloqueamos la experiencia del usuario
  }
  $("email-form").classList.add("hidden");
  $("email-done").classList.remove("hidden");
});

// ===== 10. Eventos =====
$("start-btn").onclick = () => {
  current = 0;
  points = [];
  showScreen("quiz");
  renderQuestion();
};

$("back-btn").onclick = () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
};

$("retry-btn").onclick = () => {
  current = 0;
  points = [];
  $("email-form").classList.remove("hidden");
  $("email-done").classList.add("hidden");
  $("email-input").value = "";
  $("ring-fill").style.strokeDashoffset = 326.7;
  showScreen("quiz");
  renderQuestion();
};

document.querySelectorAll(".lang-switch button").forEach((b) => {
  b.onclick = () => setLanguage(b.dataset.lang);
});

// Detecta el idioma del navegador la primera vez
const browserLang = (navigator.language || "en").slice(0, 2);
setLanguage(["en", "es", "pt"].includes(browserLang) ? browserLang : "en");
