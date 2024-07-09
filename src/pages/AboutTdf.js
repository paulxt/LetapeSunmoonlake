import React from 'react';
import '../styles.css/about-tdf1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Banner from '../components/AboutTdf/Banner';
import Timeline from '../components/AboutTdf/Timeline';
import Jersey from '../components/AboutTdf/Jersey';
import PhotoGallery from '../components/AboutTdf/PhotoGallery.tsx';

const AboutTdf = ({language}) => {
    return (
        <div className='about-tdf'>
            <Banner language={language} />
            <Timeline language={language} />
            <Jersey language={language} />
            <PhotoGallery language={language} />
        </div>
    )
}

export default AboutTdf