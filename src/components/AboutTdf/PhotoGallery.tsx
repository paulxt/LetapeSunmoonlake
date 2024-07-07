import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//images
import PhotoGalleyImg1 from '../../assets/img/about-tdf-photo-gallery-image1.jpg';
import PhotoGalleyImg2 from '../../assets/img/about-tdf-photo-gallery-image2.jpg';
import PhotoGalleyImg3 from '../../assets/img/about-tdf-photo-gallery-image3.jpg';
import PhotoGalleyImg4 from '../../assets/img/about-tdf-photo-gallery-image4.jpg';
import PhotoGalleyImg5 from '../../assets/img/about-tdf-photo-gallery-image5.jpg';
import PhotoGalleyImg6 from '../../assets/img/about-tdf-photo-gallery-image6.jpg';
import PhotoGalleyImg7 from '../../assets/img/about-tdf-photo-gallery-image7.jpg';
import PhotoGalleyImg8 from '../../assets/img/about-tdf-photo-gallery-image8.jpg';
import PhotoGalleyImg9 from '../../assets/img/about-tdf-photo-gallery-image9.jpg';
import PhotoGalleyImg10 from '../../assets/img/about-tdf-photo-gallery-image10.jpg';
import PhotoGalleyImg11 from '../../assets/img/about-tdf-photo-gallery-image11.jpg';
import PhotoGalleyImg12 from '../../assets/img/about-tdf-photo-gallery-image12.jpg';
import PhotoGalleyImg13 from '../../assets/img/about-tdf-photo-gallery-image13.jpg';
import PhotoGalleyImg14 from '../../assets/img/about-tdf-photo-gallery-image14.jpg';
import PhotoGalleyImg15 from '../../assets/img/about-tdf-photo-gallery-image15.jpg';
import PhotoGalleyImg16 from '../../assets/img/about-tdf-photo-gallery-image16.jpg';
import PhotoGalleyImg17 from '../../assets/img/about-tdf-photo-gallery-image17.jpg';
import PhotoGalleyImg18 from '../../assets/img/about-tdf-photo-gallery-image18.jpg';
import PhotoGalleyImg19 from '../../assets/img/about-tdf-photo-gallery-image19.jpg';
import PhotoGalleyImg20 from '../../assets/img/about-tdf-photo-gallery-image20.jpg';
import PhotoGalleyImg21 from '../../assets/img/about-tdf-photo-gallery-image21.jpg';
import PhotoGalleyImg22 from '../../assets/img/about-tdf-photo-gallery-image22.jpg';
import PhotoGalleyImg23 from '../../assets/img/about-tdf-photo-gallery-image23.jpg';
import PhotoGalleyImg24 from '../../assets/img/about-tdf-photo-gallery-image24.jpg';
import PhotoGalleyImg25 from '../../assets/img/about-tdf-photo-gallery-image25.jpg';

import Photo from './Photo.tsx';
import LightBox from 'yet-another-react-lightbox';
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins';
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const slides = [
    {
        src: PhotoGalleyImg1,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg2,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg3,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg4,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg5,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg6,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg7,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg8,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg9,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg10,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg11,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg12,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg13,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg14,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg15,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg16,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg17,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg18,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg19,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg20,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg21,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg22,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg23,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg24,
        title: "",
        description: "",
    },
    {
        src: PhotoGalleyImg25,
        title: "",
        description: "",
    },
]

const PhotoGallery = () => {

    const [index, setIndex] = useState(-1);

    return (
        <section className="photo-gallery mb-5">
            <Container>
                <Row className='align-items-center'>
                    <h2 className='text-center'>珍貴的相片集錦</h2>
                    <Col>
                        <LightBox 
                            plugins={[Counter, Thumbnails]}
                            counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                            open={index >= 0}
                            close={() => setIndex(-1)}
                            index={index}
                            slides={slides}
                        />
                        <Photo data={slides} onClick={(currentIndex) => setIndex(currentIndex)} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PhotoGallery