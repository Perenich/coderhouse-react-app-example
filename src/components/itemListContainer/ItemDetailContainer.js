import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../index";

const ItemDetailContainer =() => {
const [detail, setDetail] =useState({})
const {id}= useParams()
useEffect(()=>{  
  const itemsCollection = collection(db, "items")
  const itemRef = doc(itemsCollection, id)
  getDoc(itemRef)
  .then((snapshot)=>{
    setDetail({
      id:snapshot.id,
      ...snapshot.data()
    })
  })
  .catch((error)=> console.log(error))
}, [id])

return( <div className="text"> <ItemDetail item={detail}/> </div>
)

}

export default ItemDetailContainer;
