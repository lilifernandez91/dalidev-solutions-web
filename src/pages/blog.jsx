import axiosApiInstance from '@/api/axios-instance';
import BlogComponent from '@/components/blog';
import SeoComponent from '@/components/shared/SeoComponent';
import { PAGES } from '@/constants/rutas';
import URLS from '@/helpers/url-helper';

export default function BlogPage({ noticias }) {
    return (
        <>
            <SeoComponent pageId={PAGES.BLOG} />
            <BlogComponent noticias={noticias} />
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

