import React from 'react';

import { Box } from '@mui/material';
import parse from 'html-react-parser';
import { Tweet } from 'react-twitter-widgets';
import sanitizeHtml from 'sanitize-html';
import CustomImageComponent from '../custom/CustomImageComponent';

const sanitizeOptions = {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe']),
    allowedAttributes: {
        '*': ['class', 'style', 'id', 'href'], // Permite 'class', 'style' e 'id' en cualquier etiqueta
        img: ['src', 'alt', 'title', 'width', 'height'],
        iframe: ['src', 'width', 'height', 'frameborder', 'allow', 'allowfullscreen'],
    },
    allowedSchemes: ['http', 'https', 'data'], // Permite URLs con http, https y data
    allowedSchemesByTag: {
        img: ['http', 'https', 'data'],
    },
    selfClosing: ['img', 'br', 'hr'],
};

/**
 * Renderiza un tweet basado en su ID.
 * @param {string} tweetId - ID del tweet.
 * @param {number} index - Índice para la clave única.
 */
const renderTweet = (tweetId, index) => (
    <Box key={`tweet-${index}`} className="tweet-container" sx={{ margin: '16px 0' }}>
        <Tweet tweetId={tweetId} />
    </Box>
);

/**
 * Procesa y renderiza el contenido del artículo.
 * Divide el contenido en texto y tweets para un manejo optimizado.
 * @param {string} content - Contenido en formato HTML.
 */
export const getArticleContent = (content) => {
    if (!content) return null;

    // Expresión regular para encontrar enlaces de tweets
    const tweetRegex = /https?:\/\/(?:www\.)?(?:x\.com|twitter\.com)\/\w+\/status\/(\d+)/g;
    const splitContent = content.split(tweetRegex);

    return (
        <Box className="post-content article-post-content" sx={{ marginTop: '16px' }}>
            {splitContent.map((part, index) =>
                index % 2 === 0 ? (
                    // Contenido de texto (HTML sanitizado)
                    <Box
                        key={`content-${index}`}
                        className="content-part"
                        sx={{ marginBottom: '12px', lineHeight: '1.6' }}
                    >
                        {parse(sanitizeHtml(part, sanitizeOptions))}
                    </Box>
                ) : (
                    // Contenido de Tweet
                    renderTweet(part.trim(), index)
                )
            )}
        </Box>
    );
};

/**
 * Componente que renderiza el contenido de un artículo.
 * Incluye manejo seguro de HTML, renderizado de tweets y optimización de imágenes.
 */
const ArticleContent = ({ noticia, image }) => {
    return (
        <div className="noticia-page-component__noticia">
            <Box className="article-content-container">
                <Box
                    className="article-content-image-container"
                    sx={{
                        marginBottom: '16px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    }}
                >
                    <CustomImageComponent
                        src={image}
                        alt={`Imagen de la noticia: ${noticia.title}`}
                        title={`Noticia: ${noticia.title}`}
                        role="img"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        priority={true}
                    />
                </Box>

                {/* 📝 Contenido del artículo */}
                <Box className="article-content-text">{getArticleContent(noticia.content)}</Box>
            </Box>
        </div>
    );
};

export default ArticleContent;
