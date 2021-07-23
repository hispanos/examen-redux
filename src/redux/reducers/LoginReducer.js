import types from '../types/types'
export const LoginReducer = (state = {status: false}, action) => {

    switch (action.type) {
        case types.LOGIN:
            return {
                id: action.payload.id,
                name: action.payload.displayName,
                status: action.payload.status
            }

        case types.LOGOUT:
            return {}
    
        default:
            return state;
    }

}