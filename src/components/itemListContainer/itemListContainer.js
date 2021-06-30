import React, { useState } from 'react';
import './itemListContainer.css'
import ItemList from '../itemList/itemList'

const ItemListContainer = ({message}) => {
   
    return (  
        <div class="itemListContainer">
            <ItemList/>        
        </div>
    );
}
 
export default ItemListContainer;