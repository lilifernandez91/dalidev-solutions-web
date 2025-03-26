import axiosApiInstance from '@/api/axios-instance';
import HomeComponent from '@/components/home';
import SeoComponent from '@/components/shared/SeoComponent';
import { PAGES } from '@/constants/rutas';
import URLS from '@/helpers/url-helper';

export default function Home({ noticias }) {
    return (
        <>
            <SeoComponent pageId={PAGES.INICIO} />
            <HomeComponent noticias={noticias} />
        </>
    );
}

export async function getServerSideProps() {
    const payload = {
        skip: 0,
        take: 10,
    };

    try {
        const response = await axiosApiInstance.post(URLS.OBTENER_NOTICIAS, payload);
        const { articles } = response.data;

        return {
            props: {
                noticias: articles || [],
            },
        };
    } catch (error) {
        console.error('❌ Error al obtener noticias:', error.message);

        return {
            props: {
                noticias: [],
            },
        };
    }
}
