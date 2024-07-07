import React, { useState} from 'react'
import { Col } from 'react-bootstrap'

//Photo Gallery
import LightBox from 'yet-another-react-lightbox';
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins';
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

//components
import Photo from './Photo.tsx';

//images slides2
import PhotoSlides2Img1 from '../../assets/img/media-page-slides2-img1.png';
import PhotoSlides2Img2 from '../../assets/img/media-page-slides2-img2.png';
import PhotoSlides2Img3 from '../../assets/img/media-page-slides2-img3.png';
import PhotoSlides2Img4 from '../../assets/img/media-page-slides2-img4.png';
import PhotoSlides2Img5 from '../../assets/img/media-page-slides2-img5.png';
import PhotoSlides2Img6 from '../../assets/img/media-page-slides2-img6.png';
import PhotoSlides2Img7 from '../../assets/img/media-page-slides2-img7.png';
import PhotoSlides2Img8 from '../../assets/img/media-page-slides2-img8.png';
import PhotoSlides2Img9 from '../../assets/img/media-page-slides2-img9.png';
import PhotoSlides2Img10 from '../../assets/img/media-page-slides2-img10.png';
import PhotoSlides2Img11 from '../../assets/img/media-page-slides2-img11.png';
import PhotoSlides2Img12 from '../../assets/img/media-page-slides2-img12.png';
import PhotoSlides2Img13 from '../../assets/img/media-page-slides2-img13.png';
import PhotoSlides2Img14 from '../../assets/img/media-page-slides2-img14.png';
import PhotoSlides2Img15 from '../../assets/img/media-page-slides2-img15.png';
import PhotoSlides2Img16 from '../../assets/img/media-page-slides2-img16.png';
import PhotoSlides2Img17 from '../../assets/img/media-page-slides2-img17.png';
import PhotoSlides2Img18 from '../../assets/img/media-page-slides2-img18.png';
import PhotoSlides2Img19 from '../../assets/img/media-page-slides2-img19.png';
import PhotoSlides2Img20 from '../../assets/img/media-page-slides2-img20.png';
import PhotoSlides2Img21 from '../../assets/img/media-page-slides2-img21.png';
import PhotoSlides2Img22 from '../../assets/img/media-page-slides2-img22.png';
import PhotoSlides2Img23 from '../../assets/img/media-page-slides2-img23.png';
import PhotoSlides2Img24 from '../../assets/img/media-page-slides2-img24.png';
import PhotoSlides2Img25 from '../../assets/img/media-page-slides2-img25.png';
import PhotoSlides2Img26 from '../../assets/img/media-page-slides2-img26.png';
import PhotoSlides2Img27 from '../../assets/img/media-page-slides2-img27.png';
import PhotoSlides2Img28 from '../../assets/img/media-page-slides2-img28.png';

const slides2 = [
    {
        src: PhotoSlides2Img1,
        title: "",
        description: "",
    },
    {
        src: PhotoSlides2Img2,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img3,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img4,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img5,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img6,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img7,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img8,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img9,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img10,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img11,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img12,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img13,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img14,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img15,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img16,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img17,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img18,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img19,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img20,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img21,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img22,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img23,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img24,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img25,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img26,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img27,
        title: "",
        description: "",
    },{
        src: PhotoSlides2Img28,
        title: "",
        description: "",
    },
]

const PhotoSlides2 = () => {
    const [index, setIndex] = useState(-1);

    return (
        <Col>
            <LightBox 
                plugins={[Counter, Thumbnails]}
                counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={slides2}
                    />
            <Photo data={slides2} onClick={(currentIndex) => setIndex(currentIndex)}/>
        </Col>
    )
}

export default PhotoSlides2