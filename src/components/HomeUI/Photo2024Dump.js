import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
//image
import Photo1 from '../../assets/img/Letape2024-1.JPG';
import Photo2 from '../../assets/img/Letape2024-2.JPG';
import Photo3 from '../../assets/img/Letape2024-3.JPG';
import Photo4 from '../../assets/img/Letape2024-4.JPG';
import Photo5 from '../../assets/img/Letape2024-5.JPG';
import Photo6 from '../../assets/img/Letape2024-6.JPG';
import Photo7 from '../../assets/img/Letape2024-7.JPG';
import Photo8 from '../../assets/img/Letape2024-8.JPG';
import Photo9 from '../../assets/img/Letape2024-9.JPG';
import Photo10 from '../../assets/img/Letape2024-10.JPG';
import Photo11 from '../../assets/img/Letape2024-11.JPG';
import Photo12 from '../../assets/img/Letape2024-12.JPG';


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
]

const PhotoDump = ({language}) => {

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
        <section className="letape-2024-photo">
            <Container>
                <Row className='align-items-center my-5'>
                    {language === "Chinese" ? <h2 className='fw-bold text-center'>2024 環法挑戰賽活動精華</h2> : <h2 className='fw-bold text-center'>2024 L'Étape Sun Moon Lake Highlights</h2>}
                    <Col>
                        <div className="media mt-3">
                        <iframe src="https://www.youtube.com/embed/wRMCgjPHswA?si=_uxWtnmeEQeGbWXv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default PhotoDump