import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ItemList = ({product = []}) => {
    return (
        
        <Card className='product' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title + " " + product.model}</Card.Title>
          <Card.Text>
              {product.description}
          </Card.Text>
          <Button variant="dark"><Link to={`/products/item/${product.id}`}> Ver Detalle</Link></Button>
        </Card.Body>
      </Card>
      
        
);}


export default ItemList;