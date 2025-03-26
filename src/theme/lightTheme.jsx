import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2', // Azul principal
            light: '#63a4ff', // Azul claro
            dark: '#004ba0', // Azul oscuro
            contrastText: '#fff',
        },
        secondary: {
            main: '#00793d', // Verde principal
            light: '#5cb85c',
            dark: '#005624',
            contrastText: '#fff',
        },
        neutral: {
            main: '#64748B',
            light: '#93A3B1',
            dark: '#2C3E50',
        },
        success: {
            main: '#4caf50',
            light: '#81c784',
            dark: '#388e3c',
        },
        error: {
            main: '#d32f2f',
            light: '#e57373',
            dark: '#b71c1c',
        },
        warning: {
            main: '#ffa726',
            light: '#ffb74d',
            dark: '#f57c00',
        },
        info: {
            main: '#0288d1',
            light: '#29b6f6',
            dark: '#01579b',
        },
        background: {
            default: '#f5f5f5',
            paper: '#fff',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
        },
    },
    typography: {
        allVariants: {
            fontFamily: `'Roboto Condensed', sans-serif`,
            textTransform: 'none',
            fontSize: 16,
        },
    },
});
