import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TitleIcon from '../../assets/img/title-icon.png';

import EventInfoIcon1 from '../../assets/img/104k-icon.png';
import EventInfoIcon2 from '../../assets/img/29k-icon.png';

import EventInfoDownloadImg1 from '../../assets/img/event-info-download-img1.png';
import EventInfoDownloadImg2 from '../../assets/img/event-info-download-img2.png';
import EventInfoDownloadImg3 from '../../assets/img/event-info-download-img3.png';
import EventInfoDownloadImg4 from '../../assets/img/event-info-download-img4.png';

const EventInfo = () => {
    return (
        <section className="event-info">
            <Container>
                <Row className='align-items-center'>
                    <Col className='event-info-col'>
                        <h3 className='event-title'><span><img className='title-icon' src={TitleIcon} alt="" /></span>活動資訊</h3>
                        <ul>
                            <li>活動日期：2024年11月30日（六）</li>
                            <li>報名日期：2024/6/28（五）中午12:00起至2024/8/30（五）止</li>
                            <li>活動會場：日月潭向山遊客中心</li>
                            <li>報名資格：身心健康且具有良好、純熟單車騎乘技術及經驗，體能適應強度可以在6小時內完騎，並無條件願意踏實遵守道路交通規則與大會交通維運工作人員引導、安全騎乘者，即符合資格。</li>
                            <p className='danger'>＊104公里挑戰組限16歲以上報名，未滿16歲參加者須附監護人同意書</p>
                        </ul>
                    </Col>
                </Row>
                <Row className='align-items-center'>
                    <Col md={3} sm={6} size={12}>
                        <a href="#">
                            {/* 選手手冊下載 */}
                            <img className='download-btn' src={EventInfoDownloadImg1} alt="" />
                        </a>
                    </Col>
                    <Col md={3} sm={6} size={12}>
                        <a href="#">
                            {/* 活動簡章下載 */}
                            <img className='download-btn' src={EventInfoDownloadImg2} alt="" />
                        </a>
                    </Col>
                    <Col md={3} sm={6} size={12}>
                        <a href="https://bao-ming.com/eb/content/6179#29049" target='_blank'> 
                            {/* 報名 */}
                            <img className='download-btn' src={EventInfoDownloadImg3} alt="" />
                        </a>
                    </Col>
                    <Col md={3} sm={6} size={12}>
                        <a href="https://docs.google.com/document/d/1Zh0c2vFh3CU0lLCosdDmeIjjiYHXKqsX/edit?usp=sharing&ouid=101333889490553351737&rtpof=true&sd=true" target='_blank'>
                            {/* 家長同意書 */}
                            <img className='download-btn' src={EventInfoDownloadImg4} alt="" />
                        </a>
                    </Col>
                </Row>
                <Row className='align-items-center'>
                    <Col className='event-info-col mt-5'>
                        <h3 className='event-title'><span><img className='title-icon' src={TitleIcon} alt="" /></span>報名方式<span><img className='event-info-icon' src={EventInfoIcon1} alt="" /></span><span><img className='event-info-icon' src={EventInfoIcon2} alt="" /></span></h3>
                        <ul className='ul-decimal'>
                            <li>本活動一律採<a href="https://bao-ming.com/eb/content/6179#29049" target='_blank'>伊貝特線上報名</a></li>
                            <li>請審慎填寫報名資料，凡完成報名手續不得要求更改比賽組別、紀念車衣尺寸。</li>
                            <li>本活動採取以下三種退費方案，欲申請退費者請填寫表單：<br/><span>（<a href="https://forms.gle/bQsa2nvfSr79cBXL8" target='_blank'>https://forms.gle/bQsa2nvfSr79cBXL8</a> ）</span></li>
                        </ul>
                        <ul>
                            <li>完成繳費後7日內可申請退還80%報名費用及郵寄費用</li>
                            <li>自完成繳費7日後至主辦單位寄送物資期間，可申請退還60%報名費用及郵寄費用</li>
                            <li>主辦單位寄出物資後，若因天災、戰爭、服兵役或各種非人為之不可抗力因素，將退還50%報名費用，其餘因素將無法受理退費，敬請見諒。</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EventInfo