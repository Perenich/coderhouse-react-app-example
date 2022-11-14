import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/CartContext";
import CartItem from "../cartWidget/CartItem";
import Button from 'react-bootstrap/Button';


const Cart = () => {
    const {cart, total,totalProd} = UseCartContext();
    if (cart.length === 0) {
        return (
            <>
                <h1>El carrito esta vacio. </h1>
                <Link to='/products'><Button variant="dark">Realizar compra</Button></Link>
            </>
        )
    }
    return (
        <div>
            <>
            {cart.map((product) => (<CartItem key={product.id} product={product} />))}
            <div className="product">
                <p>cantidad de productos: {totalProd()} </p>
                <p>total: $ {total()}</p></div>
            <Link to="/checkout"><Button variant="dark">Check Out</Button></Link>
            </>
        </div>
    );
};

export default Cart;