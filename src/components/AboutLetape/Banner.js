import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//image 
import BannerImg1 from '../../assets/img/about-letape-banner-img1.jpg';
import BannerImg2 from '../../assets/img/about-letape-banner-img2.png';

const Banner = ( {language} ) => {
    return (
        <section className="about-letape-banner">
            <div className="about-letape-header">
                <h1>{language === "Chinese" ? "L’Étape是什麼？" : "What is L’Étape ? "}</h1>
            </div>
            <div className="banner-2">
                <img src={BannerImg1} alt="" />
            </div>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <div className="banner-bx">
                            <img className='text-center' src={BannerImg2} alt="" />
                            <p className='text-white banner-des'>{language === "Chinese" ? "環法自行車賽被譽為世界上最偉大的自行車比賽，每年都吸引來自世界各地的車迷熱情追隨。因此，環法自行車挑戰賽 L'Étape 系列應運而生，現已擴展至多個國際地點，橫跨全球各地絕美自行車路線，讓全民可以共享環法的獨特氛圍。" : "The Tour de France is hailed as the greatest bicycle race in the world, attracting passionate fans from around the globe each year. As a result, the Tour de France Challenge (L'Étape) series was born, expanding to multiple international locations. Spanning beautiful cycling routes worldwide, these events allow everyone to experience the unique atmosphere of the Tour de France."}</p>
                        </div>
                    </Col>
                    <Col md={6} className='bg-theme-color'>
                        <div className="banner-bx">
                            <h3 className='text-center text-black mb-4'>{language === "Chinese" ? "唯一能讓您感覺像環法冠軍車手，並享受環法自行車賽獨特氛圍的運動賽事系列" : "THE OFFICIAL TOUR DE FRANCE SPORTIVE SERIES DESIGNED TO MAKE YOU FEEL LIKE A TOUR DE FRANCE RIDER IN THE MOST BEAUTIFUL PLACES IN THE WORLD"}</h3>
                            <hr />
                            <p className='text-black text-center'>Christian Prudhomme</p>
                            <p className='text-secondary text-center'>Tour de France director</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner