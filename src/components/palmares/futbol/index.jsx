'use client';

import React, { useState } from 'react';
import { Box, Typography, Card, FormControl, MenuItem, Select, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CustomImageComponent from '@/components/custom/CustomImageComponent';
import { getPalmaresData } from '@/data/trophies';
import { getTrophyImage } from '@/helpers/image-helper';

// Componente para cada cajita
const TitleBox = ({ title, isTotal, titles, count }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 3,
                borderRadius: 2,
                textAlign: 'center',
                height: '170px',
                width: '100%',
                backgroundColor: isTotal ? '#3f51b5' : 'transparent',
                color: isTotal ? 'white' : 'inherit',
                width: 'calc((100% - 40px) / 6) ',
                position: 'relative',
            }}
        >
            <Typography variant={isTotal ? 'h3' : 'h4'} fontWeight="bold" fontSize={24}>
                {count}
            </Typography>
            <Box sx={{ position: 'absolute', bottom: '16px', width: '100%', textAlign: 'center' }}>
                <Typography variant="body1" color={isTotal ? 'white' : 'text.secondary'}>
                    {titles}
                </Typography>
                <Typography variant="body1" color={isTotal ? 'white' : 'text.secondary'}>
                    {title}
                </Typography>
            </Box>
        </Card>
    );
};

const PalmaresRealMadridFutbol = () => {
    const [seasonFilter, setSeasonFilter] = useState('');

    // Obtener datos
    const allData = getPalmaresData();

    // Conteo total de títulos
    const totalTitles = allData.length;

    // Conteo de temporadas por cantidad de títulos ganados
    const titleCountBySeason = allData.reduce((acc, { season }) => {
        acc[season] = (acc[season] || 0) + 1;
        return acc;
    }, {});

    const seasonByTitleCount = Array.from({ length: 7 }, (_, i) => 6 - i).map((numTitles) => ({
        count: numTitles,
        seasons: Object.values(titleCountBySeason).filter((count) => count === numTitles).length,
    }));

    const uniqueSeasons = Array.from(new Set(allData.map((item) => item.season))).sort((a, b) => b - a);

    const groupedByCompetition = allData
        ?.filter((item) => !seasonFilter || item.season === seasonFilter)
        .reduce((acc, item) => {
            const { league, season, name, double } = item;
            if (!acc[league]) {
                acc[league] = { name, seasons: [] };
            }
            acc[league].seasons.push({ season, double });
            return acc;
        }, {});

    return (
        <Box sx={{ padding: 2 }} className="container">
            <Typography variant="h1" gutterBottom>
                Palmarés del Real Madrid
            </Typography>

            <Typography variant="body1" gutterBottom>
                El Real Madrid es uno de los clubes más laureados del mundo. Aquí tienes un resumen de todos
                los títulos ganados por el club blanco en su historia por cada temporada.
            </Typography>

            <Box display={'flex'} gap={1} justifyContent={'space-between'} mt={2}>
                {/* Cajita del Total de Títulos */}
                <TitleBox title="Títulos" count={totalTitles} isTotal />

                {/* Cajas de Temporadas por Títulos */}
                {seasonByTitleCount.map(
                    ({ count, seasons }) =>
                        seasons > 0 && <TitleBox title="títulos" count={seasons} key={count} titles={count} />
                )}
            </Box>

            {/* Filtro por temporada */}
            <FormControl fullWidth sx={{ mt: 3 }}>
                <Select value={seasonFilter} onChange={(e) => setSeasonFilter(e.target.value)} displayEmpty>
                    <MenuItem value="">Todas las temporadas</MenuItem>
                    {uniqueSeasons.map((year) => (
                        <MenuItem key={year} value={year}>
                            {year}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Renderizado de trofeos */}
            <Grid container spacing={3} mt={3}>
                {Object.entries(groupedByCompetition).map(([league, { name, seasons }]) => (
                    <Grid item size={12} key={league}>
                        <Card
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: 3,
                                boxShadow: 3,
                                borderRadius: '12px',
                            }}
                        >
                            <CustomImageComponent
                                src={getTrophyImage(league)}
                                alt={name}
                                width={102}
                                height={120}
                                style={{ marginRight: '16px' }}
                            />

                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                                    {seasons.length}
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    {name}
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: '14px' }}>
                                    {seasons
                                        .map(({ season, double }) =>
                                            double ? `${season - 1}-${String(season).slice(2)}` : season
                                        )
                                        .join(' ')}
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PalmaresRealMadridFutbol;
