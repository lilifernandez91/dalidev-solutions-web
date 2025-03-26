import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { Context } from '@/context';
import LogoImage from './LogoImage';
import { Box, CircularProgress } from '@mui/material';

const SpinnerLayout = ({ children }) => {
    const router = useRouter();
    const [isLoadingRoute, setIsLoadingRoute] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

    const { state } = useContext(Context);
    const { app } = state;

    useEffect(() => {
        const handleStart = () => setIsLoadingRoute(true);
        const handleComplete = () => setIsLoadingRoute(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    useEffect(() => {
        setIsLoading(router.isFallback);
    }, [router.isFallback]);

    useEffect(() => {
        setIsSpinnerVisible(app.isSpinnerVisible);
    }, [app.isSpinnerVisible]);

    const showSpinner = isLoading || isLoadingRoute || isSpinnerVisible;

    return (
        <>
            {showSpinner && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                >
                    <Box
                        sx={{
                            animation:
                                'rotateFootball 1.5s linear infinite, bounceFootball 0.7s ease-in-out infinite alternate',
                        }}
                    >
                        <LogoImage width={150} />
                    </Box>
                </Box>
            )}

            {children}
        </>
    );
};

export default SpinnerLayout;
