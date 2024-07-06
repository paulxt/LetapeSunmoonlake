import React from 'react';
import '../../src/styles.css/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Banner from '../components/Contact/Banner';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const Contact = () => {
    return (
        <div className='contact-page'>
            <Banner />
            <ContactForm />
            <ContactInfo />
        </div>
    )
}

export default Contact