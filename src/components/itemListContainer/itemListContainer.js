import React, { useState } from 'react';
import './itemListContainer.css'
import ItemCount from '../itemCount/itemCount'

const ItemListContainer = ({message}) => {

    const [stock, setStock] = useState(8);
    const [initialValue, setInitialValue] = useState(2);
    return (  
        <div>
            <p className="itemListMessage">{message}</p>
            <ItemCount stock={stock} 
                    nombreProducto="NOTEBOOK" 
                    initialValue={initialValue}
                    setStock={setStock}
                    setInitialValue={setInitialValue}
                    />
        </div>
    );
}
 
export default ItemListContainer;