import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import MailImg from '../../assets/img/mail-img.png';
import PhoneImg from '../../assets/img/phone-img.png';

const ContactInfo = () => {
    return (
        <section className="contactPage-info">
            <Container>
                <Row className='align-items-center mb-5'>
                    <h2 className='text-center'>聯絡資訊</h2>
                    <h2 className='text-center'>Contact Info</h2>
                    <Col md={6} className='my-5'>
                        <a href="tel:02-5591-5658">
                            <h3>
                                <span><img src={PhoneImg} alt="" /></span>02-5591-5658
                            </h3>
                        </a>
                    </Col>
                    <Col md={6} className='my-5'>
                        <a href="mailto:letapesunmoonlake@gmail.com">
                            <h3>
                                <span><img src={MailImg} alt="" /></span>letapesunmoonlake@gmail.com
                            </h3>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactInfo