import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Route29Banner = () => {
    return (
        <section className="route29-banner">
            <div className="route29-header mx-2 mb-5">
                <h1>29K經典路線 <span className='theme-color'><em> The Ride</em></span></h1>
            </div>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='px-3'>
                        <h3 className='font-italic mx-4 my-3'><em>組別資訊</em></h3>
                        <ul>
                            <li>報名費用：NT$：3,500元</li>
                            <li className='text-danger'>競賽資訊：本組別無設置任何競賽路段</li>
                            <li>報名資格：身心健康且具有良好、純熟單車騎乘技術及經驗，體能適應強度可以在3小時內完騎，並無條件願意踏實遵守道路交通規則與大會交通維運工作人員引導、安全騎乘者，即符合資格。</li>
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
                                    <td>06:20</td>
                                </tr>
                                <tr>
                                    <td>時間限制</td>
                                    <td>3小時</td>
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

export default Route29Banner