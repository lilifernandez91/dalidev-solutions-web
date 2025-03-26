import QuienesSomosComponent from '@/components/quienes-somos';
import SeoComponent from '@/components/shared/SeoComponent';
import { PAGES } from '@/constants/rutas';

const QuienesSomosPage = () => {
    return (
        <>
            <SeoComponent pageId={PAGES.QUIENES_SOMOS} />

            <QuienesSomosComponent />
        </>
    );
};

export default QuienesSomosPage;
