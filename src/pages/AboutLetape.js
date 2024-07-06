import React from 'react';
import '../styles.css/about-letape.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Banner from '../components/AboutLetape/Banner';
import Data from '../components/AboutLetape/Data';
import Description from '../components/AboutLetape/Description';
import PhotoGallery from '../components/AboutLetape/PhotoGallery';

const AboutLetape = () => {
    return (
        <div className='about-letape'>
            <Banner />
            <Data />
            <Description />
            <PhotoGallery />
        </div>
    )
}

export default AboutLetape