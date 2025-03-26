import { RUTAS } from '@/constants/rutas';
import { Box, Container, Typography, Link, useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme(); // Accede al tema actual

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                py: 3,
                mt: 4,
                boxShadow: 3,
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body2" align="center">
                    © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_NAME}. Todos los derechos
                    reservados.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
                    <Link href={RUTAS.POLITICAS_DE_PRIVACIDAD} color="inherit" underline="hover">
                        Política de Privacidad
                    </Link>
                    <Link href={RUTAS.TERMINOS_Y_CONDICIONES} color="inherit" underline="hover">
                        Términos y Condiciones
                    </Link>
                    <Link href={RUTAS.CONTACTO} color="inherit" underline="hover">
                        Contacto
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
