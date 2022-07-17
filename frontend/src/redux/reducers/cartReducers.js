import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const prod = action.payload;

            const existItem = state.cartItems.find((x) => x.product === prod.product);

            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === existItem.product ? x.product.quantity += action.payload.quantity : x.product.quantity)
                }
            }
            else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, prod]
                }
            }
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }
        default:
            return state;
    }
}