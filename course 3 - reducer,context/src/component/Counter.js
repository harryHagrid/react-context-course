import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


function Counter() {

    const {dispatch } = useContext(CartContext);

    return (

        <div className="app-counter container mt-5">
            <h6>Counter</h6> <hr />
            <button type="button" className="btn btn-primary btn-sm" onClick={() => {dispatch({type:'INCREMENT'})}}>
                <i className="fas fa-plus" />
            </button>
            &nbsp;
            <button type="button" className="btn btn-danger btn-sm" onClick={() => {dispatch({type:'DECREMENT'})}}>
                <i className="fas fa-minus" />
            </button>
            &nbsp;
            <button type="button" className="btn btn-danger btn-sm" onClick={() => {dispatch({type:'VALUE', num : 10})}}>
                <i className="fas fa-angle-double-up" />
            </button>
        </div>
    )
}

export default Counter


