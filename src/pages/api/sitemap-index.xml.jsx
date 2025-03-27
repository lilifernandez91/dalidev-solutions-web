// pages/api/sitemap-index.js

export default function handler(req, res) {
    const LASTMOD = '2025-02-21T15:00:00Z';

    // 🔗 Sitemaps estáticos
    const staticSitemaps = [
        { lastMod: LASTMOD, loc: '/api/sitemap/pages.xml' }, // todas las paginas de la web
        { lastMod: LASTMOD, loc: '/api/sitemap/noticias.xml' }, // todas las paginas de la web
    ];

    // 🛠️ Generar el XML del Sitemap Index
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticSitemaps
            .map(
                (sitemap) => `
    <sitemap>
        <loc>https://dalidevsolutions.com${sitemap.loc}</loc>
        <lastmod>${sitemap.lastMod}</lastmod>
    </sitemap>`
            )
            .join('')}
</sitemapindex>`;

    // 📤 Enviar respuesta
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemapXml);
}
