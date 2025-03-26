import { useMediaQuery } from '@mui/material';
import CustomImageComponent from '../custom/CustomImageComponent';

const LogoImage = ({ styles }) => {
    const isMobile = useMediaQuery('(max-width: 900px)');
    const image = isMobile ? 'defensa-madridista-4.png' : 'defensa-madridista-6.png';
    const width = isMobile ? 180 : 400;
    const height = isMobile ? 60 : 80;
    return (
        <CustomImageComponent
            className="image-logo__image"
            src={`${process.env.NEXT_PUBLIC_IMAGES}/logos/${image}`}
            alt="logo"
            width={width ?? 70}
            height={height ?? width ?? 70}
            priority={true}
            style={styles}
        />
    );
};

export default LogoImage;
