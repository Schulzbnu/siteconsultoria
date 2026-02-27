export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
};

export const blogPosts: BlogPost[] = [
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
