import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LogoNu from '../../assets/img/contact-img.png';

const EventBanner = ({language}) => {
    return (
        <section className='event-banner'>
            <div className="event-header">
                <h1>{language === "Chinese"? "活動辦法" : ""}</h1>
            </div>
            <Container>
                <Row className="align-items-center">
                    <Col className="event-banner-bx mb-5">
                        <h2>L’Étape環法自行車挑戰賽-紐崔萊 • 日月潭站</h2>
                        <h2>【L’Étape by Tour de France-Sun Moon Lake presented by Nutrilite】</h2>
                        <img className='align-self-center mt-5' src={LogoNu} alt="" />
                        <p className='mt-5'>{language === "Chinese"? "你也想感受環法傳奇嗎？" : "Do you want to experience the legend of the Tour de France?"}</p>
                        <p>{language === "Chinese"? "你能想像有一天與環法車手一樣，馳騁在全世界各地的絕美自行車路線！" : "Can you imagine one day racing on the world's most beautiful cycling routes just like Tour de France riders?"}</p>
                        <p>{language === "Chinese"? "2024年首度在日月潭引進環法官方認證挑戰賽 L’Étape by Tour de France，環法專家認證路線、移植國際賽事規格、現場環法小鎮歷史村，共同見證體驗環法氛圍、前所未有報名尊寵禮盒，還有機會與傳奇車手見面聽他分享環法歷程與故事等，年底最受矚目自行車賽事等你來挑戰！" : "In 2024, for the first time, the official Tour de France certified challenge, L’Étape by Tour de France, is coming to Sun Moon Lake. With a route certified by Tour de France experts, international event standards, and an onsite Tour de France-themed historical village, you can immerse yourself in the authentic Tour de France atmosphere. Enjoy an unprecedented registration gift box and even the opportunity to meet legendary riders and hear their Tour de France stories. The most anticipated cycling event of the year awaits your challenge!"}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EventBanner