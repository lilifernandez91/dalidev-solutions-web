import { useEffect, useState, useRef } from 'react';

const LazyLoadWrapper = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Dejar de observar cuando ya es visible
                    }
                });
            },
            {
                root: null, // Observar el viewport completo
                threshold: 0.01, // El 1% del componente debe ser visible
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, []);

    return (
        <div style={{ minHeight: '50px' }} ref={elementRef}>
            {isVisible ? children : null}
        </div>
    );
};

export default LazyLoadWrapper;
