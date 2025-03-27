import Link from 'next/link';
import { Button, Box, Typography } from '@mui/material';
import { RUTAS } from '@/constants/rutas';

const ButtonHomeComponent = () => {
    return (
        <Box textAlign="center" mt={4} mb={4}>
            <Link href={RUTAS.CONTACTO}>
                <Button
                    variant="contained"
                    size="large"
                    component="h2" // ← Esto hace que el botón sea un h2 semántico
                    sx={{
                        backgroundColor: '#1976d2',
                        color: '#fff',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: '30px',
                        px: 5,
                        py: 1.8,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease-in-out',
                        boxShadow: '0px 4px 15px rgba(0,0,0,0.2)',
                        '&:hover': {
                            backgroundColor: '#1565c0',
                            transform: 'scale(1.05)',
                            boxShadow: '0px 6px 20px rgba(0,0,0,0.3)',
                        },
                    }}
                >
                    Reserva tu Consulta Gratuita
                </Button>
            </Link>
        </Box>
    );
};

export default ButtonHomeComponent;
