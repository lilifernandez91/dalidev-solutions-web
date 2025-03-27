import HomeComponent from '@/components/home';
import SeoComponent from '@/components/shared/SeoComponent';
import { PAGES } from '@/constants/rutas';

const Home = () => {
    return (
        <>
            <SeoComponent pageId={PAGES.INICIO} />
            <HomeComponent />
        </>
    );
};

export default Home;
