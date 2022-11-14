import React from 'react';
import { UseCartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CartItem = ({ product }) => {
    const  {removeCart}  = UseCartContext();
    return (
        
            <Card className='product main' style={{ width: '25rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
            <Card.Title>{product.title + " " + product.model}</Card.Title>
            <Card.Text> Descripcion: {product.description} </Card.Text>
            <Card.Text> Cantidad a comprar: {product.cantidad} </Card.Text>
            <Card.Text> Precio por unidad: {product.price} </Card.Text>
            <Card.Text> Subtotal:{product.cantidad * product.price} </Card.Text>
            <Button onClick={() => removeCart(product.id)}><h4>Eliminar</h4></Button>
            </Card.Body>
            </Card>
    )
}

export default CartItem;