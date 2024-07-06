import React, { useState} from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

//Photo Gallery
import LightBox from 'yet-another-react-lightbox';
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins';
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Photo from './Photo.tsx';
//images slides1
import PhotoSlides1Img1 from '../../assets/img/media-page-slides1-img1.png';
import PhotoSlides1Img2 from '../../assets/img/media-page-slides1-img2.png';
import PhotoSlides1Img3 from '../../assets/img/media-page-slides1-img3.png';
import PhotoSlides1Img4 from '../../assets/img/media-page-slides1-img4.png';
import PhotoSlides1Img5 from '../../assets/img/media-page-slides1-img5.png';
import PhotoSlides1Img6 from '../../assets/img/media-page-slides1-img6.png';
import PhotoSlides1Img7 from '../../assets/img/media-page-slides1-img7.png';
import PhotoSlides1Img8 from '../../assets/img/media-page-slides1-img8.png';
import PhotoSlides1Img9 from '../../assets/img/media-page-slides1-img9.png';
import PhotoSlides1Img10 from '../../assets/img/media-page-slides1-img10.png';
import PhotoSlides1Img11 from '../../assets/img/media-page-slides1-img11.png';
import PhotoSlides1Img12 from '../../assets/img/media-page-slides1-img12.png';
import PhotoSlides1Img13 from '../../assets/img/media-page-slides1-img13.png';
import PhotoSlides1Img14 from '../../assets/img/media-page-slides1-img14.png';
import PhotoSlides1Img15 from '../../assets/img/media-page-slides1-img15.png';
import PhotoSlides1Img16 from '../../assets/img/media-page-slides1-img16.png';
import PhotoSlides1Img17 from '../../assets/img/media-page-slides1-img17.png';
import PhotoSlides1Img18 from '../../assets/img/media-page-slides1-img18.png';
import PhotoSlides1Img19 from '../../assets/img/media-page-slides1-img19.png';
import PhotoSlides1Img20 from '../../assets/img/media-page-slides1-img20.png';
import PhotoSlides1Img21 from '../../assets/img/media-page-slides1-img21.png';
import PhotoSlides1Img22 from '../../assets/img/media-page-slides1-img22.png';
import PhotoSlides1Img23 from '../../assets/img/media-page-slides1-img23.png';
import PhotoSlides2 from './PhotoSlides2.tsx';

const slides1 = [
    {
        src: PhotoSlides1Img1,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img2,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img3,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img4,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img5,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img6,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img7,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img8,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img9,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img10,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img11,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img12,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img13,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img14,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img15,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img16,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img17,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img18,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img19,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img20,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img21,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img22,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides1Img23,
        title: "",
        description: "",
    },
]

const PhotoGallery = () => {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(-1);

    return (
        <section className="photo-section">
            <Container>
                <Row className='align-items-center mb-5'>
                    <h2 className='theme-color mb-3'><em>相片專區</em></h2>
                    <Col size={12}>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">各國 L’ÉTape 賽事精華</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">環法歷史特區</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <Row className='align-items-center'>
                                        <Col>
                                            <Photo data={slides1} onClick={(currentIndex) => setIndex(currentIndex)}/>
                                            <LightBox 
                                                plugins={[Counter, Thumbnails]}
                                                counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                                                open={index >= 0}
                                                close={() => setIndex(-1)}
                                                index={index}
                                                slides={slides1}
                                                    />
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row className='align-items-center'>
                                        <PhotoSlides2 />
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PhotoGallery