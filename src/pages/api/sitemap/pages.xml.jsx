// pages/api/sitemap-pages.js

import { RUTAS } from '@/constants/rutas';
import { CHANGE_FREQUENCY } from '@/enums/change-freq-enum';

export default function handler(req, res) {
    // 📅 Definir fechas
    const LASTMOD_TODAY = '2025-01-04T15:00:00Z';

    // 📄 Para cambiar un lastmod, cambiar directamente en la url cambiada
    const staticPages = [
        { changeFreq: CHANGE_FREQUENCY.DAILY, loc: '/', priority: '1.00', lastmod: LASTMOD_TODAY },
        {
            changeFreq: CHANGE_FREQUENCY.WEEKLY,
            loc: RUTAS.PALMARES_FUTBOL,
            priority: '0.20',
            lastmod: LASTMOD_TODAY,
        },
    ];

    // 📝 Generar el XML
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${staticPages
            .map(
                (page) => `
        <url>
            <loc>https://defensamadridista.com${page.loc}</loc>
            <lastmod>${page.lastmod}</lastmod>
            <changefreq>${page.changeFreq}</changefreq>
            <priority>${page.priority}</priority>
        </url>`
            )
            .join('')}
    </urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemapXml);
}
