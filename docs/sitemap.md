# Processo de atualização do sitemap

Este documento define como manter o `client/public/sitemap.xml` atualizado para páginas de blog e demais URLs indexáveis.

## Entradas atuais

- Home: `https://schulzdigital.com.br/`
- Listagem do blog: `https://schulzdigital.com.br/blog`

## Padrão para posts individuais

Quando houver páginas de artigo, adicionar uma entrada `<url>` por post seguindo o padrão:

```xml
<url>
  <loc>https://schulzdigital.com.br/blog/slug-do-artigo</loc>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

> Ajuste `changefreq` e `priority` conforme relevância e frequência real de atualização do conteúdo.

## Checklist de atualização

1. Abrir `client/public/sitemap.xml`.
2. Garantir que cada página canônica tenha um único bloco `<url>`.
3. Incluir novas URLs no formato completo (`https://...`).
4. Definir `changefreq` e `priority` coerentes por tipo de página.
5. Validar o XML para garantir:
   - Estrutura única de `<urlset>`;
   - Presença de `<loc>` em todos os blocos `<url>`;
   - Ausência de URLs duplicadas.
6. Publicar a alteração junto com o deploy.
