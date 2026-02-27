import { useMemo } from "react";
import { useLocation, Link } from "wouter";
import { Footer, Header } from "@/pages/home";
import { articlesSorted } from "@/pages/artigos-data";

export default function ArtigoPage() {
  const [location] = useLocation();

  const article = useMemo(() => {
    const slug = location.replace("/blog/", "").replace("/artigos/", "").split("/")[0];
    return articlesSorted.find((item) => item.slug === slug);
  }, [location]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header linkPrefix="/" />
        <main className="py-24 lg:py-32">
          <div className="max-w-[900px] mx-auto px-5 lg:px-6">
            <h1 className="text-3xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
            <p className="text-muted-foreground mb-6">
              O conteúdo solicitado não existe ou foi movido.
            </p>
            <Link href="/blog" className="text-primary font-medium hover:underline underline-offset-4">
              Voltar para artigos
            </Link>
          </div>
        </main>
        <Footer linkPrefix="/" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header linkPrefix="/" />
      <main className="py-24 lg:py-32">
        <article className="max-w-[900px] mx-auto px-5 lg:px-6">
          <p className="text-sm text-muted-foreground mb-3">
            Publicado em {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            {article.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{article.excerpt}</p>
          <div className="space-y-5 text-foreground/90 leading-relaxed">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/blog" className="text-primary font-medium hover:underline underline-offset-4">
              ← Ver os últimos artigos
            </Link>
          </div>
        </article>
      </main>
      <Footer linkPrefix="/" />
    </div>
  );
}
