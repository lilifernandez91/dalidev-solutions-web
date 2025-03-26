import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0D1B2A',
            paper: '#1B263B',
        },
        primary: {
            main: '#90caf9',
            light: '#bbdefb',
            dark: '#42a5f5',
            contrastText: '#000',
        },
        secondary: {
            main: '#80cbc4',
        },
        text: {
            primary: '#ffffff',
            secondary: '#d1d1d1',
        },
        success: {
            main: '#66bb6a',
        },
        error: {
            main: '#ef5350',
        },
        warning: {
            main: '#ffa726',
        },
        info: {
            main: '#29b6f6',
        },
        divider: '#2C3E50',
    },
    typography: {
        allVariants: {
            fontFamily: `'Roboto Condensed', sans-serif`,
            textTransform: 'none',
            fontSize: 16,
            color: '#ffffff',
        },
        h1: { color: '#ffffff' },
        h2: { color: '#ffffff' },
        body1: { color: '#d1d1d1' },
        body2: { color: '#d1d1d1' },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#fff', // Azul claro para enlaces
                    textDecoration: 'none', // Opcional: sin subrayado
                    '&:hover': {
                        color: '#42a5f5', // Azul más fuerte al pasar el mouse
                        textDecoration: 'underline',
                    },
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    a: {
                        color: '#64b5f6',
                        textDecoration: 'none',
                        '&:hover': {
                            color: '#42a5f5',
                            textDecoration: 'underline',
                        },
                    },
                },
            },
        },
    },
});
