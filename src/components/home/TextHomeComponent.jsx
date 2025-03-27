import { Box, Typography } from '@mui/material';

const TextHomeComponent = () => {
    return (
        <Box textAlign="center" px={2} mb={4}>
            <Typography variant="h3" fontWeight="bold" gutterBottom fontSize={20}>
                Presencia online sólida y en crecimiento
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
                maxWidth={700}
                margin="0 auto"
                sx={{
                    fontSize: {
                        xs: '1rem',    // tamaño en mobile
                        sm: '1.05rem', // tabletsse
                        md: '1.2rem',  // desktop
                        lg: '1.25rem'  // pantallas grandes
                    },
                    lineHeight: 1.8
                }}
            >
                Nuestra presencia online nos permite conectar con clientes de todas partes, ofreciendo soluciones efectivas y adaptadas a sus necesidades. Apostamos por la innovación, la cercanía y la calidad en cada uno de nuestros servicios.
                Gracias a nuestras plataformas digitales, podemos asesorarte estés donde estés, con la misma dedicación que si estuviéramos a tu lado.
            </Typography>
        </Box>
    );
};

export default TextHomeComponent;
