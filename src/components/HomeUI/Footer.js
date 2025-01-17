import { Container, Row, Col } from "react-bootstrap"
// import { MailchimpForm } from "../HomeUI/MailchimpForm"
import logo from '../../assets/img/logo.png';
import '../../App.css';

import NavIcon1 from '../../assets/img/nav-icon1.svg';
import NavIcon2 from '../../assets/img/nav-icon2.svg';
import NavIcon3 from '../../assets/img/nav-icon3.svg';

import PartnerSection from "./PartnerSection";

export const Footer = ({language}) => {
    
    return (
        <footer className="footer">
        <PartnerSection language={language} />
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm /> */}
                    <Col sm={6}>
                        <img className="footer-logo" src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} text-center text-sm-end>
                        <div className="social-icon">
                            <a href="https://www.youtube.com/@letapesunmoonlake" target="_blank" rel='noreferrer noopener'><img className="footer-icon" src={NavIcon1} alt=""/></a>
                            <a href="https://www.facebook.com/letapesunmoonlake/?locale=zh_TW" target='_blank' rel='noreferrer noopener'><img className="footer-icon" src={NavIcon2} alt=""/></a>
                            <a href="https://www.instagram.com/letapesunmoonlake/" target='_blank' rel='noreferrer noopener'><img className="footer-icon" src={NavIcon3} alt=""/></a>
                        </div>
                    </Col>
                    <p className="text-center">© 2024 Body-Marketing. All rights reserved. <a href="http://alcoholic-marketing.com" target="_blank" rel="noopener noreferrer">Powered by Alcoholic Inc.</a></p>
                </Row>
            </Container>
        </footer>
    )
}