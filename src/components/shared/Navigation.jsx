'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Switch,
    Divider,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { RUTAS } from '@/constants/rutas';
import { Context } from '@/context';
import { REDUCERS } from '@/constants/reducers';
import LogoImage from './LogoImage';

const navItems = [
    { label: 'Inicio', path: RUTAS.INICIO },
    { label: 'Quiénes somos', path: RUTAS.QUIENES_SOMOS },
    { label: 'Nuestros servicios', path: RUTAS.SERVICIOS },
    { label: 'Blog', path: RUTAS.NOTICIAS },
    { label: 'Contacto', path: RUTAS.CONTACTO },
];

const Navigation = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { state, dispatch } = useContext(Context);
    const { app } = state;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleThemeToggle = () => {
        dispatch({
            type: REDUCERS.UPDATE_APP,
            payload: { theme: app.theme === 'dark' ? 'light' : 'dark' },
        });
    };

    return (
        <AppBar
            position="relative"
            sx={{ backgroundColor: '#0D1B2A', height: '100px', justifyContent: 'center' }}
        >
            {/* Menú Hamburguesa alineado verticalmente y con posición absoluta */}
            <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                    position: 'absolute',
                    left: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                }}
            >
                <MenuIcon sx={{ fontSize: 32 }} /> {/* Cambia el tamaño según prefieras */}
            </IconButton>

            <Toolbar
                className="container"
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                {/* Logo centrado en mobile y a la izquierda en desktop */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        flexGrow: 1,
                    }}
                >
                    <Link href={RUTAS.INICIO} style={{ display: 'flex', alignItems: 'center' }}>
                        <LogoImage width={500} height={100} />
                    </Link>
                </Box>

                {/* Enlaces de Navegación en Desktop */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                    {navItems.map((item) => (
                        <Link key={item.path} href={item.path} passHref>
                            <Typography
                                sx={{
                                    color: '#FFF',
                                    textDecoration: 'none',
                                    '&:hover': { color: '#FFD700' },
                                    cursor: 'pointer',
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Link>
                    ))}
                </Box>
            </Toolbar>

            {/* Drawer para Menú en todas las pantallas */}
            <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
                <Box sx={{ width: 250, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.path} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    href={item.path}
                                    onClick={handleDrawerToggle}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ marginTop: 'auto' }} />

                    {/* Toggle de Tema abajo del todo */}
                    <Box
                        sx={{
                            padding: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography>Modo {app.theme === 'dark' ? 'Oscuro' : 'Claro'}</Typography>
                        <Switch checked={app.theme === 'dark'} onChange={handleThemeToggle} color="primary" />
                    </Box>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Navigation;
