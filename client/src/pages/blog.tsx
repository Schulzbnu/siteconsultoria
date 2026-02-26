const posts = [
  {
    slug: "diagnostico-digital-2026",
    title: "Como fazer um diagnóstico digital eficiente em 2026",
    excerpt:
      "Um passo a passo prático para mapear presença digital, tecnologia e gargalos operacionais antes de investir em novas ações.",
  },
  {
    slug: "kpis-consultoria-estrategica",
    title: "5 KPIs para medir o sucesso da estratégia digital",
    excerpt:
      "Descubra quais indicadores acompanhar para tomar decisões com mais segurança e alinhar marketing, vendas e operação.",
  },
  {
    slug: "processos-escalaveis",
    title: "Processos escaláveis: onde começar na sua empresa",
    excerpt:
      "Estruture rotinas e responsabilidades para reduzir retrabalho e aumentar a eficiência do time sem perder qualidade.",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-background py-16 lg:py-24">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
        <header className="max-w-3xl mb-12 lg:mb-16">
          <h1
            className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5"
            data-testid="blog-title"
          >
            Blog da Schulz Estratégia Digital
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Conteúdos sobre estratégia digital, processos e crescimento para ajudar
            sua empresa a evoluir com decisões orientadas por dados.
          </p>
        </header>

        <section aria-label="Lista de artigos" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
              data-testid={`blog-post-card-${index + 1}`}
            >
              <h2 className="text-xl font-semibold text-card-foreground mb-3">{post.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
              <a
                href={`/blog/${post.slug}`}
                className="text-primary font-medium hover:underline underline-offset-4"
              >
                Ler artigo completo
              </a>
            </article>
          ))}
        </section>

        <section className="mt-14 lg:mt-18 rounded-2xl border border-border/60 bg-muted/30 p-6 lg:p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">Próximos passos</h2>
          <p className="text-muted-foreground mb-5">
            Quer sair do conteúdo para a prática? Conheça os nossos serviços ou
            entre em contato para conversar sobre o cenário da sua empresa.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/#servicos"
              className="text-primary font-medium hover:underline underline-offset-4"
            >
              Ver serviços
            </a>
            <a
              href="/#contato"
              className="text-primary font-medium hover:underline underline-offset-4"
            >
              Falar com a consultoria
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
