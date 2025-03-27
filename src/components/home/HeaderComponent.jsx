import { Box, Typography } from "@mui/material";

const HeaderComponent = () => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column', // Siempre en columna, incluso en desktop
            }}
        >
            {/* Sección de texto */}
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 4,
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Typography variant="h1"
                    sx={{
                        fontSize: '28px',
                        fontWeight: '700',
                        lineHeight: '1.2em',
                        color: '#111',
                        textAlign: 'center',
                    }}
                >
                    Consultoría en Creación de Páginas Web y Posicionamiento SEO
                </Typography>
            </Box>

            {/* Sección de imagen */}
            <Box
                sx={{
                    width: '100%',
                    height: '250px',
                    backgroundImage: 'url("/favicon.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
        </Box>
    );
};

export default HeaderComponent;
