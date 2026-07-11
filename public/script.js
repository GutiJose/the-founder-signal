// The Founder Signal — site pessoal de Jose Gutiérrez
// Seções: Início · Diagnóstico · Artigos · Sobre (EN/ES/PT)

// ===== 1. Textos da interface =====
const UI = {
  en: {
    navHome: "Home",
    navQuiz: "Diagnostic",
    navArticles: "Articles",
    navAbout: "About",
    badge: "Strategies for founders & startups",
    heroTitle: "Real startup strategy, without the glamour",
    heroSubtitle: "I'm Jose Gutiérrez — serial entrepreneur since 2007, co-founder with an exit (Lincon Health), ex-partner at ACE Ventures and partner at Wellbe. Here I share what actually works when building, growing and selling a startup.",
    ctaQuiz: "Take the free diagnostic",
    ctaArticles: "Read the articles",
    feat1Title: "Articles from the trenches",
    feat1Text: "Strategy, fundraising, metrics and pivots — told by someone who lived them, with data and sources.",
    feat2Title: "2-minute diagnostic",
    feat2Text: "Answer 10 questions and get a 0–100 score of your startup's stage plus your top 3 priorities.",
    feat3Title: "Real experience",
    feat3Text: "From founding to exit: 300+ startups evaluated, corporate venture, healthtech and international markets.",
    latestTitle: "Latest articles",
    seeAllArticles: "See all articles",
    quizBadge: "Free 2-minute diagnostic",
    quizTitle: "How strong is your startup signal?",
    quizSubtitle: "Answer 10 quick questions and get an instant score of your startup's stage — plus the 3 things you should focus on next.",
    startBtn: "Get my score",
    heroHint: "No sign-up required · 10 questions · 2 minutes",
    backBtn: "← Back",
    backHome: "← Exit quiz",
    resultBadge: "Your Founder Signal",
    focusTitle: "Your top 3 priorities",
    emailTitle: "Want to level up your score?",
    emailText: "Leave your email and get practical resources for your stage. No spam.",
    emailPlaceholder: "you@startup.com",
    emailBtn: "Send me resources",
    emailDone: "✓ You're in! Check your inbox soon.",
    newsletterLink: "Or follow The Founder Signal newsletter on LinkedIn →",
    retryBtn: "Retake the quiz",
    questionOf: "Question {n} of {total}",
    articlesTitle: "Articles",
    articlesSubtitle: "Originally published in The Founder Signal newsletter. Articles are in Portuguese.",
    pubAll: "Follow the newsletter on LinkedIn →",
    backToArticles: "← All articles",
    articleFooter: "Originally published in The Founder Signal newsletter:",
    minRead: "min read",
    aboutTagline: "Serial entrepreneur · Exit as co-founder & COO of Lincon Health · Partner at Wellbe",
    aboutNewsletter: "Newsletter"
  },
  es: {
    navHome: "Inicio",
    navQuiz: "Diagnóstico",
    navArticles: "Artículos",
    navAbout: "Sobre mí",
    badge: "Estrategias para emprendedores y startups",
    heroTitle: "Estrategia real de startups, sin glamour",
    heroSubtitle: "Soy Jose Gutiérrez — emprendedor serial desde 2007, cofundador con exit (Lincon Health), ex-socio de ACE Ventures y socio en Wellbe. Aquí comparto lo que de verdad funciona al construir, crecer y vender una startup.",
    ctaQuiz: "Hacer el diagnóstico gratis",
    ctaArticles: "Leer los artículos",
    feat1Title: "Artículos desde la trinchera",
    feat1Text: "Estrategia, inversión, métricas y pivots — contados por quien los vivió, con datos y fuentes.",
    feat2Title: "Diagnóstico de 2 minutos",
    feat2Text: "Responde 10 preguntas y obtén un score de 0–100 de la etapa de tu startup y tus 3 prioridades.",
    feat3Title: "Experiencia real",
    feat3Text: "De la fundación al exit: 300+ startups evaluadas, corporate venture, healthtech y mercados internacionales.",
    latestTitle: "Últimos artículos",
    seeAllArticles: "Ver todos los artículos",
    quizBadge: "Diagnóstico gratis de 2 minutos",
    quizTitle: "¿Qué tan fuerte es la señal de tu startup?",
    quizSubtitle: "Responde 10 preguntas rápidas y obtén al instante un score de la etapa de tu startup — más las 3 cosas en las que deberías enfocarte.",
    startBtn: "Obtener mi score",
    heroHint: "Sin registro · 10 preguntas · 2 minutos",
    backBtn: "← Atrás",
    backHome: "← Salir del quiz",
    resultBadge: "Tu Founder Signal",
    focusTitle: "Tus 3 prioridades principales",
    emailTitle: "¿Quieres subir tu score?",
    emailText: "Deja tu email y recibe recursos prácticos para tu etapa. Sin spam.",
    emailPlaceholder: "tu@startup.com",
    emailBtn: "Enviarme recursos",
    emailDone: "✓ ¡Listo! Pronto recibirás noticias.",
    newsletterLink: "O sigue la newsletter The Founder Signal en LinkedIn →",
    retryBtn: "Rehacer el quiz",
    questionOf: "Pregunta {n} de {total}",
    articlesTitle: "Artículos",
    articlesSubtitle: "Publicados originalmente en la newsletter The Founder Signal. Los artículos están en portugués.",
    pubAll: "Seguir la newsletter en LinkedIn →",
    backToArticles: "← Todos los artículos",
    articleFooter: "Publicado originalmente en la newsletter The Founder Signal:",
    minRead: "min de lectura",
    aboutTagline: "Emprendedor serial · Exit como cofundador y COO de Lincon Health · Socio en Wellbe",
    aboutNewsletter: "Newsletter"
  },
  pt: {
    navHome: "Início",
    navQuiz: "Diagnóstico",
    navArticles: "Artigos",
    navAbout: "Sobre",
    badge: "Estratégias para empreendedores e startups",
    heroTitle: "Estratégia real de startups, sem glamour",
    heroSubtitle: "Sou Jose Gutiérrez — empreendedor serial desde 2007, cofundador com exit (Lincon Health), ex-sócio da ACE Ventures e sócio na Wellbe. Aqui compartilho o que realmente funciona ao construir, crescer e vender uma startup.",
    ctaQuiz: "Fazer o diagnóstico grátis",
    ctaArticles: "Ler os artigos",
    feat1Title: "Artigos de quem viveu",
    feat1Text: "Estratégia, captação, métricas e pivots — contados por quem passou por eles, com dados e fontes.",
    feat2Title: "Diagnóstico de 2 minutos",
    feat2Text: "Responda 10 perguntas e receba um score de 0–100 do estágio da sua startup e suas 3 prioridades.",
    feat3Title: "Experiência real",
    feat3Text: "Da fundação ao exit: 300+ startups avaliadas, corporate venture, healthtech e mercados internacionais.",
    latestTitle: "Últimos artigos",
    seeAllArticles: "Ver todos os artigos",
    quizBadge: "Diagnóstico grátis de 2 minutos",
    quizTitle: "Quão forte é o sinal da sua startup?",
    quizSubtitle: "Responda 10 perguntas rápidas e receba na hora um score do estágio da sua startup — além das 3 coisas em que você deveria focar.",
    startBtn: "Obter meu score",
    heroHint: "Sem cadastro · 10 perguntas · 2 minutos",
    backBtn: "← Voltar",
    backHome: "← Sair do quiz",
    resultBadge: "Seu Founder Signal",
    focusTitle: "Suas 3 principais prioridades",
    emailTitle: "Quer aumentar seu score?",
    emailText: "Deixe seu email e receba recursos práticos para o seu estágio. Sem spam.",
    emailPlaceholder: "voce@startup.com",
    emailBtn: "Quero os recursos",
    emailDone: "✓ Pronto! Em breve você recebe novidades.",
    newsletterLink: "Ou siga a newsletter The Founder Signal no LinkedIn →",
    retryBtn: "Refazer o quiz",
    questionOf: "Pergunta {n} de {total}",
    articlesTitle: "Artigos",
    articlesSubtitle: "Publicados originalmente na newsletter The Founder Signal.",
    pubAll: "Seguir a newsletter no LinkedIn →",
    backToArticles: "← Todos os artigos",
    articleFooter: "Publicado originalmente na newsletter The Founder Signal:",
    minRead: "min de leitura",
    aboutTagline: "Empreendedor serial · Exit como cofundador e COO da Lincon Health · Sócio na Wellbe",
    aboutNewsletter: "Newsletter"
  }
};

