// Google Analytics 4 - Configuração para Schulz Estratégia Digital
// Measurement ID: V8VVXLFLXG

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('js', new Date());
gtag('config', 'V8VVXLFLXG');

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