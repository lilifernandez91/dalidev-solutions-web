import { RUTAS } from '@/constants/rutas';
import { getDateMMddYYYYHHmm } from '@/helpers/datetime-helper';
import { Card, CardMedia, CardContent, Typography, Avatar, Box, Chip } from '@mui/material';
import Link from 'next/link';

const NewsCard = ({ news }) => {
    const author = {
        name: news.author ?? process.env.NEXT_PUBLIC_NAME,
        image:
            news.authorImage ?? `${process.env.NEXT_PUBLIC_IMAGES}/logos/defensa-madridista-7.png?width=60`,
    };
    return (
        <Link href={`${RUTAS.NOTICIAS}/${news.slug}`}>
            <Card
                className="news-card"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    boxShadow: 3,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
                }}
            >
                {/* Imagen de la noticia */}
                <CardMedia
                    component="img"
                    image={news.image}
                    alt={news.title}
                    sx={{
                        objectFit: 'cover',
                    }}
                />

                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {/* Categorías */}
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                        {news?.categories?.map((category, index) => (
                            <Chip key={index} label={category} size="small" color="primary" />
                        ))}
                    </Box>

                    {/* Título de la noticia */}
                    <Typography
                        variant="h6"
                        sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontWeight: 'bold',
                            mb: 1,
                            fontSize: 18,
                            lineHeight: 1.5,
                        }}
                    >
                        {news.title}
                    </Typography>

                    {/* Autor y fecha */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
                        <Avatar src={author.image} alt={author.name} />

                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                {news.author ?? process.env.NEXT_PUBLIC_NAME}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                {getDateMMddYYYYHHmm(news.date)}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    );
};

export default NewsCard;
