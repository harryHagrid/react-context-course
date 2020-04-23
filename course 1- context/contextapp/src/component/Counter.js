import React, { Component } from 'react';
import { CartContext } from '../contexts/CartContext';

class Counter extends Component {


    render() {

        return (

            <CartContext.Consumer>{(context => {
                console.log(context);
                
                const { handleCartICount, handleCartDCount } = context
                return (
                    <div className="app-counter container mt-5">
                        <h6>Counter</h6> <hr />
                        <button type="button" className="btn btn-primary btn-sm" onClick={handleCartICount}>
                            <i className="fas fa-plus" />
                        </button>
            &nbsp;
                        <button type="button" className="btn btn-danger btn-sm" onClick={handleCartDCount}>
                            <i className="fas fa-minus" />
                        </button>
                    </div>
                )
            }
            )}

            </CartContext.Consumer>

        );

    }


}

export default Counter