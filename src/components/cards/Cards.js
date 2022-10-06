import Card from 'react-bootstrap/Card';

function Cards({autoCard}) {
  return (
    <div className='CardProduct'>
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={autoCard.imagen}/>
      <Card.Body>
        <Card.Title>{autoCard.marca + " " + autoCard.nombre}</Card.Title>
        <Card.Text>
          {autoCard.motor}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;