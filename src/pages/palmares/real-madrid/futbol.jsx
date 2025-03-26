import PalmaresRealMadridFutbol from '@/components/palmares/futbol';
import SeoComponent from '@/components/shared/SeoComponent';
import { PAGES } from '@/constants/rutas';

const PalmaresFutbolRealMadridPage = () => {
    return (
        <>
            <SeoComponent pageId={PAGES.PALMARES_FUTBOL} />

            <PalmaresRealMadridFutbol />
        </>
    );
};

export default PalmaresFutbolRealMadridPage;
