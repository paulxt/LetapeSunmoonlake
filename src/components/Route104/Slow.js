import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//image
import SlowImg1 from '../../assets/img/route-104-slow-img1.jpg';
import SlowImg1Eng from '../../assets/img/route-104-slow-img1-eng.jpg';

const Slow = ({language}) => {
    return (
        <section className="route104-slow">
            <h5><span>{language === "Chinese" ? "坡度圖" : "Elevation"}</span></h5>
            <Container>
                <Row className='align-items-center'>
                    <Col md={12} className='mt-5 mb-5'>
                        {language === "Chinese" ? <img src={SlowImg1} alt="" /> : <img src={SlowImg1Eng} alt="" /> }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Slow