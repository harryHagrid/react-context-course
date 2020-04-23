import React, { createContext, useState, useReducer } from 'react';
import { cartReducer } from '../reducers/CartReducer';

// first create context
export const CartContext = createContext();

function CartContextProvider(props) {
    const [count, dispatch] = useReducer(cartReducer, 0);

    return (
        <div>
            <CartContext.Provider value={{ count, dispatch }}>
                {props.children}

            </CartContext.Provider>

        </div>
    );

}

export default CartContextProvider;