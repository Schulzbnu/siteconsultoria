import { writeFile } from "fs/promises";
import { blogPosts } from "../client/src/pages/artigos/index";

const SITE_URL = "https://schulzdigital.com.br";
const OUTPUT_PATH = "client/public/sitemap.xml";

type SitemapEntry = {
  loc: string;
  changefreq: "weekly" | "monthly";
  priority: string;
  lastmod?: string;
};

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function getMostRecentPostDate() {
  return blogPosts
    .map((post) => post.lastModified)
    .sort((a, b) => b.localeCompare(a))[0];
}

function toUrlXml(entry: SitemapEntry) {
  const lines = [
    "  <url>",
    `    <loc>${escapeXml(entry.loc)}</loc>`,
    entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : null,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    "  </url>",
  ].filter(Boolean);

  return lines.join("\n");
}

export async function generateSitemap() {
  const latestPostDate = getMostRecentPostDate();

  const entries: SitemapEntry[] = [
    {
      loc: SITE_URL,
      changefreq: "weekly",
      priority: "1.0",
      lastmod: latestPostDate,
    },
    {
      loc: `${SITE_URL}/blog`,
      changefreq: "weekly",
      priority: "0.8",
      lastmod: latestPostDate,
    },
    ...blogPosts.map((post) => ({
      loc: `${SITE_URL}/blog/${post.slug}`,
      changefreq: "monthly" as const,
      priority: "0.6",
      lastmod: post.lastModified,
    })),
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(toUrlXml),
    "</urlset>",
    "",
  ].join("\n");

  await writeFile(OUTPUT_PATH, xml, "utf-8");
  console.log(`sitemap generated at ${OUTPUT_PATH}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
