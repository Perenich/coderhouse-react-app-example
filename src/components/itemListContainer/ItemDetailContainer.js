import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import ItemProduct from "./ItemProduct";




const ItemDetailContainer =() => {
const [item, setItem] =useState([])


  useEffect (() => {
     const getItem = new Promise ( resuelve => {
      setTimeout(() => {
        resuelve (ItemProduct)
    }, 3000)
     })
     getItem.then(res => setItem(res));
  },[])

    return( <div>  
        <h1>Detalles de valor por vehiculo</h1>
    <div>
        {item.map((items) =>
      <div>
        
        <div>
        <ItemDetail items={items}/>
        </div>
      </div>)}
    </div>


     </div>
    )
}

export default ItemDetailContainer;