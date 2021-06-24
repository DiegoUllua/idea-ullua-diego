import React, { useState } from 'react';
import './itemListContainer.css'
import ItemCount from '../itemCount/itemCount'

const ItemListContainer = ({message}) => {

    
   
    return (  
        <div>
            <p className="itemListMessage">{message}</p>
            <ItemCount nombreProducto="NOTEBOOK" 
                    initialValue={1}
                    />
        </div>
    );
}
 
export default ItemListContainer;