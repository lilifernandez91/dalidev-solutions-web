import { REDUCERS } from '@/constants/reducers';

export function data(state, action) {
    switch (action.type) {
        case REDUCERS.UPDATE_DATA:
            const { data } = state;

            const nuevoEstado = {
                ...state,
                data: {
                    ...data,
                    ...action.payload,
                },
            };

            return nuevoEstado;
        default:
            return state;
    }
}
