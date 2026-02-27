export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "ia-na-consultoria-estrategica",
    title: "IA na consultoria estratégica: onde gera valor primeiro",
    excerpt:
      "Entenda quais frentes priorizar para aplicar inteligência artificial com foco em resultado e governança.",
    publishedAt: "2026-02-18",
    content: [
      "A adoção de IA na consultoria deve começar por problemas de alta repetição e impacto direto em eficiência operacional.",
      "Antes de automatizar, mapeie dados, processos e critérios de decisão para reduzir riscos e melhorar qualidade.",
      "Com pilotos bem definidos e métricas claras, a empresa escala iniciativas de IA com mais previsibilidade.",
    ],
  },
  {
    slug: "planejamento-digital-trimestral",
    title: "Planejamento digital trimestral: modelo prático para PMEs",
    excerpt:
      "Um modelo simples para organizar prioridades e executar ações digitais sem dispersão no trimestre.",
    publishedAt: "2026-02-10",
    content: [
      "O planejamento trimestral ajuda pequenas e médias empresas a equilibrar metas de curto prazo e construção de ativos de longo prazo.",
      "Defina objetivos mensuráveis, responsáveis por frente e rituais de acompanhamento semanal.",
      "Com uma revisão mensal de desempenho, ajustes táticos ficam mais rápidos e baseados em dados reais.",
    ],
  },
  {
    slug: "funil-comercial-b2b",
    title: "Como estruturar um funil comercial B2B mais previsível",
    excerpt:
      "Veja como alinhar marketing e vendas para gerar oportunidades qualificadas e aumentar conversão.",
    publishedAt: "2026-01-30",
    content: [
      "A previsibilidade comercial depende de etapas claras, critérios objetivos e governança das oportunidades.",
      "Marketing e vendas precisam compartilhar metas de qualidade de lead, não apenas volume.",
      "Acompanhar taxa de avanço entre etapas permite corrigir gargalos antes que prejudiquem o resultado do trimestre.",
    ],
  },
  {
    slug: "diagnostico-digital-2026",
    title: "Como fazer um diagnóstico digital eficiente em 2026",
    excerpt:
      "Um passo a passo prático para mapear presença digital, tecnologia e gargalos operacionais antes de investir.",
    publishedAt: "2026-01-20",
    content: [
      "Um diagnóstico digital eficiente começa pelo entendimento de objetivos de negócio e maturidade atual.",
      "A leitura integrada de canais, processos e tecnologia evita decisões isoladas e reduz retrabalho.",
      "Ao final, priorize ações por impacto, esforço e urgência para guiar um plano executável.",
    ],
  },
  {
    slug: "kpis-consultoria-estrategica",
    title: "5 KPIs para medir o sucesso da estratégia digital",
    excerpt:
      "Descubra quais indicadores acompanhar para tomar decisões com segurança e alinhar marketing, vendas e operação.",
    publishedAt: "2026-01-12",
    content: [
      "Indicadores úteis conectam esforço operacional ao resultado de negócio, e não apenas métricas de vaidade.",
      "Entre os KPIs essenciais estão CAC, taxa de conversão por etapa, receita recorrente e tempo de ciclo comercial.",
      "Com painéis atualizados e rituais de análise, a empresa ajusta rota com agilidade.",
    ],
  },
  {
    slug: "processos-escalaveis",
    title: "Processos escaláveis: onde começar na sua empresa",
    excerpt:
      "Estruture rotinas e responsabilidades para reduzir retrabalho e aumentar eficiência sem perder qualidade.",
    publishedAt: "2026-01-05",
    content: [
      "Escalar processos não é burocratizar, é criar padrões mínimos para manter qualidade conforme o time cresce.",
      "Mapeie atividades críticas, defina responsáveis e crie indicadores simples de eficiência.",
      "A melhoria contínua depende de revisões periódicas, aprendizado e documentação acessível.",
    ],
  },
  {
    slug: "roadmap-transformacao-digital",
    title: "Roadmap de transformação digital em 90 dias",
    excerpt:
      "Como construir um roteiro inicial de transformação com entregas rápidas e visão estratégica.",
    publishedAt: "2025-12-22",
    content: [
      "Um roadmap de 90 dias deve combinar quick wins e iniciativas estruturantes para manter tração.",
      "Distribua entregas em ondas: diagnóstico, implementação e consolidação.",
      "Com uma cadência de governança, a transformação digital ganha ritmo e clareza.",
    ],
  },
];

export const articlesSorted = [...articles].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export const latestArticles = articlesSorted.slice(0, 6);
