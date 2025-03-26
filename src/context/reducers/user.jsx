import { REDUCERS } from '@/constants/reducers';

export function user(state, action) {
    switch (action.type) {
        case REDUCERS.UPDATE_USER:
            const { user } = state;

            const nuevoEstado = {
                ...state,
                user: {
                    ...user,
                    ...action.payload,
                },
            };

            return nuevoEstado;
        default:
            return state;
    }
}
