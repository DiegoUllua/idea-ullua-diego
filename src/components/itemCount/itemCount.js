import React ,{useState,useEffect} from 'react';
import './itemCount.css';

const ItemCount = ({nombreProducto,initialValue,onAdd}) => {
    
    const [value, setValue] = useState(initialValue);
    const [stock, setStock] = useState(10);
    const [disabled, setDisabled] = useState(false);

    const restarCantidad = () =>{

        if(value > 1 ){
            setValue(value-1)
            setStock(stock+1)
            
        }

    }

    const agregarCantidad = () =>{

        if(stock >= 1){
            setValue(value+1)
            setStock(stock-1)
        }

    }

    useEffect(() => {

        const onInit = (stock) => {

            if(stock === 0){
                setDisabled(true)
                setValue(0)
            }
            setStock(stock - value)
        }
        
        onInit(stock)
   
    }, [])


    return ( 
        <div className="itemCountContainer">
            <label>{nombreProducto}</label>
            {stock > 0 ? <small>Disponibles: {stock}</small> : <small>No hay mas stock disponible</small>}
            
            <div className="inputContainer">
                <button className="inputBtn" onClick={restarCantidad}>-</button>
                <input type="text" value={value}/>
                <button className="inputBtn" onClick={agregarCantidad}>+</button>
            </div>
            <button className="addToCartBtn" onClick={onAdd} disabled={disabled}>Agregar al carrito</button>

        </div>
     );
}
 
export default ItemCount;