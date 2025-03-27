import { Box, Typography, Card, CardContent } from '@mui/material';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';

const servicios = [
    {
        title: 'Hosting gestionado',
        icon: <CloudOutlinedIcon fontSize="large" color="primary" />,
        description: 'Nos encargamos del alojamiento de tu sitio web para que siempre esté disponible, rápido y seguro, sin que tengas que preocuparte por la parte técnica.'
    },
    {
        title: 'SEO',
        icon: <SearchOutlinedIcon fontSize="large" color="primary" />,
        description: 'Mejoramos tu visibilidad en buscadores locales como Google para que los clientes de tu zona te encuentren fácilmente.'
    },
    {
        title: 'Email Marketing',
        icon: <EmailOutlinedIcon fontSize="large" color="primary" />,
        description: 'Creamos campañas de correo personalizadas para fidelizar clientes, promocionar productos y mejorar tus resultados.'
    },
    {
        title: 'Mantenimiento de sitios web',
        icon: <BuildOutlinedIcon fontSize="large" color="primary" />,
        description: 'Actualizamos y cuidamos tu web para que funcione siempre correctamente y esté protegida contra errores o ataques.'
    },
    {
        title: 'Publicidad online',
        icon: <CampaignOutlinedIcon fontSize="large" color="primary" />,
        description: 'Gestionamos tus campañas en Google, redes sociales u otras plataformas para atraer nuevos clientes y aumentar tus ventas.'
    },
    {
        title: 'Diseño y creación de páginas web',
        icon: <DesignServicesOutlinedIcon fontSize="large" color="primary" />,
        description: 'Diseñamos tu sitio web a medida, adaptado a tu marca, tus objetivos y con enfoque en la experiencia del usuario.'
    }
];

const CardServicesComponent = () => {
    return (
        <Box textAlign="center" px={2} >
            <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                fontSize={20}
                mb={4}
            >
                Servicios que ofrecemos
            </Typography>

            <Box
                display="grid"
                gridTemplateColumns={{
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)'
                }}
                gap={4}
                maxWidth="1200px"
                mx="auto"
            >
                {servicios.map((item, index) => (
                    <Card
                        key={index}
                        elevation={3}
                        sx={{
                            borderRadius: 3,
                            p: 3,
                            textAlign: 'left',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                            }
                        }}
                    >
                        <CardContent>
                            <Box mb={2}>
                                {item.icon}
                            </Box>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default CardServicesComponent;
