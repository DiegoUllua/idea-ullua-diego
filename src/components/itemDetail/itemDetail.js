import React,{useEffect,useState} from 'react';
import ItemCount from '../itemCount/itemCount'
import './itemDetail.css';

const ItemDetail = ({name,description,type,price,imageURL}) => {

  const [item, setItem] = useState({
    name: '',
    description: '',
    type: '',
    price: null,
    imageURL: ''
  })

  const getItems = () =>{
    return new Promise(
      ()=>{
        const objectData = {
          name: 'objeto prueba',
          description: 'dasdasdas',
          type: 'dasda',
          price: 150,
          imageURL: ''
        }
        return objectData
      }
    ).then((objectData) => {
      setItem({
        name: objectData.name,
        description: objectData.description,
        type: objectData.type,
        price: objectData.price,
        imageURL: objectData.imageURL
      })
    }).catch(()=>{
      console.log("hubo un error")
    })
  }
  

  useEffect(() => {
    getItems()
  }, [])

  

    return (<div className="container">
           
                <div className="images">
                  <img src={item.imageURL} alt="imagen" />
                </div>
                
                <div className="product">
                    <p>{item.type} </p>
                    <h1>{item.name}</h1>
                    <h2>${item.price}</h2>
                    <p className="desc">{item.description}</p>
                  <div className="buttons">
     
                  </div>
                </div>
            </div>
    );
}
 
export default ItemDetail;