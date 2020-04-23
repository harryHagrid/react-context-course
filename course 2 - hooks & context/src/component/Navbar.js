import React, { Component, useContext } from 'react';

import { CartContext } from '../contexts/CartContext';
import Counter from './Counter';


function Navbar() {

    const { count } = useContext(CartContext);

    return (
        <div className="app-navbar">
            <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: "rgb(0, 78, 136)" }}>
                <a className="navbar-brand" href="#">React Context with Hooks</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary">
                                Cart <span className="badge badge-light">{count}</span>
                                <span className="sr-only">cart count</span>
                            </button>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Counter />
        </div>
    )

}

export default Navbar;