// ===== 1.5 Bio (seção Sobre) =====
const ABOUT_BIO = {
  pt: `Empreendedor serial desde 2007, fundei startups como a Haefni Health (Espanha), fui ex-sócio da ACE Ventures (Brasil), cofundador da Lincon Health (Brasil) — do zero até a venda — e sou sócio na Wellbe (Brasil).

Apaixonado por inovação e negócios digitais, ajudei empresas como Randon, BTG Pactual, Eneva, Andrade & Gutierrez, e startups como Logcomex, Feedz e Auvo a inovar e alcançar resultados concretos.

## Trajetória

- **Empreendedorismo e liderança:** realizei o exit (venda) da Lincon como cofundador e COO. Fundador de startups como Haefni Health (Espanha) e Lincon Health (Brasil), ex-sócio da ACE Ventures e atualmente sócio na Wellbe, desenvolvendo soluções para healthtech.
- **Empreendedorismo internacional:** fundador e ex-CEO da Haefni Health, com soluções de tecnologia para saúde e desempenho esportivo para clientes como Real Madrid e o Centro de Excelência FIFA Alfredo Rienzi, com atuação em quatro países.
- **Investimentos e corporate venture:** como Head de Corporate Venture na ACE Startups, liderei investimentos e colaborações com mais de 50 startups, incluindo a criação do programa BootsLab para o BTG Pactual.
- **Healthtech:** atuação com empresas como Dr. Consulta, Amparo Saúde e Panvel para implementar monitoramento remoto de pacientes.
- **Consultoria e mentoria:** mentor e conselheiro de startups como Logcomex, Feedz, Melhor Envio, Arpac e Fix It. Avaliei mais de 300 startups ao longo da carreira.
- **Educação:** coordenador de pós-graduação na ESPM e professor na Tera, com cursos em produtos e métricas digitais.
- **Acadêmico e escritor:** MBA pela ESIC Business & Marketing School, PhD em Ciências da Atividade Física e do Esporte, autor de diversos artigos e detentor de duas patentes.
- **Trajetória esportiva:** nove vezes campeão espanhol de wrestling e ex-membro da seleção nacional — a disciplina do esporte de alto rendimento aplicada aos negócios.

## Por que o The Founder Signal?

O mundo do empreendedorismo é dinâmico e desafiador. Há muito conteúdo disponível, mas nem sempre é fácil encontrar discussões práticas sobre os bastidores das startups — dos primeiros passos ao crescimento e ao exit.

O The Founder Signal existe para falar de estratégia de forma clara e sem glamour, conectando empreendedores a empreendedores. Além de experiências e cases, trago análises fundamentadas em estudos, dados e referências concretas. O objetivo não é alimentar mitos, mas oferecer uma visão estratégica e realista do que funciona — e do que não funciona — na construção de um negócio.

Não tenho todas as respostas, mas trago provocações que podem ajudar a enxergar novos caminhos. O objetivo é compartilhar, debater e crescer junto com quem também está nesse jogo.`,

  es: `Emprendedor serial desde 2007, fundé startups como Haefni Health (España), fui socio de ACE Ventures (Brasil), cofundador de Lincon Health (Brasil) — de cero hasta la venta — y soy socio en Wellbe (Brasil).

Apasionado por la innovación y los negocios digitales, ayudé a empresas como Randon, BTG Pactual, Eneva, Andrade & Gutierrez, y a startups como Logcomex, Feedz y Auvo a innovar y lograr resultados concretos.

## Trayectoria

- **Emprendimiento y liderazgo:** realicé el exit (venta) de Lincon como cofundador y COO. Fundador de startups como Haefni Health (España) y Lincon Health (Brasil), ex-socio de ACE Ventures y actualmente socio en Wellbe, desarrollando soluciones healthtech.
- **Emprendimiento internacional:** fundador y ex-CEO de Haefni Health, con soluciones de tecnología para salud y rendimiento deportivo para clientes como el Real Madrid y el Centro de Excelencia FIFA Alfredo Rienzi, con actuación en cuatro países.
- **Inversiones y corporate venture:** como Head de Corporate Venture en ACE Startups, lideré inversiones y colaboraciones con más de 50 startups, incluida la creación del programa BootsLab para BTG Pactual.
- **Healthtech:** trabajo con empresas como Dr. Consulta, Amparo Saúde y Panvel para implementar monitoreo remoto de pacientes.
- **Consultoría y mentoría:** mentor y consejero de startups como Logcomex, Feedz, Melhor Envio, Arpac y Fix It. Evalué más de 300 startups a lo largo de mi carrera.
- **Educación:** coordinador de posgrado en ESPM y profesor en Tera, con cursos de productos y métricas digitales.
- **Académico y escritor:** MBA por ESIC Business & Marketing School, PhD en Ciencias de la Actividad Física y del Deporte, autor de diversos artículos y titular de dos patentes.
- **Trayectoria deportiva:** nueve veces campeón de España de lucha y ex-miembro de la selección nacional — la disciplina del deporte de alto rendimiento aplicada a los negocios.

## ¿Por qué The Founder Signal?

El mundo del emprendimiento es dinámico y desafiante. Hay mucho contenido disponible, pero no siempre es fácil encontrar discusiones prácticas sobre el detrás de escena de las startups — desde los primeros pasos hasta el crecimiento y el exit.

The Founder Signal existe para hablar de estrategia de forma clara y sin glamour, conectando emprendedores con emprendedores. Además de experiencias y casos, traigo análisis fundamentados en estudios, datos y referencias concretas.

No tengo todas las respuestas, pero traigo provocaciones que pueden ayudar a ver nuevos caminos. El objetivo es compartir, debatir y crecer junto a quienes también están en este juego.`,

  en: `Serial entrepreneur since 2007. I founded startups such as Haefni Health (Spain), was a partner at ACE Ventures (Brazil), co-founded Lincon Health (Brazil) — from zero to the sale — and I'm currently a partner at Wellbe (Brazil).

Passionate about innovation and digital business, I've helped companies like Randon, BTG Pactual, Eneva and Andrade & Gutierrez, and startups like Logcomex, Feedz and Auvo innovate and achieve concrete results.

## Track record

- **Entrepreneurship & leadership:** exit (sale) of Lincon as co-founder and COO. Founder of startups such as Haefni Health (Spain) and Lincon Health (Brazil), former partner at ACE Ventures and currently partner at Wellbe, building healthtech solutions.
- **International entrepreneurship:** founder and former CEO of Haefni Health, building health and sports-performance technology for clients such as Real Madrid and the FIFA Alfredo Rienzi Center of Excellence, operating in four countries.
- **Investments & corporate venture:** as Head of Corporate Venture at ACE Startups, I led investments and collaborations with 50+ startups, including creating the BootsLab program for BTG Pactual.
- **Healthtech:** working with companies like Dr. Consulta, Amparo Saúde and Panvel to implement remote patient monitoring.
- **Consulting & mentoring:** mentor and advisor to startups such as Logcomex, Feedz, Melhor Envio, Arpac and Fix It. I've evaluated 300+ startups throughout my career.
- **Education:** postgraduate coordinator at ESPM and professor at Tera, teaching digital products and metrics.
- **Academic & writer:** MBA from ESIC Business & Marketing School, PhD in Sports Science, author of several papers and holder of two patents.
- **Sports background:** nine-time Spanish national wrestling champion and former national team member — high-performance discipline applied to business.

## Why The Founder Signal?

The startup world is dynamic and challenging. There's plenty of content out there, but practical, behind-the-scenes discussions — from first steps to growth and exit — are rare.

The Founder Signal exists to talk about strategy clearly and without glamour, connecting entrepreneurs to entrepreneurs. Beyond stories and cases, I bring analyses grounded in studies, data and concrete references.

I don't have all the answers, but I bring provocations that can help you see new paths. The goal is to share, debate and grow together with everyone playing this game.`
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


// ===== 4. Estado da app =====
let lang = "pt";
let current = 0;                 // pergunta atual
let points = [];                 // pontos por pergunta
let finalScore = 0;
let finalStage = null;

const $ = (id) => document.getElementById(id);

// ===== 5. Mini-renderizador de markdown (para artigos e bio) =====
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function inline(s) {
  return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
function mdToHtml(md) {
  const lines = md.split("\n");
  let html = "", list = null, para = [];
  const flushPara = () => {
    if (para.length) { html += "<p>" + inline(para.join(" ")) + "</p>"; para = []; }
  };
  const flushList = () => {
    if (list) { html += "<" + list.tag + ">" + list.items.map(i => "<li>" + inline(i) + "</li>").join("") + "</" + list.tag + ">"; list = null; }
  };
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { flushPara(); flushList(); continue; }
    if (line.startsWith("### ")) { flushPara(); flushList(); html += "<h4>" + inline(line.slice(4)) + "</h4>"; continue; }
    if (line.startsWith("## ")) { flushPara(); flushList(); html += "<h3>" + inline(line.slice(3)) + "</h3>"; continue; }
    if (line.startsWith("- ")) {
      flushPara();
      if (!list || list.tag !== "ul") { flushList(); list = { tag: "ul", items: [] }; }
      list.items.push(line.slice(2)); continue;
    }
    const num = line.match(/^\d+\.\s+(.*)/);
    if (num) {
      flushPara();
      if (!list || list.tag !== "ol") { flushList(); list = { tag: "ol", items: [] }; }
      list.items.push(num[1]); continue;
    }
    if (line.startsWith('"') && line.endsWith('"') && line.length > 80) {
      flushPara(); flushList(); html += "<blockquote>" + inline(line) + "</blockquote>"; continue;
    }
    flushList();
    para.push(line);
  }
  flushPara(); flushList();
  return html;
}

// ===== 6. Tradução da interface =====
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (UI[lang][el.dataset.i18n] !== undefined) el.textContent = UI[lang][el.dataset.i18n];
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
  renderArticleLists();
  renderAbout();
  if ($("quiz").classList.contains("active")) renderQuestion();
  if ($("result").classList.contains("active")) renderResult(false);
  if ($("article").classList.contains("active") && currentArticle) openArticle(currentArticle, false);
}

