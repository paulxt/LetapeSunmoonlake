import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const RouteContent = () => {
    return (
        <section className="route-content mb-5">
            <h5><span>路線內容</span></h5>
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
                                    <td>Start of route/向山遊客中心</td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>0.2</td>
                                    <td>向右轉進入中山路/ 玉山景觀公路水里玉山線/ 台21線</td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>4.1</td>
                                    <td>靠右行駛</td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>4.4</td>
                                    <td>於中山路/ 玉山景觀公路水里玉山線/ 台21線靠右行駛 </td>
                                </tr>
                                <tr>
                                    <td>5.</td>
                                    <td>5.1</td>
                                    <td>於中正 路/ 環湖公 路/ 台21甲線靠右 行駛 </td>
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
                                    <td>向右轉 ，繼續沿中正路/ 環湖公路/ 台21甲線前進 </td>
                                </tr>
                                <tr>
                                    <td>7.</td>
                                    <td>26.3</td>
                                    <td>向右轉 進入玉山景觀公路水里玉山 線/ 台21線 </td>
                                </tr>
                                <tr>
                                    <td>8.</td>
                                    <td>29.3</td>
                                    <td>向右轉</td>
                                </tr>
                                <tr>
                                    <td>9.</td>
                                    <td>29.3</td>
                                    <td>向右轉</td>
                                </tr>
                                <tr>
                                    <td>10.</td>
                                    <td>29.5</td>
                                    <td>End of route/向山遊客中心</td>
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