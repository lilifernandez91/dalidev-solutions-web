import axiosApiInstance from '@/api/axios-instance';
import { REDUCERS } from '@/constants/reducers';
import URLS from '@/helpers/url-helper';

const CACHE_DURATION = 2 * 60 * 1000; // 2 minutos

export const obtenerNoticias = async (dispatch, lastUpdated) => {
    const now = new Date().getTime();

    if (lastUpdated && now - lastUpdated < CACHE_DURATION) {
        console.log('🟢 Usando noticias desde la caché.');
        return;
    }

    console.log('🔄 Obteniendo noticias desde la API...');

    const payload = {
        skip: 0,
        take: 10,
    };

    axiosApiInstance
        .post(URLS.OBTENER_NOTICIAS, payload)
        .then((response) => {
            const { articles } = response.data;

            dispatch({
                type: REDUCERS.UPDATE_DATA,
                payload: {
                    noticias: {
                        list: articles,
                        lastUpdated: now,
                    },
                },
            });
        })
        .catch((error) => {
            console.error('Error al obtener noticias:', error);
        });
};