// ===== 7. Navegação entre telas =====
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
  // marca o item do menu correspondente
  const navId = { home: "home", "quiz-intro": "quiz-intro", quiz: "quiz-intro", result: "quiz-intro", articles: "articles", article: "articles", about: "about" }[id];
  document.querySelectorAll(".mainnav button").forEach((b) => {
    b.classList.toggle("active", b.dataset.nav === navId);
  });
  window.scrollTo(0, 0);
}

// Qualquer elemento com data-nav muda de tela
document.querySelectorAll("[data-nav]").forEach((el) => {
  el.addEventListener("click", () => showScreen(el.dataset.nav));
});
$("logo-home").onclick = () => showScreen("home");

// ===== 8. Artigos =====
let currentArticle = null;

function articleButton(a) {
  const btn = document.createElement("button");
  btn.className = "pub-item";
  btn.innerHTML = `<span class="pub-title"></span><span class="pub-date"></span>`;
  btn.querySelector(".pub-title").textContent = a.title;
  btn.querySelector(".pub-date").textContent = a.date.slice(3) + " · " + a.minutes + " " + UI[lang].minRead;
  btn.onclick = () => openArticle(a, true);
  return btn;
}

function renderArticleLists() {
  const home = $("home-articles");
  home.innerHTML = "";
  ARTICLES.slice(0, 3).forEach((a) => home.appendChild(articleButton(a)));

  const all = $("article-list");
  all.innerHTML = "";
  ARTICLES.forEach((a) => all.appendChild(articleButton(a)));
}

