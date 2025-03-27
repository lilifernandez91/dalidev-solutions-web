import { Box, Container, Typography, Paper, Link, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import FormularioComponent from './FormularioComponent';

const OurContactComponent = () => {
    const theme = useTheme();

    return (
        <Box sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" gutterBottom align="center">
                    Contacto
                </Typography>

                <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
                    Rellena el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
                </Typography>

                <FormularioComponent />

                {/* INFORMACIÓN DE CONTACTO */}
                <Grid container spacing={4} justifyContent="center">
                    <Grid xs={12} sm={4}>
                        <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: '12px' }}>
                            <Email fontSize="large" color="primary" />
                            <Typography variant="h6" mt={1}>Email</Typography>
                            <Link href="mailto:info@dalidevsolutions.com" color="primary">
                                info@dalidevsolutions.com
                            </Link>
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={4}>
                        <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: '12px' }}>
                            <Phone fontSize="large" color="primary" />
                            <Typography variant="h6" mt={1}>Teléfono</Typography>
                            <Typography>+34 612 345 678</Typography>
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={4}>
                        <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: '12px' }}>
                            <LocationOn fontSize="large" color="primary" />
                            <Typography variant="h6" mt={1}>Ubicación</Typography>
                            <Typography>Elche, España</Typography>
                        </Paper>
                    </Grid>
                </Grid>

                {/* MAPA */}
                <Box mt={6} sx={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
                    <iframe
                        title="Ubicación Dalidev Solutions"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.6941882907055!2d-0.7034280846570317!3d38.26892627967613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63d89d83d09c8f%3A0x9cc6be783fd77034!2sElche%2C%20Alicante!5e0!3m2!1ses!2ses!4v1711968421023"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Box>
            </Container>
        </Box>
    );
};

export default OurContactComponent;
