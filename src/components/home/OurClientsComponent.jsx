import { Box, Typography, Grid, Paper, Grid2 } from '@mui/material';

const clients = [
    { name: 'Empresa A' },
    { name: 'Empresa B' },
];

const OurClientsComponent = () => {
    return (
        <Box px={2} textAlign="center">
            <Typography variant="h3" fontWeight="bold" gutterBottom fontSize={20}>
                Nuestros Clientes
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" mb={4}>
                Empresas que han confiado en nosotros
            </Typography>

            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
                {clients.map((client, index) => (
                    <Box key={index} sx={{ flex: '1 1 calc(25% - 16px)', maxWidth: '25%' }}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 2,
                                borderRadius: 3,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <Typography variant="h6">{client.name}</Typography>
                        </Paper>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default OurClientsComponent;
