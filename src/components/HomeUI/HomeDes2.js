import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeDes2Img1 from '../../assets/img/home-des-img-2-1.jpg';
import HomeDes2Img2 from '../../assets/img/home-des-img-2-2.jpg';

const HomeDes2 = () => {
    return (
        <section className="home-des2">
            <Container>
                <Row className='align-items-center'>
                    <Col md={3} className='p-0 home-des2-img1'>
                        <img src={HomeDes2Img1} alt="" />
                    </Col>
                    <Col md={4} className='p-0'>
                        <img src={HomeDes2Img2} alt="" />
                    </Col>
                    <Col md={5} className='text-center p-0'>
                        <h2><span className='theme-color'>L‘ÉTape</span></h2>
                        <h2><span className='theme-color'>Since 1993</span></h2>
                        <p>Tour de France Since 1903</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeDes2