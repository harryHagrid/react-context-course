import React, { createContext, useState } from 'react';

// first create context
export const CartContext = createContext();

function CartContextProvider(props) {
    const [count, setCount] = useState(0)

   const handleCartICount = () => {

        setCount(count + 1);
    }

   const handleCartDCount = () => {

        setCount(count - 1);
    }

    return (
        <div>
            <CartContext.Provider value={{ count, handleCartICount, handleCartDCount }}>
                {props.children}

            </CartContext.Provider>

        </div>
    );

}

export default CartContextProvider;