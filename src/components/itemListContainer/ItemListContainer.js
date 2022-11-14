import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../..';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Spiner from '../spiner/Spiner';
import ItemList from './ItemList';

const ItemListContainer = () => {
  
  const { categoryId } = useParams()
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const itemsCollection =
    categoryId ? query(collection(db, "items"), where("categoryId", "==", categoryId))    
    : collection(db, "items");
    getDocs(itemsCollection)
    .then((snapshot) => {
    const arrproducts = snapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data(),
        };
        });
        setProducts(arrproducts);
    })
    .catch((error) => console.log(error));
}, [categoryId]);


  return (
    <div>
        {products.length === 0 ?
         (
            <div> <Spiner/> </div>
         ) :
           ( 
            <div className='main'>               
            {products.map((product) => (
              <ItemList key={product.id} product={product} />
              
            ))}
            </div>
           )
        }
    </div>
  );
};

export default ItemListContainer;