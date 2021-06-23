import React ,{useState} from 'react';
import './itemCount.css';

const ItemCount = ({nombreProducto, stock,setStock,initialValue,setInitialValue,onAdd}) => {

    const restarCantidad = () =>{

        if(initialValue > 1 ){
            setInitialValue(initialValue-1)
            setStock(stock+1)
            
        }

    }

    const agregarCantidad = () =>{

        if(stock > 0){
            setInitialValue(initialValue+1)
            setStock(stock-1)
           
        }

    }
    return ( 
        <div className="itemCountContainer">
            <label>{nombreProducto}</label>
            <small>Stock: {stock}</small>
            <div className="inputContainer">
                <button className="inputBtn" onClick={restarCantidad}>-</button>
                <input type="text" value={initialValue}/>
                <button className="inputBtn" onClick={agregarCantidad}>+</button>
            </div>
            <button className="addToCartBtn" onClick={onAdd}>Agregar al carrito</button>

        </div>
     );
}
 
export default ItemCount;