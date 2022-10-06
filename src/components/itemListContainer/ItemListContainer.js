import { useState, useEffect } from "react"
import ItemProduct from "./ItemProduct"
import ItemList from "./ItemList";


const ItemListContainer = () => {

  const [data, setData] = useState([]);


  useEffect (() => {
     const getData = new Promise ( resuelve => {
      setTimeout(() => {
        resuelve (ItemProduct)
    }, 1000)
     })
     getData.then(res => setData(res));
  },[])

    return(
       
        <div className="product">
            <ItemList data={data} />

       </div>
    )
}

export default ItemListContainer