'use client';

import { Box, CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import Navigation from './Navigation';
import { darkTheme } from '@/theme/darkTheme';
import { lightTheme } from '@/theme/lightTheme';
import { Context } from '@/context';
import Footer from './Footer';
import { addGoogleTagManagerAndAnalytics } from '@/helpers/ads-helper';

const Layout = (props) => {
    const [themeMode, setThemeMode] = useState('dark'); // Default a 'dark'
    const [currentTheme, setCurrentTheme] = useState(darkTheme);

    const { state } = useContext(Context);
    const { app } = state;

    useEffect(() => {
        setThemeMode(app.theme); // Lee el valor de state.app.theme
        setCurrentTheme(app.theme === 'dark' ? darkTheme : lightTheme);
    }, [app.theme]);

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <LayoutContent>{props.children}</LayoutContent>
            <Footer />
        </ThemeProvider>
    );
};

const LayoutContent = ({ children }) => {
    const theme = useTheme();

    useEffect(() => {
        addGoogleTagManagerAndAnalytics();
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
            }}
        >
            <Navigation />
            <main className="main-website">{children}</main>
        </Box>
    );
};

export default Layout;
