import React from 'react';
import '../styles.css/about-letape.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Banner from '../components/AboutLetape/Banner';
import Data from '../components/AboutLetape/Data';
import Description from '../components/AboutLetape/Description';
import PhotoGallery from '../components/AboutLetape/PhotoGallery';

const AboutLetape = ({language}) => {
    return (
        <div className='about-letape'>
            <Banner language={language} />
            <Data language={language} />
            <Description language={language} />
            <PhotoGallery language={language} />
        </div>
    )
}

export default AboutLetape