function openArticle(a, navigate) {
  currentArticle = a;
  $("article-meta").textContent = a.date + " · " + a.minutes + " " + UI[lang].minRead;
  $("article-title").textContent = a.title;
  $("article-body").innerHTML = mdToHtml(a.body);
  if (navigate) showScreen("article");
}

// ===== 9. Sobre =====
function renderAbout() {
  $("about-body").innerHTML = mdToHtml(ABOUT_BIO[lang]);
}

// ===== 10. Quiz =====
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

  // Na primeira pergunta o botão sai do quiz
  $("back-btn").textContent = current === 0 ? UI[lang].backHome : UI[lang].backBtn;
}

// ===== 11. Resultado =====
function renderResult(recalculate) {
  if (recalculate) {
    const total = points.reduce((sum, p) => sum + p, 0);
    finalScore = Math.round((total / (QUESTIONS.length * 3)) * 100);
    finalStage = STAGES.find((s) => finalScore >= s.min && finalScore <= s.max);
  }
  if (!finalStage) return;

  showScreen("result");

  $("score-value").textContent = finalScore;
  const circumference = 326.7;
  requestAnimationFrame(() => {
    $("ring-fill").style.strokeDashoffset = circumference * (1 - finalScore / 100);
  });

  $("stage-name").textContent = finalStage.name[lang];
  $("stage-desc").textContent = finalStage.desc[lang];

  // Top 3 recomendações = as 3 perguntas com menor pontuação
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

// ===== 12. Captura de email (opcional) =====
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
        stage: finalStage ? finalStage.name.en : "",
        language: lang
      })
    });
  } catch {
    // Se o servidor não responder, não bloqueamos a experiência
  }
  $("email-form").classList.add("hidden");
  $("email-done").classList.remove("hidden");
});

// ===== 13. Eventos do quiz =====
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
  } else {
    showScreen("quiz-intro");
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

// Detecta o idioma do navegador na primeira visita
const browserLang = (navigator.language || "pt").slice(0, 2);
setLanguage(["en", "es", "pt"].includes(browserLang) ? browserLang : "en");
