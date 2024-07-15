import React from 'react'
import '../styles.css/become-part.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Banner from '../components/BecomePart/Banner'
import { Contact } from '../components/HomeUI/Contact';

const BecomePart = ({language}) => {
    return (
        <div className='become-part'>
            <Banner language={language} />
            <Contact/>
        </div>
    )
}

export default BecomePart