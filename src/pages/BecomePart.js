import React from 'react'
import '../styles.css/become-part.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Banner from '../components/BecomePart/Banner'
import { Contact } from '../components/HomeUI/Contact';

const BecomePart = () => {
    return (
        <div className='become-part'>
            <Banner />
            <Contact />
        </div>
    )
}

export default BecomePart