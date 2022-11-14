import carrito from './carrito.svg'
import { UseCartContext } from '../../context/CartContext'

const CartWidget = () => {
    const {totalProd} = UseCartContext();

    return(
        <div>
            <img src={carrito} alt="Carrito" width='32'/>
            <span>{totalProd() || ''}</span>
        </div>
    )
}

export default CartWidget