import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Casd(props) {
  return (
    <div className='container gamecard ms-5 my-4 col-lg-4'style={{display:"inline-block"}}>
    <Row md={1} className="g-2" >
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img className='img' variant="top" src={props.data.image}/>
            <h1 className='position-absolute collection'>Our Collection</h1>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default Casd;