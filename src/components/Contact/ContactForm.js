import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Contact } from '../../components/HomeUI/Contact';

const ContactForm = ({language}) => {

    return (
        <section className="contactPage-form">
            <Container>
                <h2 className='text-center'>We’d Love to Hear From You</h2>
                <h4 className='text-center'>{language === "Chinese" ? "我們期待能聽到您的意見！" : "Share Your Ideas with us!"}</h4>
                <Row className='align-items-center mt-5 mb-5'>
                    <Col md={3} className='px-4'>
                        <div className="contact-btn">
                            <h3>{language === "Chinese" ? "需要專人協助" : "Personal Service"}</h3>
                        </div>
                    </Col>
                    <Col md={3} className='px-4'>
                        <div className="contact-btn">
                            <h3>{language === "Chinese" ? "成為我們的合作夥伴" : "Become Partners"}</h3>
                        </div>
                    </Col>
                    <Col md={3} className='px-4'>
                        <div className="contact-btn">
                            <h3>{language === "Chinese" ? "加入我們團隊" : "Volunteer Program"}</h3>
                        </div>
                    </Col>
                    <Col md={3} className='px-4'>
                        <div className="contact-btn">
                            <h3>{language === "Chinese" ? "媒體採訪聯繫" : "Media Interview"}</h3>
                        </div>
                    </Col>
                </Row>
                <Contact />
            </Container>
        </section>
    )
}

export default ContactForm