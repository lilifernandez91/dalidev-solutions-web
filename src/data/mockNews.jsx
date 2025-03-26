export const mockNews = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `Título de la noticia ${index + 1}`,
    image: `${process.env.NEXT_PUBLIC_IMAGES}/banner.jpg`, // Imagen aleatoria de Unsplash
    categories: ['La Liga', 'Champions League'],
    author: `Autor ${index + 1}`,
    authorImage: `https://i.pravatar.cc/50?img=${index + 1}`, // Imagen aleatoria de autor
    date: `2025-02-${(index % 28) + 1}`,
}));
