import { Footer, Header } from "@/pages/home";
import { latestArticles } from "@/pages/artigos-data";

export default function ArtigosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header linkPrefix="/" />
      <main className="py-24 lg:py-32">
        <div className="max-w-[1120px] mx-auto px-5 lg:px-6">
          <header className="max-w-3xl mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5">
              Artigos da Schulz Estratégia Digital
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A página principal mostra sempre os 6 artigos mais recentes.
            </p>
          </header>

          <section aria-label="Últimos artigos" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {latestArticles.map((article) => (
              <article
                key={article.slug}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <p className="text-sm text-muted-foreground mb-2">
                  {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
                </p>
                <h2 className="text-xl font-semibold text-card-foreground mb-3">{article.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{article.excerpt}</p>
                <a
                  href={`/blog/${article.slug}`}
                  className="text-primary font-medium hover:underline underline-offset-4"
                >
                  Ler artigo completo
                </a>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer linkPrefix="/" />
    </div>
  );
}
