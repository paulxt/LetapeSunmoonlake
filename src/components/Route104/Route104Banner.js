import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Route104Banner = () => {
    return (
        <section className="route104-banner">
            <div className="route104-header mx-2 mb-5">
                <h1>104K挑戰路線 <span className='theme-color'><em> The Race</em></span></h1>
            </div>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='px-3'>
                        <h3 className='font-italic mx-4 my-3'><em>組別資訊</em></h3>
                        <ul>
                            <li>報名費用：NT$：4,500元</li>
                            <li>競賽資訊：本組別設置2個爬坡王競賽路段</li>
                            <li>報名資格：身心健康且具有良好、純熟單車騎乘技術及經驗，體能適應強度可以在6小時內完騎，並無條件願意踏實遵守道路交通規則與大會交通維運工作人員引導、安全騎乘者，即符合資格。</li>
                            <p className='danger'>＊104公里挑戰組限16歲以上報名，未滿16歲參加者須附監護人同意書</p>
                            <li>計時方式：晶片計時</li>
                        </ul>
                    </Col>
                    <Col md={6} className='justify-content-center px-5'>
                        <table>
                            <thead>
                                <tr>
                                    <th>重要時程表</th>
                                    <th>時間</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>集合時間</td>
                                    <td>05:00-05:30</td>
                                </tr>
                                <tr>
                                    <td>鳴槍時間</td>
                                    <td>06:00</td>
                                </tr>
                                <tr>
                                    <td>時間限制</td>
                                    <td>6小時</td>
                                </tr>
                                <tr>
                                    <td>衣物保管時間</td>
                                    <td>05：00-13：30</td>
                                    </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Route104Banner