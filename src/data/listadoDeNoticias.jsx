import { IMAGES } from '@/constants/images';
const baseImages = process.env.NEXT_PUBLIC_IMAGES;

const noticias = [
    {
        id: 1,
        slug: 'alineacion-confirmada-real-madrid-manchester-city',
        title: 'Título de la noticia 1',
        image: `${baseImages}/noticias/banner.jpg`,
        categories: ['La Liga', 'Champions League'],
        equipo: 'Real Madrid',
        author: 'Defensa Madridista',
        authorImage: IMAGES.LOGO,
        date: '2025-02-19T19:09:52Z',
    },
];

export const getNoticias = () => {
    return noticias;
};
