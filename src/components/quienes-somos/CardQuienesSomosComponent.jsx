import { Box, Typography, Card, CardContent, useTheme } from '@mui/material';

const cardData = [
    {
        title: 'Nuestra Misión',
        content: 'Ayudamos a personas y empresas a digitalizar su presencia con soluciones claras, cercanas y personalizadas.'
    },
    {
        title: 'Nuestros Valores',
        content: 'Empatía, honestidad, compromiso y mejora continua. Nos importa cada proyecto como si fuera propio.'
    },
    {
        title: 'Nuestro Equipo',
        content: 'Somos un equipo multidisciplinar que combina tecnología, diseño y estrategia para ofrecer resultados reales.'
    }
];

const CardQuienesSomosComponent = () => {
    const theme = useTheme();

    return (
        <Box px={2} textAlign="center">
            <Typography variant="h4" fontWeight="bold" gutterBottom fontSize={20}>
                ¿Quiénes Somos?
            </Typography>
            <Box mt={2} maxWidth="900px" mx="auto">
                <Card
                    elevation={4}
                    sx={{
                        borderRadius: 4,
                        p: 3,
                        backgroundColor: theme.palette.background.paper,
                        textAlign: 'left',
                    }}
                >
                    <CardContent>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            Nuestra Historia
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                            Dalidev Solutions nació con el objetivo de ofrecer soluciones tecnológicas accesibles y efectivas para pequeños negocios, emprendedores y profesionales independientes.
                            Con el paso del tiempo, hemos crecido hasta convertirnos en un referente en desarrollo web, automatización y estrategia digital, siempre con un enfoque humano, cercano y orientado al éxito de nuestros clientes.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box
                mt={4}
                display="grid"
                gridTemplateColumns={{
                    xs: '1fr',
                    sm: '1fr 1fr',
                    md: 'repeat(3, 1fr)'
                }}
                gap={4}
                maxWidth="1200px"
                mx="auto"
            >
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        elevation={3}
                        sx={{
                            borderRadius: 3,
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)'
                            }
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {card.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {card.content}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default CardQuienesSomosComponent;
