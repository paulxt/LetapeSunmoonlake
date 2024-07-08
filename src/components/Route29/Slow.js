import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//image
import SlowImg1 from '../../assets/img/route-29-slow-img1.jpg';

const Slow = () => {
    return (
        <section className="route29-slow">
            <h5><span>坡度圖</span></h5>
            <Container>
                <Row className='align-items-center'>
                    <Col className='mt-5 mb-5'>
                        <img src={SlowImg1} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Slow