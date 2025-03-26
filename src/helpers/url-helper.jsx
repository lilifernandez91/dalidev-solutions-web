const baseUrl = process.env.NEXT_PUBLIC_API;

const URLS = {
    OBTENER_NOTICIAS: `${baseUrl}/publicaciones`,
    OBTENER_NOTICIA: (slug) => `${baseUrl}/publicaciones/${slug}`,
};

export default URLS;
