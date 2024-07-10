import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProcedureImg from '../../assets/img/event-procedure-img.png';
import ProcedureImgEng from '../../assets/img/event-procedure-img-eng.png';

import TitleIcon from '../../assets/img/title-icon.png';

const Procedure = ({language}) => {
    return (
        <section className='event-procedure' id='event-procedure'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={12}>   
                        <h2 className='event-title mb-5'><span><img className='title-icon' src={TitleIcon} alt="" /></span>{language === "Chinese" ? "活動流程" : "Event Schedule"}</h2>
                        {language === "Chinese" ? <img src={ProcedureImg} alt="" /> : <img src={ProcedureImgEng} alt="" />}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Procedure