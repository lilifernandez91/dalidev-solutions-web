export const initialState = {
    user: {
        isLogged: false,
    },
    app: {
        isSpinnerVisible: false,
        theme: 'dark',
    },
    data: {
        noticias: {
            list: [],
            lastUpdated: null,
        },
    },
};
