import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import NoticiaAuthor from './NoticiaAuthor';
import ArticleContent from './ArticleContent';

const BlogComponent = ({ noticia }) => {
    if (!noticia) return null;

    const { title, description, bannerImage } = noticia;

    return (
        <Box
            className="container"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 1,
                minHeight: '100vh',
            }}
        >
            <Box sx={{ maxWidth: 750, width: '100%' }}>
                <Paper elevation={3} sx={{ padding: 1, marginBottom: 3 }}>
                    <Typography variant="h1" sx={{ fontWeight: 600, fontSize: '28px', marginBottom: 1 }}>
                        {title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2 }}>
                        {description}
                    </Typography>

                    {/* 📝 Contenido del Artículo */}
                    <ArticleContent noticia={noticia} image={bannerImage} />
                </Paper>

                {/* 🔗 Redes Sociales */}
                <Box sx={{ marginTop: 3 }}>
                    {/* <LazyLoadWrapper>
                        <AnaliticaSocialNetworks />
                    </LazyLoadWrapper> */}
                </Box>

                {/* 📝 Información del Autor */}
                <Box sx={{ marginTop: 3 }}>
                    <NoticiaAuthor noticia={noticia} />
                </Box>

                {/* 📰 Noticias Recientes */}
                {/* <LazyLoadWrapper>
                    <RecentNews slug={slug} />
                </LazyLoadWrapper> */}
            </Box>
        </Box>
    );
};

export default BlogComponent;



