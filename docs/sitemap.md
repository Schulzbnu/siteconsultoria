# Processo de atualização do sitemap

Este documento define como manter o `client/public/sitemap.xml` atualizado para páginas de blog e demais URLs indexáveis.

## Geração automática (fonte única)

O sitemap agora é gerado automaticamente pelo script `script/generate-sitemap.ts`, usando como fonte única o array `blogPosts` em `client/src/pages/artigos/index.ts`.

- Base canônica: `https://schulzdigital.com.br`
- Entradas fixas:
  - Home: `https://schulzdigital.com.br`
  - Listagem do blog: `https://schulzdigital.com.br/blog`
- Entradas dinâmicas:
  - Uma URL por artigo (`/blog/:slug`)
  - `lastmod` baseado em `lastModified` de cada post

## Fluxo de build/deploy

O script de build (`script/build.ts`) executa a geração do sitemap antes do build do client, evitando divergência entre conteúdo publicado e `sitemap.xml`.

## Comandos úteis

```bash
npm run sitemap:generate
npm run build
```

## Checklist de novos posts

1. Adicionar/atualizar metadados do post em `client/src/pages/artigos/index.ts`.
2. Preencher `lastModified` no formato `YYYY-MM-DD`.
3. Rodar `npm run sitemap:generate` (ou apenas `npm run build`).
4. Confirmar que o novo artigo entrou em `client/public/sitemap.xml` com `lastmod`.

## Checklist complementar de indexação (SPA)

Além do sitemap, manter estas configurações para facilitar a indexação de páginas do blog:

1. Garantir `<meta name="robots" content="index, follow">` no HTML base (`client/index.html`).
2. Garantir `<link rel="canonical">` para cada rota canônica (home, listagem do blog e posts).
3. Definir metadados dinâmicos de título e descrição por página no cliente (`client/src/lib/seo.ts`).
4. Em cada artigo, usar URL única e estável com `slug` sem alterações após publicação.
5. Após deploy de novos posts, solicitar reindexação no Google Search Console.
