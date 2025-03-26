import { PAGES, RUTAS } from '@/constants/rutas';
import SeoSchemaOrg from './SeoSchemaOrg';
import Head from 'next/head';

const descriptions = {
    [PAGES.INICIO]:
        '⚪ ¡Bienvenido a Defensa Madridista! Noticias exclusivas, análisis y la verdad sobre el Real Madrid. Vive la pasión blanca como nunca antes. ¡Hala Madrid!',
    [PAGES.PALMARES_FUTBOL]:
        '🏆 Conoce todos los títulos y trofeos ganados por el Real Madrid. Un palmarés histórico, lleno de gloria y grandeza. ¡La leyenda continúa!',
    [PAGES.TERMINOS_Y_CONDICIONES]:
        'Lee nuestros términos y condiciones de Defensa Madridista. Transparencia y protección para todos los madridistas que visitan nuestro sitio.',
    [PAGES.POLITICAS_DE_PRIVACIDAD]:
        'Descubre cómo protegemos tus datos en Defensa Madridista. Tu privacidad es nuestra prioridad mientras disfrutas de las últimas noticias del Real Madrid.',
    [PAGES.CONTACTO]:
        '📞 Contacta con Defensa Madridista para consultas, colaboraciones o sugerencias. Estamos aquí para compartir la pasión por el Real Madrid.',
    [PAGES.NOTICIAS]:
        '⚽ Las últimas noticias del Real Madrid. Fichajes, rumores y análisis desde un enfoque madridista. ¡No te pierdas nada de tu equipo!',
    [PAGES.OPINION]:
        '💬 Opiniones madridistas sin filtros. Análisis, debates y la verdad sobre el Real Madrid contada por y para madridistas.',
    [PAGES.ANALISIS]:
        '🔍 Análisis tácticos y estadísticas del Real Madrid. Desglosamos cada partido, jugador y movimiento con la mirada blanca que buscas.',
    [PAGES.FICHAJES]:
        '🔥 Fichajes del Real Madrid: Rumores, negociaciones y anuncios oficiales. Descubre quién puede ser el próximo galáctico.',
    [PAGES.HISTORIA]:
        '🏅 La historia del Real Madrid: Desde sus orígenes hasta la actualidad. Conoce la grandeza y las leyendas que forjaron al club más grande.',
};

const titles = {
    [PAGES.INICIO]: 'Defensa Madridista ⚪ Noticias y Opinión del Real Madrid',
    [PAGES.PALMARES_FUTBOL]: 'Palmáres del Real Madrid | Trofeos y Títulos Blancos 🏆',
    [PAGES.TERMINOS_Y_CONDICIONES]: 'Términos y Condiciones | Defensa Madridista',
    [PAGES.POLITICAS_DE_PRIVACIDAD]: 'Política de Privacidad | Defensa Madridista',
    [PAGES.CONTACTO]: 'Contacto | Defensa Madridista',
    [PAGES.NOTICIAS]: 'Noticias del Real Madrid ⚽ | Defensa Madridista',
    [PAGES.OPINION]: 'Opinión Madridista | Defensa Madridista 💬',
    [PAGES.ANALISIS]: 'Análisis y Estadísticas del Real Madrid 🔍',
    [PAGES.FICHAJES]: 'Fichajes del Real Madrid 🔥 | Rumores y Confirmaciones',
    [PAGES.HISTORIA]: 'Historia del Real Madrid | Leyendas Blancas 🏅',
};

const urls = {
    [PAGES.INICIO]: '',
    [PAGES.PALMARES_FUTBOL]: RUTAS.PALMARES_FUTBOL,
    [PAGES.TERMINOS_Y_CONDICIONES]: RUTAS.TERMINOS_Y_CONDICIONES,
    [PAGES.POLITICAS_DE_PRIVACIDAD]: RUTAS.POLITICAS_DE_PRIVACIDAD,
    [PAGES.CONTACTO]: RUTAS.CONTACTO,
    [PAGES.NOTICIAS]: RUTAS.NOTICIAS,
    [PAGES.OPINION]: RUTAS.OPINION,
    [PAGES.ANALISIS]: RUTAS.ANALISIS,
    [PAGES.FICHAJES]: RUTAS.FICHAJES,
    [PAGES.HISTORIA]: RUTAS.HISTORIA,
};

const images = {
    [PAGES.INICIO]: '/images/logo-defensa-madridista.png',
    [PAGES.NOTICIAS]: '/images/noticias-real-madrid.jpg',
    [PAGES.FICHAJES]: '/images/fichajes-real-madrid.jpg',
};

const siteData = {
    url: process.env.NEXT_PUBLIC_URL_FRONT,
    name: process.env.NEXT_PUBLIC_NAME,
    twitter: process.env.NEXT_PUBLIC_TWITTER,
};

function SeoComponent({
    pageId,
    description,
    title,
    url,
    image,
    additionalData,
    summary = 'summary_large_image',
}) {
    url = url ?? `${process.env.NEXT_PUBLIC_URL_FRONT}/${urls[pageId]}`;
    title = title ?? titles[pageId];
    description = description ?? descriptions[pageId];
    image = image ?? images[pageId] ?? `${siteData.url}/imagen`;

    const seoSchema = SeoSchemaOrg(pageId, title, url, description, image, additionalData);

    return (
        <Head>
            <title>{title}</title>
            <link rel="canonical" href={url} key="canonical" />

            <meta name="theme-color" content="#ffffff" />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:type" content="futbol" key="type" />
            <meta property="og:site_name" content={siteData.name} />
            <meta name="description" content={description} key="name-description" />
            <meta property="og:url" content={url} key="url" />
            <meta property="og:title" content={title} key="title" />
            <meta property="og:description" content={description} key="description" />
            <meta property="og:image:secure_url" content={image} key="image" />

            <meta name="twitter:card" content={summary} key="twitter-card" />
            <meta name="twitter:image:alt" content={siteData.name} key="twitter-card-image-alt" />
            <meta name="twitter:site" content={siteData.url} key="website" />
            <meta name="twitter:site:id" content={siteData.twitter} key="website-twitter" />
            <meta name="twitter:creator" content={siteData.twitter} key="twitter-creator" />
            <meta name="twitter:image" content={image} key="twitter-image" />
            <meta name="twitter:title" content={title} key="twitter-title" />
            <meta name="twitter:description" content={description} key="twitter-description" />

            <meta property="og:image:width" content="770" />
            <meta property="og:image:height" content="440" />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=yes"
                key="viewport"
            />

            <meta
                name="robots"
                content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />

            {seoSchema}
        </Head>
    );
}

export default SeoComponent;
