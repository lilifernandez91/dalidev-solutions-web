/**
 * Enum de tipos de Schema.org
 * Define los tipos más comunes y su propósito.
 */
export const SchemaOrgType = Object.freeze({
    /**
     * Representa un conjunto de datos.
     * Usar cuando el contenido es una colección estructurada de datos,
     * por ejemplo, tablas de estadísticas o valores de mercado.
     */
    DATASET: 'Dataset',

    /**
     * Representa un artículo de noticias.
     * Usar cuando el contenido es una noticia o actualización específica,
     * generalmente con fecha de publicación y autor.
     */
    NEWS_ARTICLE: 'NewsArticle',

    /**
     * Representa un producto o servicio específico.
     * Usar cuando el contenido describe un jugador, un ítem o cualquier entidad con atributos de producto.
     */
    PRODUCT: 'Product',

    /**
     * Representa un evento específico.
     * Usar cuando el contenido describe algo que ocurrirá o ha ocurrido en una fecha específica,
     * como un partido de fútbol o una jornada.
     */
    EVENT: 'Event',

    /**
     * Representa una página web estándar.
     * Usar cuando no hay un tipo específico que represente el contenido.
     */
    WEB_PAGE: 'WebPage',

    /**
     * Representa una organización.
     * Usar para describir información sobre una empresa, grupo u organización.
     */
    ORGANIZATION: 'Organization',

    /**
     * Representa un video.
     * Usar cuando el contenido principal de la página es un video.
     */
    VIDEO_OBJECT: 'VideoObject',

    /**
     * Representa un artículo general.
     * Usar cuando el contenido no califica como NewsArticle pero aún es un artículo estructurado.
     */
    ARTICLE: 'Article',

    /**
     * Representa un blog.
     * Usar cuando el contenido pertenece a una entrada de blog.
     */
    BLOG_POSTING: 'BlogPosting',

    /**
     * Representa una lista de elementos ordenados o relacionados.
     * Usar cuando el contenido es una lista de artículos, productos, jugadores, etc.
     */
    ITEM_LIST: 'ItemList',

    /**
     * Representa una página de preguntas frecuentes (FAQ).
     * Usar cuando el contenido presenta un formato de preguntas y respuestas.
     */
    FAQ_PAGE: 'FAQPage',

    /**
     * Representa un jugador deportivo (Sports Player).
     * Usar cuando el contenido describe a un jugador específico, proporcionando detalles sobre su información personal,
     * estadísticas de rendimiento, equipo al que pertenece y otros atributos relevantes.
     */
    SPORTS_PLAYER: 'SportsPlayer',
});
