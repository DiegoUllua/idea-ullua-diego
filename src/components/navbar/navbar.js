import React from 'react';
import './navBar.css';
import Cart from '../cart/cart'

const NavBar = () => {
    
    return (  
        <nav>
            <div className="nav_item">
                 <a href="www.google.com"><p>computadoras</p> </a>
                 <a href="www.google.com"><p>accesorios</p> </a>
                 <a href="www.google.com"><p>software</p> </a>
                 <a href="www.google.com"><p>merchandising</p> </a>
            </div>
            <div className="nav_item">
                 <Cart />
            </div>
            
        </nav>
    );
}
 
export default NavBar;