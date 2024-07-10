import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
//image
import Photo1 from '../../assets/img/about-letape-photo1.png';
import Photo2 from '../../assets/img/about-letape-photo2.png';
import Photo3 from '../../assets/img/about-letape-photo3.png';
import Photo4 from '../../assets/img/about-letape-photo4.png';
import Photo5 from '../../assets/img/about-letape-photo5.png';
import Photo6 from '../../assets/img/about-letape-photo6.png';
import Photo7 from '../../assets/img/about-letape-photo7.png';
import Photo8 from '../../assets/img/about-letape-photo8.png';
import Photo9 from '../../assets/img/about-letape-photo9.png';
import Photo10 from '../../assets/img/about-letape-photo10.png';
import Photo11 from '../../assets/img/about-letape-photo11.png';
import Photo12 from '../../assets/img/about-letape-photo12.png';
import Photo13 from '../../assets/img/about-letape-photo13.png';
import Photo14 from '../../assets/img/about-letape-photo14.png';
import Photo15 from '../../assets/img/about-letape-photo15.png';
import Photo16 from '../../assets/img/about-letape-photo16.png';
import Photo17 from '../../assets/img/about-letape-photo17.png';
import Photo18 from '../../assets/img/about-letape-photo18.png';
import Photo19 from '../../assets/img/about-letape-photo19.png';
import Photo20 from '../../assets/img/about-letape-photo20.png';
import Photo21 from '../../assets/img/about-letape-photo21.png';
import Photo22 from '../../assets/img/about-letape-photo22.png';
import Photo23 from '../../assets/img/about-letape-photo23.png';


const slides = [
    {
        src: Photo1,
    },
    {
        src: Photo2,
    },
    {
        src: Photo3,
    },
    {
        src: Photo4,
    },
    {
        src: Photo5,
    },
    {
        src: Photo6,
    },
    {
        src: Photo7,
    },
    {
        src: Photo8,
    },
    {
        src: Photo9,
    },
    {
        src: Photo10,
    },
    {
        src: Photo11,
    },
    {
        src: Photo12,
    },
    {
        src: Photo13,
    },
    {
        src: Photo14,
    },
    {
        src: Photo15,
    },
    {
        src: Photo16,
    },
    {
        src: Photo17,
    },
    {
        src: Photo18,
    },
    {
        src: Photo19,
    },
    {
        src: Photo20,
    },
    {
        src: Photo21,
    },
    {
        src: Photo22,
    },
    {
        src: Photo23,
    },
]

const PhotoGallery = ({language}) => {

    const responsive = {
        //the naming can be any, depends on you.
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <section className="about-letape-photogallery">
            <Container>
                <Row className='align-items-center'>
                    {language === "Chinese" ? <h2>珍貴的照片集錦</h2> : <h2>Explore L’Étape Series</h2>}
                    <Col>
                        <div className="media">
                            <iframe src="https://www.youtube.com/embed/QNwZOyDAagE?si=MDZgTDVL3gRfeyDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </Col>
                </Row>
                <Row className='align-items-center mb-5'>
                    <Carousel showDots={true}autoPlay={true}
                        swipeable={true} draggable={true} responsive={responsive} infinite={true}
                        dotListClass="custom-dot-list-style" className='photo-slider' activeIndex={index} onSelect={handleSelect}>
                        {
                            slides.map((slide, index) => (
                                <div className='item' key={index}>
                                    <img className='d-block' src={slide.src} alt="" />
                                </div>
                            ))
                        }
                    </Carousel>
                </Row>
            </Container>
        </section>
    )
}

export default PhotoGallery