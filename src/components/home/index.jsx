'use client';

import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import NewsCard from './NewsCard';

const HomeComponent = ({ noticias }) => {
    return (
        <Box pt={2} className="container">
            <Typography variant="h1" component="h1" sx={{ marginBottom: 1 }}>
                Últimas noticias
            </Typography>

            <Typography variant="body1" component="p" sx={{ marginBottom: 2 }}>
                Toda la actualidad del Real Madrid desde otra perspectiva, mezclamos análisis, opinión y
                actualidad al ritmo de un enfoque diferente.
            </Typography>

            <Grid container spacing={2}>
                {noticias?.map((news, index) => {
                    let gridSize = 12;

                    if (index === 0) gridSize = 12;
                    else if (index <= 2) gridSize = 6;
                    else if (index <= 4) gridSize = 6;
                    else gridSize = 4;

                    return (
                        <Grid
                            key={news.id}
                            item="true"
                            size={{
                                xs: 12,
                                sm: 6,
                                md: gridSize,
                            }}
                        >
                            <NewsCard news={news} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default HomeComponent;
