// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <>
    <div className='cards'>
    <Card className='card' style={{ width: '18rem' }} >
      <Card.Img variant="top" className='card-img' src={props.data.image} />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>{props.data.price}</Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    </>
  );
}


export default BasicExample;