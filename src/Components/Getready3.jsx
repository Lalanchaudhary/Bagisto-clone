import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'



function Getready3() {
  return (
    <div>
      <Container className="py-5 ms-auto">
        <Row className='gap-5'>

          <Col className='content'>
            <div>
              <h1>Get Ready for <br />our new Bold Collections!</h1>
              <p>Introducing Our New Bold Collections! Elevate your style with daring designs and vibrant statements. Explore striking patterns and bold colors that redefine your wardrobe. Get ready to embrace the extraordinary!</p>
              <button className='primary-button'>View more</button>
            </div>
          </Col>

          <Col className="round">
            <img src="https://demo.bagisto.com/bagisto-common/storage/theme/10/GhiESeKgXxebvQ0nS4JBRd0Gbf0ASvQDaUFKS6uT.webp" alt="" />
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Getready3
