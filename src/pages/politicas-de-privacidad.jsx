import SeoComponent from '@/components/shared/SeoComponent';
import { PAGES } from '@/constants/rutas';
import { Box, Container, Typography, useTheme } from '@mui/material';

const PoliticasDePrivacidadPage = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                py: 4,
            }}
        >
            <SeoComponent pageId={PAGES.POLITICAS_DE_PRIVACIDAD} />
            <Container maxWidth="md">
                <Typography variant="h3" gutterBottom align="center">
                    Política de Privacidad
                </Typography>

                <Typography variant="body1" paragraph>
                    En Defensa Madridista, respetamos tu privacidad y nos comprometemos a proteger la
                    información personal que compartes con nosotros.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    1. Recolección de Datos
                </Typography>
                <Typography variant="body1" paragraph>
                    Recopilamos datos personales como tu nombre, dirección de correo electrónico y más cuando
                    te registras en nuestro sitio, suscribes a nuestro boletín o interactúas con nuestro
                    contenido.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    2. Uso de Datos
                </Typography>
                <Typography variant="body1" paragraph>
                    Usamos tus datos para mejorar nuestros servicios, proporcionarte soporte y cumplir con
                    nuestras obligaciones legales. No compartimos tu información con terceros sin tu
                    consentimiento.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    3. Seguridad de la Información
                </Typography>
                <Typography variant="body1" paragraph>
                    Implementamos medidas de seguridad para proteger tus datos contra el acceso no autorizado
                    y el uso indebido.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    4. Derechos del Usuario
                </Typography>
                <Typography variant="body1" paragraph>
                    Tienes derecho a acceder, rectificar o eliminar tu información personal en cualquier
                    momento. Si tienes preguntas sobre tu privacidad, contáctanos.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    5. Contacto
                </Typography>
                <Typography variant="body1" paragraph>
                    Si tienes preguntas sobre nuestra política de privacidad, puedes escribirnos a{' '}
                    <a href="mailto:contacto@defensamadridista.com">{process.env.NEXT_PUBLIC_EMAIL}</a>.
                </Typography>

                <Typography variant="caption" display="block" align="center" sx={{ mt: 4 }}>
                    Última actualización: {new Date().toLocaleDateString()}
                </Typography>
            </Container>
        </Box>
    );
};

export default PoliticasDePrivacidadPage;
