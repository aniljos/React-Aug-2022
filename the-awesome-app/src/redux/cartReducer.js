const initData = {

    cart: [],
    products: []
}

export const cartReducer = (currentState=initData, action) => {

    //return the updated(new) state
    
    if(action.type === "ADDTOCART"){
        const cartItem = action.data;

        const cart = [...currentState.cart];
        cart.push(cartItem);

        return {
            ...currentState,
            cart
        };

    }

    return currentState;
}