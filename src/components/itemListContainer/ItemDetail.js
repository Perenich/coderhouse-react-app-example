import Card from 'react-bootstrap/Card';


const ItemDetail = ( {items = []}) =>{
    return(
        <div className='product'>
            <Card style={{ width: '19rem' }}>
           <Card.Img variant="top" src={items.imagen}/>
           <h3>Nombre: {items.marca + " " + items.nombre}</h3>
           <h4>Precio producto: ${items.precio}</h4>
           <p>stock disponible {items.stock + " unidades"}</p>
           <p>Breve descripción del motor {items.motor}</p>
           </Card>
        </div>
    )
};

export default ItemDetail;