import { REDUCERS } from '@/constants/reducers';

export function app(state, action) {
    switch (action.type) {
        case REDUCERS.UPDATE_APP:
            const { app } = state;

            const nuevoEstado = {
                ...state,
                app: {
                    ...app,
                    ...action.payload,
                },
            };

            return nuevoEstado;
        default:
            return state;
    }
}
