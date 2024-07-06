import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

import newsBar1 from '../../assets/img/latest-news-img1.jpg';
import newsBar2 from '../../assets/img/latest-news-img2.jpg';
import newsBar3 from '../../assets/img/latest-news-img3.jpg';

import colorSharp from '../../assets/img/color-sharp.png';

export const LatestNews = () => {

    const responsive = {
        //the naming can be any, depends on you.
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <seciton className="latest-news" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="news-bx">
                            <h2>最新消息</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quasi quia, consequuntur accusantium quaerat mollitia?</p>
                            <Carousel responsive={responsive} infinite={true} className="news-slider" >
                                <div className="item">
                                    <img src={newsBar1} alt="NewsImage" />
                                    <h5>Web Developer</h5>
                                </div>
                                <div className="item">
                                    <img src={newsBar2} alt="NewsImage" />
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={newsBar3} alt="NewsImage" />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <img src={newsBar1} alt="NewsImage" />
                                    <h5>Web Developer</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </seciton>
    )

}