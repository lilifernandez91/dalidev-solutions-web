import { Box, Container, Typography, Link, Paper, useTheme } from '@mui/material';
import { Email, Twitter, YouTube, WhatsApp } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import { PAGES } from '@/constants/rutas';
import SeoComponent from '@/components/shared/SeoComponent';

const ContactoPage = () => {
    const theme = useTheme();

    // Datos de contacto
    const contactMethods = [
        {
            icon: <Email fontSize="large" />,
            title: 'Correo Electrónico',
            value: 'infodefensamadridista@gmail.com',
            link: 'mailto:infodefensamadridista@gmail.com',
        },
        {
            icon: <Twitter fontSize="large" />,
            title: 'Twitter',
            value: '@Defensa_Madrid',
            link: 'https://x.com/Defensa_Madrid',
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                py: 4,
            }}
        >
            <SeoComponent pageId={PAGES.CONTACTO} />
            <Container maxWidth="lg">
                <Typography variant="h3" gutterBottom align="center">
                    Contacto
                </Typography>

                <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
                    Puedes comunicarte con nosotros a través de las siguientes plataformas:
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {contactMethods.map((method, index) => (
                        <Grid
                            item="true"
                            size={{
                                xs: 12,
                                sm: 6,
                            }}
                            key={index}
                        >
                            <Paper
                                elevation={4}
                                sx={{
                                    p: 3,
                                    textAlign: 'center',
                                    backgroundColor: theme.palette.background.paper,
                                    borderRadius: '12px',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                                    },
                                }}
                            >
                                <Box sx={{ mb: 2 }}>{method.icon}</Box>

                                <Typography variant="h6" gutterBottom>
                                    {method.title}
                                </Typography>

                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    <Link
                                        href={method.link}
                                        color="primary"
                                        underline="hover"
                                        target="_blank"
                                    >
                                        {method.value}
                                    </Link>
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="caption" display="block" align="center" sx={{ mt: 6 }}>
                    Nos pondremos en contacto contigo lo antes posible. ¡Gracias por tu interés!
                </Typography>
            </Container>
        </Box>
    );
};

export default ContactoPage;
