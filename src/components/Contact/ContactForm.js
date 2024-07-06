import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Contact } from '../../components/HomeUI/Contact';

const ContactForm = () => {

    return (
        <section className="contactPage-form">
            <Container>
                <h2 className='text-center'>We’d Love to Hear From You</h2>
                <h4 className='text-center'>我們期待能聽到您的意見！</h4>
                <Row className='align-items-center mt-5 mb-5'>
                    <Col md={3} className='px-4'>
                        <div className="contact-btn">
                            <h3>需要專人協助</h3>
                        </div>
                    </Col>
                    <Col md={3} className='px-4'>
                        <div className="contact-btn">
                            <h3>成為我們的合作夥伴</h3>
                        </div>
                    </Col>
                    <Col md={3} className='px-4'>
                        <div className="contact-btn">
                            <h3>加入我們團隊</h3>
                        </div>
                    </Col>
                    <Col md={3} className='px-4'>
                        <div className="contact-btn">
                            <h3>媒體採訪聯繫</h3>
                        </div>
                    </Col>
                </Row>
                <Contact />
            </Container>
        </section>
    )
}

export default ContactForm