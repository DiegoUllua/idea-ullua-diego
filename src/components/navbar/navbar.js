import React from 'react';
import './navBar.css';
import Cart from '../cart/cart'

const NavBar = ({menuItems, user}) => {
    
    return (  
        <nav>
            <div className="nav_item">
                {menuItems.map(item => <a href="www.google.com"><p>{item}</p></a>)} 
            </div>
            <div className="nav_item">
                 <Cart />
            </div>
            
        </nav>
    );
}
 
export default NavBar;