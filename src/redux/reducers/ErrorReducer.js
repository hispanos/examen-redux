import types from '../types/types'
export const ErrorReducer = (state = {}, action) => {

    switch (action.type) {
        case types.ERROR:
            return {
                status: action.payload.status,
                message: action.payload.message
            }
    
        default:
            return state;
    }

}