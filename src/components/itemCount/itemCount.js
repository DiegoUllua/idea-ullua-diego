import React ,{useState} from 'react';
import './itemCount.css';

const ItemCount = ({nombreProducto, stock,onAdd}) => {


    const [initialValue, setInitialValue]  = useState(1);

    const restarCantidad = () =>{

        if(initialValue > 1){
            setInitialValue(initialValue -1)
        }

    }

    const agregarCantidad = () =>{

        if(initialValue < stock){
            setInitialValue(initialValue +1)
        }

    }
    return ( 
        <div className="itemCountContainer">
            <label>{nombreProducto}</label>
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