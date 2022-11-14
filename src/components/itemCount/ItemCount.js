import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './ItemCount.css'


const ItemCount = ({initial , stock, onAdd}) => {
  const [contador, setContador] = useState(initial);

  const Sumar = () => {
    setContador(contador + 1);   
  };
  const Restar = () =>{
    setContador(contador - 1)

  } 

  useEffect(() =>{
    setContador(parseInt(initial));
  },[initial])

  return (

    <div className='itemCount'>
    <Button disabled={contador <= 1} onClick={Restar}> - </Button>
  <span>   {contador}   </span>
    <Button disabled={contador >= stock} onClick={Sumar} > + </Button>  
    <div>
    <Button disabled={stock <= 0} onClick={() => onAdd(contador)} >Agregar al carrito</Button>
    </div>

    </div>
  );
};

export default ItemCount;