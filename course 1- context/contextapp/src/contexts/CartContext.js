import React, { createContext, Component } from 'react';

// first create context
export const CartContext = createContext();

class CartContextProvider extends Component {
    state = {
        count: 0
    }

    handleCartICount = () => {

        console.log(this.state.count);
        
        this.setState({
            count: this.state.count + 1
        })
    }

    handleCartDCount = () => {

        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <CartContext.Provider value={{ ...this.state , handleCartICount : this.handleCartICount, handleCartDCount: this.handleCartDCount}}>
                    {this.props.children}

                </CartContext.Provider>

            </div>
        );
    }
}

export default CartContextProvider;