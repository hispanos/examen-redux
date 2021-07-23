import types from '../types/types'
export const LoginReducer = (state = {}, action) => {

    switch (action.type) {
        case types.LOGIN:
            return {
                id: action.payload.id,
                name: action.payload.displayName
            }

        case types.LOGOUT:
            return {}
    
        default:
            return state;
    }

}