import React from 'react';
import '../../src/styles.css/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Banner from '../components/Contact/Banner';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const Contact = ({language}) => {
    return (
        <div className='contact-page'>
            <Banner language={language} />
            <ContactForm language={language} />
            <ContactInfo language={language} />
        </div>
    )
}

export default Contact