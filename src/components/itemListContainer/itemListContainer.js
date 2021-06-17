import React from 'react';
import './itemListContainer.css'

const ItemListContainer = ({message}) => {
    return (  
        <div>
            <p className="itemListMessage">{message}</p>
        </div>
    );
}
 
export default ItemListContainer;