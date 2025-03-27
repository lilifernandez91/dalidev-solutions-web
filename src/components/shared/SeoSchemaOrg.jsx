import React from 'react';

import { PAGES } from '@/constants/rutas';
import { SchemaOrgType } from '@/enums/SchemaOrgType';

const license = 'https://dalidevsolutions.com/terminos-y-condiciones';

// Mapeo de tipos por página
const schemaTypes = {
    [PAGES.INICIO]: SchemaOrgType.NEWS_ARTICLE,
};

const organization = process.env.NEXT_PUBLIC_NAME;
const email = process.env.NEXT_PUBLIC_EMAIL;

// 🔄 Función dinámica para construir Schema.org según el tipo
const buildSchema = (type, { title, url, description, image, additionalData }) => {
    // 📚 Base común para todos los tipos
    const baseSchema = {
        '@context': 'https://schema.org',
        name: title,
        description,
        url,
        license,
        dateModified: new Date().toISOString(),
        creator: {
            '@type': 'Organization',
            name: organization,
            url: 'https://dalidevsolutions.com',
            logo: {
                '@type': 'ImageObject',
                url: image,
            },
        },
    };

    switch (type) {
        // 📊 Dataset: Datos estructurados (ej., mercado de valores de jugadores)
        case SchemaOrgType.DATASET:
            return {
                ...baseSchema,
                '@type': SchemaOrgType.DATASET,
                distribution: {
                    '@type': 'DataDownload',
                    contentUrl: url,
                    encodingFormat: 'text/html',
                },
            };

        // 🛍️ Product: Información detallada de un jugador/producto
        case SchemaOrgType.PRODUCT:
            return {
                ...baseSchema,
                '@type': SchemaOrgType.PRODUCT,
                image,
                brand: {
                    '@type': 'Organization',
                    name: organization,
                },
                offers: {
                    '@type': 'Offer',
                    url,
                    priceCurrency: additionalData?.priceCurrency ?? 'EUR',
                    price: additionalData?.price ?? '0.00',
                    availability: 'https://schema.org/InStock',
                },
            };

        case SchemaOrgType.SPORTS_PLAYER:
            return {
                ...baseSchema,
                '@type': SchemaOrgType.SPORTS_PLAYER,
                image,
                birthDate: additionalData?.birthDate ?? '',
                birthPlace: {
                    '@type': 'Place',
                    name: additionalData?.birthPlace?.name ?? '',
                    addressCountry: additionalData?.birthPlace?.country ?? '',
                },
                nationality: additionalData?.nationality ?? '',
                height: additionalData?.height ?? '',
                weight: additionalData?.weight ?? '',
                memberOf: {
                    '@type': 'SportsTeam',
                    name: additionalData?.team?.name ?? '',
                    url: additionalData?.team?.url ?? '',
                },
                url,
                additionalProperty:
                    additionalData?.properties?.map((prop) => ({
                        '@type': 'PropertyValue',
                        name: prop.name,
                        value: prop.value,
                    })) ?? [],
            };

        // 📅 Event: Eventos como partidos, alineaciones actualizadas
        case SchemaOrgType.EVENT:
            return {
                ...baseSchema,
                '@type': SchemaOrgType.EVENT,
                startDate: additionalData?.startDate ?? new Date().toISOString(),
                endDate: additionalData?.endDate ?? new Date().toISOString(),
                eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
                eventStatus: 'https://schema.org/EventScheduled',
                location: {
                    '@type': 'VirtualLocation',
                    url,
                },
                organizer: {
                    '@type': 'Organization',
                    name: organization,
                    url: 'https://dalidevsolutions.com',
                },
            };

        // 📰 NewsArticle: Noticias y artículos relacionados con el juego
        case SchemaOrgType.NEWS_ARTICLE:
            return {
                ...baseSchema,
                '@type': SchemaOrgType.NEWS_ARTICLE,
                headline: title,
                datePublished: additionalData?.datePublished ?? new Date().toISOString(),
                dateModified: additionalData?.dateModified ?? new Date().toISOString(),
                author: {
                    '@type': 'Person',
                    name: additionalData?.author ?? organization,
                },
                publisher: {
                    '@type': 'Organization',
                    name: organization,
                    logo: {
                        '@type': 'ImageObject',
                        url: image,
                    },
                },
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': url,
                },
            };

        // 📖 BlogPosting: Artículos tipo blog, análisis detallados
        case SchemaOrgType.BLOG_POSTING:
            return {
                ...baseSchema,
                '@type': SchemaOrgType.BLOG_POSTING,
                headline: title,
                datePublished: additionalData?.datePublished ?? new Date().toISOString(),
                dateModified: additionalData?.dateModified ?? new Date().toISOString(),
                author: {
                    '@type': 'Person',
                    name: additionalData?.author ?? organization,
                },
                publisher: {
                    '@type': 'Organization',
                    name: organization,
                    logo: {
                        '@type': 'ImageObject',
                        url: image,
                    },
                },
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': url,
                },
            };

        // ❓ FAQPage: Preguntas frecuentes
        case SchemaOrgType.FAQ_PAGE:
            return {
                ...baseSchema,
                '@type': SchemaOrgType.FAQ_PAGE,
                mainEntity:
                    additionalData?.faqs?.map((faq) => ({
                        '@type': 'Question',
                        name: faq.question,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: faq.answer,
                        },
                    })) ?? [],
            };

        // 🧩 ItemList: Listados (ej., mejores jugadores, alineaciones)
        case SchemaOrgType.ITEM_LIST:
            return {
                ...baseSchema,
                '@type': SchemaOrgType.ITEM_LIST,
                itemListElement:
                    additionalData?.items?.map((item, index) => {
                        const listItem = {
                            '@type': 'ListItem',
                            position: index + 1,
                            name: item.name,
                            datePublished: item.date,
                        };

                        if (item.url) {
                            listItem.url = item.url;
                        }

                        if (item.description) {
                            listItem.description = item.description;
                        }

                        if (item.additionalProperty) {
                            listItem.additionalProperty = item.additionalProperty.map((prop) => ({
                                '@type': 'PropertyValue',
                                name: prop.name,
                                value: prop.value,
                            }));
                        }

                        return listItem;
                    }) ?? [],
            };

        // 🏢 Organization: Información general sobre la organización
        case SchemaOrgType.ORGANIZATION:
            return {
                ...baseSchema,
                '@type': SchemaOrgType.ORGANIZATION,
                contactPoint: [
                    {
                        '@type': 'ContactPoint',
                        telephone: additionalData?.telephone ?? '+34-638-744-417',
                        contactType: 'Customer Service',
                        email: additionalData?.email ?? email,
                    },
                ],
            };

        // 🌐 WebPage: Páginas genéricas
        case SchemaOrgType.WEB_PAGE:
            return {
                ...baseSchema,
                '@type': SchemaOrgType.WEB_PAGE,
            };

        // 🚫 Default: Tipo no válido
        default:
            return null;
    }
};

// 📌 **Componente principal**
const SeoSchemaOrg = (pageId, title, url, description, image, additionalData = {}) => {
    const type = schemaTypes[pageId];

    if (!type) {
        return null; // No se ha definido un tipo para esta página
    }

    const jsonLd = buildSchema(type, { title, url, description, image, additionalData });

    if (!jsonLd) {
        return null; // Si no se pudo generar el esquema, no renderizamos nada
    }

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export default SeoSchemaOrg;
