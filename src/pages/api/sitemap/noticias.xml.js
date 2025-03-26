import axiosApiInstance from '@/api/axios-instance';

export default async function handler(req, res) {
    try {
        // Realiza una solicitud HTTP a la URL externa
        const url = `${process.env.NEXT_PUBLIC_API}/sitemap/sitemap-publicaciones`;
        const response = await axiosApiInstance.get(url);

        // Devuelve la respuesta como un proxy
        res.setHeader('Content-Type', 'application/xml');
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
}
