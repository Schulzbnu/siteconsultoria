// Google Analytics 4 - Configuração para Schulz Estratégia Digital
// Substitua 'G-XXXXXXXXXX' pelo seu Measurement ID do GA4

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');

// Rastreamento de conversões
function trackContactFormSubmit() {
  gtag('event', 'generate_lead', {
    'event_category': 'engagement',
    'event_label': 'contact_form'
  });
}

function trackWhatsAppClick() {
  gtag('event', 'contact', {
    'event_category': 'engagement',
    'event_label': 'whatsapp'
  });
}

function trackBlogPostView(postTitle) {
  gtag('event', 'page_view', {
    'event_category': 'engagement',
    'event_label': postTitle,
    'content_type': 'blog_post'
  });
}

// Exportar funções para uso global
window.trackContactFormSubmit = trackContactFormSubmit;
window.trackWhatsAppClick = trackWhatsAppClick;
window.trackBlogPostView = trackBlogPostView;