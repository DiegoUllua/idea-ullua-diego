import React from 'react';
import cart from '../../cart.svg'
import './cart.css'

const Cart = () => {
    return (  
        <div>
            <a href="www.google.com">
            <img src={cart} alt="carrito" className="cart"/>   
            </a>
        </div>
        
    );
}
 
export default Cart;