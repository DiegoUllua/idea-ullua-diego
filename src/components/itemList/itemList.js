import React,{} from 'react';
import ItemDetail from '../itemDetail/itemDetail'

const ItemList = () => {

    return ( <div>
        <p>ItemList</p>
        <ItemDetail name="notebook acer"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"
            type="notebook"
            price={2500}
            imageURL="https://www.deffo.com.ar/wp-content/uploads/2020/07/A315-22-47SL-AR-3.jpg"
        ></ItemDetail>
        <ItemDetail name="notebook hp"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem "
            type="notebook"
            price={3200}
            imageURL="https://http2.mlstatic.com/D_NQ_NP_826342-MLA43825496269_102020-O.jpg"
        ></ItemDetail>
        <ItemDetail name="teclado gamer"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem "
            type="teclado"
            price={3200}
            imageURL="https://www.digital-storeweb.com.ar/wp-content/uploads/sites/18/2020/08/caratual-multicolor-2.jpg"
        ></ItemDetail>
        
        
    </div> );
}
 
export default ItemList;