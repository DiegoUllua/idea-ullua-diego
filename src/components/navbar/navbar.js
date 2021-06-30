import React from 'react';
import './navBar.css';
import Cart from '../cart/cart'
import {Link} from 'react-router-dom'
const NavBar = () => {
    
    return (  
        <nav>
            <div className="nav_item">
                 <Link to="/computadoras">computadoras</Link>
                 <Link to="/accesorios">accesorios</Link>
                 <Link to="www.google.com">software </Link>
                 <Link to="www.google.com">merchandising </Link>
            </div>
            <div className="nav_item">
                 <Cart />
            </div>
            
        </nav>
    );
}
 
export default NavBar;