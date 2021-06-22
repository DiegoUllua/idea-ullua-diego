import React from 'react';
import './itemListContainer.css'
import ItemCount from '../itemCount/itemCount'

const ItemListContainer = ({message}) => {
    return (  
        <div>
            <p className="itemListMessage">{message}</p>
            <ItemCount stock="8" nombreProducto="NOTEBOOK"/>
        </div>
    );
}
 
export default ItemListContainer;