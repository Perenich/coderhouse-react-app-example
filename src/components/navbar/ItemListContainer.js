import ItemCard from "./ItemCard"


const ItemListContainer = () => {
    return(
      <div>
        <ItemCard greeting="Buen día"/>
        <ItemCard greeting="Buenas tardes"/>
        <ItemCard greeting="Buenas noches"/>
      </div>
    )
}

export default ItemListContainer