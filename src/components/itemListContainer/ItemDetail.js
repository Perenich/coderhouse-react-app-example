import { useState } from 'react';
import { UseCartContext } from "../../context/CartContext";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from '../itemCount/ItemCount';
import Spiner from '../spiner/Spiner';
import { Link } from 'react-router-dom';


const ItemDetail = ( {item = []}) =>{

    const [goCart , setGoCart] = useState(false);
    const {addProduct} = UseCartContext();

    const onAdd = (cantidad) => {
        setGoCart(true);
        addProduct(item, cantidad);
      };

    return(
        <div>
            {item.length === 0 ?
            (  <div> <Spiner/> </div> 
            ) : (
                 <div className="product">
                     <Card className='product' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title + " " + item.model}</Card.Title>
          <Card.Text>
              {item.description}
          </Card.Text>
        </Card.Body>
      </Card>
  <div>
  <h1> {item.title + " " + item.model}</h1>
  <h2>Precio Unidad: ${item.price}</h2>
  <h3>REF UNIDAD: {item.id}</h3>
    {goCart ? ( <div><Button variant="dark"><Link to="/cart">terminar compra</Link></Button><Button variant="dark"><Link to='/products'>Seguir comprando</Link></Button></div>
                
    ) : ( 
      <ItemCount initial={1} stock={10} onAdd={onAdd} />)}
    </div>
    </div>
                )} 
                </div>
    )
};

export default ItemDetail;