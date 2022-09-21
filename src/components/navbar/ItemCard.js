import ItemDescription from "./ItemDescription"
import ItemImg from "./ItemImg"

const ItemCard = ({greeting}) => {
    return(
        <ItemDescription>
            <ItemImg src="https://via.placeholder.com/150x150"/>
            <p>{greeting}</p>
            <p>Este es mi primer proyecto con React</p>
        </ItemDescription>
    )
}

export default ItemCard