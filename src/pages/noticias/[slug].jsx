import axiosApiInstance from '@/api/axios-instance';
import NoticiaComponent from '@/components/noticia/NoticiaComponent';
import SeoNoticiasComponent from '@/components/shared/SeoNoticiasComponent';
import { RUTAS } from '@/constants/rutas';
import URLS from '@/helpers/url-helper';

const defaultAuthor = {
    name: process.env.NEXT_PUBLIC_NAME,
    socialNetworks: [
        {
            name: 'Twitter',
            url: process.env.NEXT_PUBLIC_TWITTER,
        },
    ],
    image: `${process.env.NEXT_PUBLIC_IMAGES}/logos/defensa-madridista-7.png`,
    twitter: process.env.NEXT_PUBLIC_TWITTER,
    bio: 'Creador y webmaster de Defensa Madridista, un blog de noticias y análisis del Real Madrid. Defendemos los colores del club blanco contra todo y contra todos.',
};

const NoticiaPage = ({ noticia, slug }) => {
    const title = noticia?.seoTitle ?? noticia?.title ?? 'Noticia sin título';
    const url = `${process.env.NEXT_PUBLIC_URL_FRONT}${RUTAS.NOTICIAS}/${slug}`;
    const image = noticia?.bannerImage ?? noticia?.image;
    const description = noticia?.seoDescription ?? noticia?.description ?? 'Descripción no disponible';
    const author = noticia?.author ?? defaultAuthor;

    return (
        <>
            <SeoNoticiasComponent
                title={title}
                description={description}
                url={url}
                image={image}
                author={author}
                publishedAt={noticia?.publishedAt}
            />

            <NoticiaComponent noticia={noticia} />
        </>
    );
};

export default NoticiaPage;

export async function getServerSideProps(context) {
    const { slug } = context.params;

    try {
        const response = await axiosApiInstance.get(`${URLS.OBTENER_NOTICIA(slug)}`);

        return {
            props: {
                noticia: response.data,
                slug,
            },
        };
    } catch (error) {
        console.error('❌ Error al obtener la noticia:', error.message);

        return {
            props: {
                noticia: null,
                slug,
            },
        };
    }
}
