import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";

import contactImg from '../../assets/img/contact-img.png';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        const templateParams = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            message: message,
        }
        
        const serviceID = process.env.REACT_APP_SERVICE_ID;
        const templateID = process.env.REACT_APP_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;


        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((res) => {
                setFirstName('');
                setLastName('');
                setPhone('');
                setEmail('');
                setMessage('');
                setStatus({ success: true, message: "Message sent successfully" });
            })
            .catch((err) => {
                setStatus({ success: false, message: "Something went wrong, please try again later." });
        })
        setButtonText("Send");
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={4}>
                        <img src={contactImg} alt="Contact-us" />
                    </Col>
                    <Col md={8}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={firstName} placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={lastName} placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea rows="6" sm={12} value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>
                                                {status.message}
                                            </p>
                                        </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}