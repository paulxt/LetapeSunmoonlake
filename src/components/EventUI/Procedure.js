import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProcedureImg from '../../assets/img/event-procedure-img.png';
import TitleIcon from '../../assets/img/title-icon.png';

const Procedure = () => {
    return (
        <section className='event-procedure' id='event-procedure'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={12}>   
                        <h2 className='event-title mb-5'><span><img className='title-icon' src={TitleIcon} alt="" /></span>活動流程</h2>
                        <img src={ProcedureImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Procedure