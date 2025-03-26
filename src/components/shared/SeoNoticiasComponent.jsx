import { IMAGES } from '@/constants/images';
import Head from 'next/head';

const authorName = process.env.NEXT_PUBLIC_NAME;
const twitter = process.env.NEXT_PUBLIC_TWITTER;

const SeoNoticiasComponent = ({ title, description, keywords, url, image, author, publishedAt }) => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: title,
        description: description,
        datePublished: publishedAt,
        dateModified: publishedAt,
        author: {
            '@type': 'Person',
            name: author?.name ?? authorName,
            url: author?.socialNetworks?.find((sn) => sn.name === 'Twitter')?.url ?? '',
            image: author?.image ?? '',
            description: author?.bio ?? '',
        },
        publisher: {
            '@type': 'Organization',
            name: authorName,
            logo: {
                '@type': 'ImageObject',
                url: IMAGES.LOGO,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
        image: [image],
    };

    return (
        <Head>
            <title>{title}</title>
            <link rel="canonical" href={url} />
            <meta name="description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="article" />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author?.name ?? authorName} />
            <meta name="date" content={publishedAt ?? new Date()} />
            <meta name="article:section" content="Fútbol" />
            <meta
                name="article:tag"
                content="Fantasy, Fútbol, Noticias, Estadísticas, LaLiga, Alineaciones"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content={author?.twitter ?? twitter} />
            <meta name="twitter:creator" content={author?.twitter ?? twitter} />
            <meta name="twitter:author" content={author?.name ?? author} />

            <meta
                name="robots"
                content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />

            {/* JSON-LD para Datos Estructurados */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </Head>
    );
};

export default SeoNoticiasComponent;
