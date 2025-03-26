import { useEffect, useState } from 'react';

import Image from 'next/image';

const CustomImageComponent = ({
    src,
    width,
    height,
    alt = 'Imagen',
    className = '',
    style = {},
    onClick,
    unoptimized = true, // 🚨 Se mantiene true para evitar edge requests costosos
    fallbackSrc,
    priority = false,
    objectFit = 'cover', // Controlar cómo se ajusta la imagen
}) => {
    const defaultImage = `${process.env.NEXT_PUBLIC_IMAGES}/jugadores/0.png`;
    const [imageSrc, setImageSrc] = useState(src || defaultImage);

    useEffect(() => {
        setImageSrc(src || defaultImage);
    }, [src]);

    const handleError = () => {
        setImageSrc(fallbackSrc || defaultImage);
    };

    return (
        <Image
            src={imageSrc}
            width={width}
            height={height}
            alt={alt}
            className={className}
            style={{ ...style, objectFit }}
            onClick={onClick}
            unoptimized={unoptimized} // 🔒 Se mantiene true por tu caso específico
            priority={priority}
            onError={handleError}
        />
    );
};

export default CustomImageComponent;
