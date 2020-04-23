import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import CartContextProvider from './contexts/CartContext';



function App() {
  return (
    <div className="App">

      <CartContextProvider>
        <Navbar />
      </CartContextProvider>
    </div>
  );
}

export default App;
