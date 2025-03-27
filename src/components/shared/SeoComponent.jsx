import { PAGES, RUTAS } from '@/constants/rutas';
import SeoSchemaOrg from './SeoSchemaOrg';
import Head from 'next/head';

const descriptions = {
    [PAGES.INICIO]:
        'Dalidev Solutions es una empresa de desarrollo de software que ofrece soluciones personalizadas para empresas de cualquier sector.',
    [PAGES.QUIENES_SOMOS]:
        'Dalidev Solutions es una empresa de desarrollo de software que ofrece soluciones personalizadas para empresas de cualquier sector.',
    [PAGES.SERVICIOS]:
        'Dalidev Solutions es una empresa de desarrollo de software que ofrece soluciones personalizadas para empresas de cualquier sector.',
    [PAGES.BLOG]:
        'Dalidev Solutions es una empresa de desarrollo de software que ofrece soluciones personalizadas para empresas de cualquier sector.',
    [PAGES.CONTACTO]:
        'Dalidev Solutions es una empresa de desarrollo de software que ofrece soluciones personalizadas para empresas de cualquier sector.',
    [PAGES.POLITICAS_DE_PRIVACIDAD]:
        'Dalidev Solutions es una empresa de desarrollo de software que ofrece soluciones personalizadas para empresas de cualquier sector.',
    [PAGES.TERMINOS_Y_CONDICIONES]:
        'Dalidev Solutions es una empresa de desarrollo de software que ofrece soluciones personalizadas para empresas de cualquier sector.',
};

const titles = {
    [PAGES.INICIO]: 'Dalidev Solutions, agencia de desarrollo de software',
    [PAGES.QUIENES_SOMOS]: '¿Quiénes somos? Descubre quiénes somos y qué hacemos',
    [PAGES.SERVICIOS]: 'Nuestros servicios. Desarrollo web, automatización y estrategia digital',
    [PAGES.BLOG]: 'Blog de Dalidev Solutions. Noticias, tips y novedades del mundo digital.',
    [PAGES.CONTACTO]: 'Contacto. Ponte en contacto con nosotros para cualquier consulta o solicitud.',
    [PAGES.POLITICAS_DE_PRIVACIDAD]: 'Política de privacidad. Descubre cómo protegemos tus datos personales.',
    [PAGES.TERMINOS_Y_CONDICIONES]: 'Términos y condiciones. Descubre cómo funcionamos y qué esperamos de ti.',
};

const urls = {
    [PAGES.INICIO]: RUTAS.INICIO,
    [PAGES.QUIENES_SOMOS]: RUTAS.QUIENES_SOMOS,
    [PAGES.SERVICIOS]: RUTAS.SERVICIOS,
    [PAGES.BLOG]: RUTAS.BLOG,
    [PAGES.CONTACTO]: RUTAS.CONTACTO,
    [PAGES.POLITICAS_DE_PRIVACIDAD]: RUTAS.POLITICAS_DE_PRIVACIDAD,
    [PAGES.TERMINOS_Y_CONDICIONES]: RUTAS.TERMINOS_Y_CONDICIONES,
};

const images = {
    [PAGES.INICIO]: `${process.env.NEXT_PUBLIC_IMAGES}/dalidev-solutions/banner_image_1.png`,
    [PAGES.QUIENES_SOMOS]: `${process.env.NEXT_PUBLIC_IMAGES}/dalidev-solutions/banner_image_1.png`,
    [PAGES.SERVICIOS]: `${process.env.NEXT_PUBLIC_IMAGES}/dalidev-solutions/banner_image_1.png`,
    [PAGES.BLOG]: `${process.env.NEXT_PUBLIC_IMAGES}/dalidev-solutions/banner_image_1.png`,
    [PAGES.CONTACTO]: `${process.env.NEXT_PUBLIC_IMAGES}/dalidev-solutions/banner_image_1.png`,
    [PAGES.POLITICAS_DE_PRIVACIDAD]: `${process.env.NEXT_PUBLIC_IMAGES}/dalidev-solutions/banner_image_1.png`,
    [PAGES.TERMINOS_Y_CONDICIONES]: `${process.env.NEXT_PUBLIC_IMAGES}/dalidev-solutions/banner_image_1.png`,
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
