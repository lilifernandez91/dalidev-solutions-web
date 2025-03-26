import { Box, Avatar, Typography, Stack } from '@mui/material';

const NoticiasAuthorComponent = ({ lastUpdated }) => {
    const author = {
        name: process.env.NEXT_PUBLIC_NAME || 'Defensa Madridista',
        image: `${process.env.NEXT_PUBLIC_IMAGES}/logos/defensa-madridista-7.png?width=60`,
    };

    return (
        <Stack direction="row" spacing={2} alignItems="center">
            {/* Imagen del autor */}
            <Avatar src={author.image} alt={`Avatar de ${author.name}`} sx={{ width: 45, height: 45 }} />

            {/* Detalles del autor y fecha */}
            <Box>
                <Typography variant="body1" fontWeight="bold">
                    Redactado por: {author.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {lastUpdated}
                </Typography>
            </Box>
        </Stack>
    );
};

export default NoticiasAuthorComponent;
