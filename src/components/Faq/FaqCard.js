import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const FaqCard = ({ no, title, ans, index }) => {
    
    const [open, setOpen] = useState(false)


    return (
        <Col sm={12} className='my-1 faq-bx'>
            <Accordion defaultActiveKey="0" alwaysOpen>
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>{no}. {title}</Accordion.Header>
                    <Accordion.Body>
                        {ans}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
    )
}

export default FaqCard