import types from '../types/types'
export const ProductsReducer = (state = [], action) => {

    switch (action.type) {
        case types.LIST:
            return {
                ...state,
                product: [...action.payload]
            }

        case types.SAVE:
            return {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                quantity: action.payload.quantity,
            }
    
        default:
            return state;
    }

}