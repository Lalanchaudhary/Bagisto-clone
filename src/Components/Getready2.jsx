import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



function Getready2() {
  return (
    <div>
      <Container  className="py-5 ms-auto">
      <Row className= "d-flex">

        <Col className="round our">
        <img
         src="https://demo.bagisto.com/bagisto-common/storage/theme/8/UQrrhngMrjNBrOtX9O2T63zFsWbTAEAgsZliWQfI.webp" alt="" />
        <h1>Our <br/> Collection</h1>
        </Col>

        <Col className='round our'>
        <img
        src="https://demo.bagisto.com/bagisto-common/storage/theme/8/A4LcK6YbIWuHLzM8ajzyc8QTFoJQUIvZzhqjGx95.webp" alt="" />
        <h1>Our <br/> Collections</h1>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Getready2
