import SeoComponent from '@/components/shared/SeoComponent';
import { PAGES } from '@/constants/rutas';
import { Box, Container, Typography, useTheme, Link } from '@mui/material';

const TerminosYCondicionesPage = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                py: 4,
            }}
        >
            <SeoComponent pageId={PAGES.TERMINOS_Y_CONDICIONES} />
            <Container maxWidth="md">
                <Typography variant="h3" gutterBottom align="center">
                    Términos y Condiciones
                </Typography>

                <Typography variant="body1" paragraph>
                    Bienvenido a Defensa Madridista. Al acceder y utilizar nuestro sitio web, aceptas los
                    siguientes términos y condiciones. Por favor, léelos detenidamente.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    1. Uso del Sitio Web
                </Typography>
                <Typography variant="body1" paragraph>
                    El contenido de este sitio es solo para fines informativos y personales. No puedes
                    reproducir, distribuir o modificar ningún contenido sin nuestro consentimiento previo.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    2. Propiedad Intelectual
                </Typography>
                <Typography variant="body1" paragraph>
                    Todos los derechos de propiedad intelectual sobre el contenido y diseño de este sitio web
                    son propiedad de Defensa Madridista o de sus licenciantes.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    3. Responsabilidad
                </Typography>
                <Typography variant="body1" paragraph>
                    No nos hacemos responsables de cualquier daño derivado del uso de la información publicada
                    en nuestro sitio.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    4. Cambios en los Términos
                </Typography>
                <Typography variant="body1" paragraph>
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Te
                    notificaremos de cualquier cambio significativo.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    5. Contacto
                </Typography>
                <Typography variant="body1" paragraph>
                    Si tienes preguntas sobre estos términos, contáctanos en{' '}
                    <Link href="mailto:contacto@defensamadridista.com" color="primary">
                        contacto@defensamadridista.com
                    </Link>
                    .
                </Typography>

                <Typography variant="caption" display="block" align="center" sx={{ mt: 4 }}>
                    Última actualización: {new Date().toLocaleDateString()}
                </Typography>
            </Container>
        </Box>
    );
};

export default TerminosYCondicionesPage;
