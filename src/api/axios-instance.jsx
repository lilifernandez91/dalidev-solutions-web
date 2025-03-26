import https from 'https';

import axios from 'axios';

// Crear instancia de axios
const axiosApiInstance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false, // Deshabilitar la validación de certificados SSL
    }),
});

// Interceptor de solicitudes
axiosApiInstance.interceptors.request.use(
    async (config) => {
        // Agregar el header IsVercel
        config.headers.IsVercel = 'true';

        return config;
    },
    (error) => {
        // Retornar el error para su manejo posterior
        return Promise.reject(error);
    }
);

export default axiosApiInstance;
