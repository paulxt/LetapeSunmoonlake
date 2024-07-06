import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import pocagarImg from '../../assets/img/pocagar-img-h.png';

const Pocagar = () => {
    return (
        <section className="pocagar" id='pocagar'>
            <Container>
                <Row className='align-items-center'>
                    <Col size={12} className='text-center'>
                        <h2>POCAGAR <span><img src={pocagarImg} alt="" /></span></h2>
                        <h1>環法冠軍傳奇見面會</h1>
                        <button className='banner-btn' onClick={() => console.log('connect')}>立即報名 <ArrowRightCircle size={25} /></button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Pocagar