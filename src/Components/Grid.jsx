import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiDeliveryTruck } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";



function Grid() {
    return (
        <Container>
            <Row>

                <Col className='d-flex gap-2'>
                    <div className=' circle rounded-circle border border-dark ps-2 pt-2'>
                    <CiDeliveryTruck size={50} />
                    </div>

                    <div>
                        <h4>Free Shipping</h4>
                        <p>Enjoy free shipping on all orders</p>
                    </div>
                </Col>

                <Col className='d-flex gap-2'>
                    <div>
                        <div className=' circle rounded-circle border border-dark ps-2 pt-2'>
                        <CiGift size={50} />


                        </div>
                    </div>

                    <div>
                        <h4>Product Replace</h4>
                        <p>Easy Product Replacement Available!</p>
                    </div>
                </Col>

                <Col className='d-flex gap-2'>
                    
                        <div>
                            <div className=' circle rounded-circle border border-dark ps-2 pt-2'>
                            <BsCurrencyDollar size={50}/>

                            </div>
                        </div>
                        

                       <div>
                       <h4>Emi Available</h4>
                        <p>No cost EMI available on all major credit cards</p>
                       </div>
                    
                </Col>

                <Col className='d-flex gap-2'>
                    <div>
                        <div className=' circle rounded-circle border border-dark ps-2 pt-2'>
                        <CiHeadphones size={50}/>

                        </div>
                    </div>
                    
                    <div>
                        <h4>24/7 Support</h4>
                        <p>Dedicated 24/7 support via chat and email</p>
                    </div>
                </Col>

            </Row>

        </Container>
    );
}

export default Grid;