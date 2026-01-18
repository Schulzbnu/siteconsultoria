import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredPost = {
  title: "Como preparar sua empresa para crescer com dados e estratégia digital",
  description:
    "Um passo a passo prático para transformar métricas em decisões, organizar prioridades e acelerar resultados.",
  date: "12 de Março, 2024",
  readTime: "8 min de leitura",
  category: "Estratégia",
};

const posts = [
  {
    title: "Diagnóstico digital: o primeiro passo antes de investir em marketing",
    description:
      "Entenda quais pontos analisar para evitar desperdício de mídia e alinhar canais ao seu objetivo de negócio.",
    date: "05 de Março, 2024",
    readTime: "6 min de leitura",
    category: "Diagnóstico",
  },
  {
    title: "KPIs essenciais para lideranças que precisam de previsibilidade",
    description:
      "Saiba quais indicadores acompanhar para manter sua operação saudável e suas metas sob controle.",
    date: "27 de Fevereiro, 2024",
    readTime: "5 min de leitura",
    category: "Métricas",
  },
  {
    title: "Como alinhar times de marketing e vendas para gerar receita",
    description:
      "Um framework simples para unir estratégia, processos e tecnologia na jornada do cliente.",
    date: "18 de Fevereiro, 2024",
    readTime: "7 min de leitura",
    category: "Crescimento",
  },
  {
    title: "Roadmap de 90 dias: planejamento para empresas em expansão",
    description:
      "Estruture prioridades e ações em 3 meses para avançar com foco e governança.",
    date: "10 de Fevereiro, 2024",
    readTime: "6 min de leitura",
    category: "Planejamento",
  },
];

const categories = [
  "Estratégia",
  "Diagnóstico",
  "Métricas",
  "Crescimento",
  "Tecnologia",
  "Processos",
];

function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-white/90 backdrop-blur-xl">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-3" data-testid="blog-logo-link">
            <img
              src="/logo.png"
              alt="Logomarca da Schulz Estratégia Digital"
              className="w-24 lg:w-28 h-auto object-contain"
            />
          </a>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">
              Início
            </a>
            <a href="/#servicos" className="hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="/#sobre" className="hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="/#contato" className="hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
          <Button className="rounded-full px-6" data-testid="blog-cta">
            Agendar conversa
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </nav>
      </div>
    </header>
  );
}

function FeaturedPost() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Destaque da semana
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              {featuredPost.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {featuredPost.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {featuredPost.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {featuredPost.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {featuredPost.category}
              </span>
            </div>
            <Button size="lg" className="rounded-full px-8" data-testid="blog-featured-cta">
              Ler artigo completo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="rounded-3xl border border-border bg-muted/40 p-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Por que ter um blog se o site é uma landing page?
            </h2>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                • Atrai tráfego orgânico para temas que a landing page não cobre em profundidade.
              </li>
              <li>
                • Mostra expertise e autoridade, preparando o visitante para o contato comercial.
              </li>
              <li>
                • Ajuda a ranquear para palavras-chave complementares, sem competir com a landing.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogList() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Conteúdos recentes
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-4">
              Insights para líderes que buscam crescimento sustentável
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                <Tag className="w-3 h-3" />
                {post.category}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {post.description}
              </p>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCTA() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <div className="rounded-3xl border border-primary/20 bg-primary/10 p-10 lg:p-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Transforme aprendizado em ação
              </h2>
              <p className="mt-3 text-sm lg:text-base text-muted-foreground">
                Marque uma conversa e receba um diagnóstico inicial para identificar as próximas prioridades.
              </p>
            </div>
            <Button size="lg" className="rounded-full px-8" data-testid="blog-cta-bottom">
              Solicitar diagnóstico
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2026 Schulz Estratégia Digital. Todos os direitos reservados.</span>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-foreground transition-colors">
              Voltar para a landing page
            </a>
            <a href="/#contato" className="hover:text-foreground transition-colors">
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <FeaturedPost />
        <BlogList />
        <BlogCTA />
      </main>
      <BlogFooter />
    </div>
  );
}
