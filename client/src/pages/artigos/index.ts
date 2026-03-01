export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "reestruturacao-amazon-transformacao-digital-estrategica",
    title: "O que a reestruturação da Amazon nos ensina sobre transformação digital estratégica",
    excerpt:
      "A reestruturação da Amazon mostra por que transformação digital real começa com simplificação organizacional, não apenas com novas ferramentas.",
    publishedAt: "1 de março de 2026",
    readingTime: "7 min",
  },
  {
    slug: "diagnostico-360-guia-completo",
    title: "Diagnóstico 360: O Guia Completo para Transformar sua Presença Digital",
    excerpt:
      "Descubra o que é o Diagnóstico 360, por que ele é essencial para sua empresa e como ele pode ajudar a identificar gaps e oportunidades de melhoria.",
    publishedAt: "26 de fevereiro de 2026",
    readingTime: "8 min",
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
