import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const RouteContent = ({language}) => {
    return (
        <section className="route-content mb-5">
            <h5><span>{language === "Chinese" ? "路線內容" : "Details"}</span></h5>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Num</th>
                                    <th>Dist</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>0.0</td>
                                    <td>{language === "Chinese" ? "Start of route/向山遊客中心" : "Start of route/Xiangshan Visitor Center"}</td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>0.2</td>
                                    <td>{language === "Chinese" ? "向右轉進入中山路/ 玉山景觀公路水里玉山線/ 台21線" : "Turn right onto Zhongshan Road/Yushan Scenic Highway Shui Li Yushan Line/Route 21"}</td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>4.1</td>
                                    <td>{language === "Chinese" ? "靠右行駛" : "Keep right"}</td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>4.4</td>
                                    <td>{language === "Chinese" ? "於中山路/ 玉山景觀公路水里玉山線/ 台21線靠右行駛" : "Keep right on Zhongshan Road/Yushan Scenic Highway Shui Li Yushan Line/Route 21"}</td>
                                </tr>
                                <tr>
                                    <td>5.</td>
                                    <td>5.1</td>
                                    <td>{language === "Chinese" ? "於中正 路/ 環湖公 路/ 台21甲線靠右 行駛" : "Keep right on Zhongzheng Road/Huanhu Road/Route 21A"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col md={6}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Num</th>
                                    <th>Dist</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td>6.</td>
                                    <td>5.2</td>
                                    <td>{language === "Chinese" ? "向右轉 ，繼續沿中正路/ 環湖公路/ 台21甲線前進" : "Turn right, continue on Zhongzheng Road/Huanhu Road/Route 21A"}</td>
                                </tr>
                                <tr>
                                    <td>7.</td>
                                    <td>26.3</td>
                                    <td>{language === "Chinese" ? "向右轉 進入玉山景觀公路水里玉山 線/ 台21線" : "Turn right onto Yushan Scenic Highway Shui Li Yushan Line/Route 21"}</td>
                                </tr>
                                <tr>
                                    <td>8.</td>
                                    <td>29.3</td>
                                    <td>{language === "Chinese" ? "向右轉" : "Turn right"}</td>
                                </tr>
                                <tr>
                                    <td>9.</td>
                                    <td>29.3</td>
                                    <td>{language === "Chinese" ? "向右轉" : "Turn right"}</td>
                                </tr>
                                <tr>
                                    <td>10.</td>
                                    <td>29.5</td>
                                    <td>{language === "Chinese" ? "End of route/向山遊客中心" : "End of route/Xiangshan Visitor Center"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default RouteContent