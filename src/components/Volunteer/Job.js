import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//images
import JobHeader from '../../assets/img/volunteer-header-img.png';
import Icon1 from '../../assets/img/volunteer-job-icon1.png';
import Icon2 from '../../assets/img/volunteer-job-icon2.png';

const Job = () => {
    return (
        <section className="volunteer-job">
            <Container>
                {/* <h2>想要以另外一種形式參與環法挑戰賽嗎？</h2>
                <h3>JOIN US AND EXPERIENCE THE TOUR DE FRANCE LEGEND</h3> */}
                <img src={JobHeader} alt="" />
                <Row>
                    <Col size={12}>
                        <h2 className='text-center'><span><img src={Icon1} alt="" /></span>擔任環法挑戰賽志工，你有機會負責...</h2>
                        <p className='text-odd'><span><img src={Icon2} alt="" /></span>成為賽道沿線交通管制團隊志工，負責維護比賽與活動進行的流暢與安全。</p>
                        <p className="text-even"><span><img src={Icon2} alt="" /></span>負責各補給站的物資發送、補貨，讓經過的騎乘自行車手都有足夠的補給品</p>
                        <p className='text-odd'><span><img src={Icon2} alt="" /></span>加入環法小鎮歷史區，指引現場的參加者認識、體驗環法的歷史氛圍</p>
                        <p className="text-even"><span><img src={Icon2} alt="" /></span>在大會服務區協助處理參賽者的疑難雜症，幫助提升賽事服務體驗！</p>
                        <p className='text-odd'><span><img src={Icon2} alt="" /></span>擔任各攤位工作人員，負責協助合作夥伴官方體驗、美食服務區</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Job