export type SeoConfig = {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
  type?: "website" | "article";
};

const managedMetaSelectors = [
  'meta[name="description"]',
  'meta[name="robots"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:url"]',
  'meta[property="og:type"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
];

function upsertMeta(selector: string, attributeName: string, attributeValue: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    element.setAttribute("data-seo-managed", "true");
    document.head.appendChild(element);
  }

  element.content = content;
}

export function applySeoTags(config: SeoConfig) {
  const canonicalUrl = `https://schulzdigital.com.br${config.canonicalPath}`;

  document.title = config.title;

  upsertMeta('meta[name="description"]', "name", "description", config.description);
  upsertMeta('meta[name="robots"]', "name", "robots", config.robots ?? "index, follow");
  upsertMeta('meta[property="og:title"]', "property", "og:title", config.title);
  upsertMeta('meta[property="og:description"]', "property", "og:description", config.description);
  upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
  upsertMeta('meta[property="og:type"]', "property", "og:type", config.type ?? "website");
  upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", config.title);
  upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", config.description);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.setAttribute("data-seo-managed", "true");
    document.head.appendChild(canonical);
  }

  canonical.href = canonicalUrl;
}

export function cleanupSeoTags() {
  for (const selector of managedMetaSelectors) {
    const element = document.head.querySelector(selector);
    if (element?.getAttribute("data-seo-managed") === "true") {
      element.remove();
    }
  }

  const canonical = document.head.querySelector('link[rel="canonical"]');
  if (canonical?.getAttribute("data-seo-managed") === "true") {
    canonical.remove();
  }
}
