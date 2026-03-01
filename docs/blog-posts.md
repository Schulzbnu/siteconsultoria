# Padrão de conteúdo para posts do blog

Este documento registra o formato padrão usado nos artigos em `client/src/pages/artigos/artigo.tsx`.

## CTA final (obrigatório)

Para manter consistência entre posts, o bloco final de CTA deve seguir exatamente este formato:

```tsx
<footer className="pt-4 border-t border-border/60">
  <p>Quer descobrir exatamente onde está o gargalo que está limitando seu crescimento?</p>
  <p>
    <strong>📲 Fale conosco no WhatsApp e solicite o seu Diagnóstico 360.</strong>
  </p>
</footer>
```

## Regras rápidas para novos posts

1. Manter o CTA final com dois parágrafos (`<p>`) como acima (sem trocar o primeiro por `<h3>`).
2. Garantir que o post tenha `slug`, `title`, `excerpt`, `publishedAt` e `readingTime` em `client/src/pages/artigos/index.ts`.
3. Incluir o conteúdo do artigo em `articleContentBySlug` no arquivo `client/src/pages/artigos/artigo.tsx`.
4. Atualizar `client/public/sitemap.xml` com a nova URL do artigo.
