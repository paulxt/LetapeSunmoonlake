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
                                    <td>0.3</td>
                                    <td>{language === "Chinese" ? "向右轉進入中山路/玉山景觀公路水里玉山線/台21線" : ""}</td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>5.2</td>
                                    <td>{language === "Chinese" ? "向左轉進入中潭公路/玉山景觀公路水里玉山線/ 台21" : "Turn right onto Zhongshan Road/Yushan Scenic Highway Shui Li Yushan Line/Route 21"}</td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>5.2</td>
                                    <td>{language === "Chinese" ? "向左轉，繼續沿中潭公路/玉山景觀公路水里玉山線/台21線前進" : "Turn left onto Zhongtan Highway/Yushan Scenic Highway Shui Li Yushan Line/Route 21"}</td>
                                </tr>
                                <tr>
                                    <td>5.</td>
                                    <td>8.6</td>
                                    <td>{language === "Chinese" ? "繼續直行走魚池街" : "Continue straight onto Yuchi Street"}</td>
                                </tr>
                                <tr>
                                    <td>6.</td>
                                    <td>11.1</td>
                                    <td>{language === "Chinese" ? "接著走華山巷/ 131縣道" : "Continue onto Huashan Lane/County Route 131"}</td>
                                </tr>
                                <tr>
                                    <td>7.</td>
                                    <td>21.0</td>
                                    <td>{language === "Chinese" ? "向右轉進入和平東路" : "Turn right onto Heping East Road"}</td>
                                </tr>
                                <tr>
                                    <td>8.</td>
                                    <td>23.2</td>
                                    <td>{language === "Chinese" ? "在第 1個十字路口向左轉，走信義路/埔霧公路/台14" : "At the first intersection, turn left onto Xinyi Road/Puwu Highway/Route 14"}</td>
                                </tr>
                                <tr>
                                    <td>9.</td>
                                    <td>23.8</td>
                                    <td>{language === "Chinese" ? "經過位於右側的李仔哥爌肉飯後向右轉" : "After passing Lizi Ge Kuang Rou Fan on the right, turn right"}</td>
                                </tr>
                                <tr>
                                    <td>10.</td>
                                    <td>29.6</td>
                                    <td>{language === "Chinese" ? "向左轉進入永豐路/投73鄉道" : "Turn left onto Yongfeng Road/Township Route 73"}</td>
                                </tr>
                                <tr>
                                    <td>11.</td>
                                    <td>34.9</td>
                                    <td>{language === "Chinese" ? "向左轉進入向善路/投73鄉道" : "Turn left onto Xiangshan Road/Township Route 73"}</td>
                                </tr>
                                <tr>
                                    <td>12.</td>
                                    <td>35.6</td>
                                    <td>{language === "Chinese" ? "向右轉" : "Turn right"}</td>
                                </tr>
                                <tr>
                                    <td>13.</td>
                                    <td>36.1</td>
                                    <td>{language === "Chinese" ? "接著走善新橋" : "Continue onto Shanxin Bridge"}</td>
                                </tr>
                                <tr>
                                    <td>14.</td>
                                    <td>36.8</td>
                                    <td>{language === "Chinese" ? "在第 1個十字路口向右轉，走中山路四段/中潭公路/台14線" : "At the first intersection, turn right onto Zhongshan Road Section 4/Zhongtan Highway/Route 14"}</td>
                                </tr>
                                <tr>
                                    <td>15.</td>
                                    <td>41.6</td>
                                    <td>{language === "Chinese" ? "向左轉進入中正路四段/北山橋/ 147縣道" : "Turn left onto Zhongzheng Road Section 4/Beishan Bridge/County Route 147"}</td>
                                </tr>
                                <tr>
                                    <td>16.</td>
                                    <td>48.2</td>
                                    <td>{language === "Chinese" ? "向左轉進入港頭巷/ 147縣道" : "Turn left onto Gangtou Lane/County Route 147"}</td>
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
                                    <td>17.</td>
                                    <td>55.8</td>
                                    <td>{language === "Chinese" ? "向右轉進入帝君巷/ 131縣道" : "Turn right onto Dijun Lane/County Route 131"}</td>
                                </tr>
                                <tr>
                                    <td>18.</td>
                                    <td>65.7</td>
                                    <td>{language === "Chinese" ? "向右轉進入民權路" : "Turn right onto Minquan Road"}</td>
                                </tr>
                                <tr>
                                    <td>19.</td>
                                    <td>66.5</td>
                                    <td>{language === "Chinese" ? "經過位於右側的萬味庄山海小吃部後向左急轉" : "After passing Wanweizhuang Shan Hai Snack Shop on the right, make a sharp left turn"}</td>
                                </tr>
                                <tr>
                                    <td>20.</td>
                                    <td>66.9</td>
                                    <td>{language === "Chinese" ? "繼續直行走中山橋/中山路二段/台16線" : "Continue straight onto Zhongshan Bridge/Zhongshan Road Section 2/Route 16"}</td>
                                </tr>
                                <tr>
                                    <td>21.</td>
                                    <td>69.4</td>
                                    <td>{language === "Chinese" ? "繼續直行走水信路一段/台16線" : "Continue straight onto Shuixin Road Section 1/Route 16"}</td>
                                </tr>
                                <tr>
                                    <td>22.</td>
                                    <td>70.4</td>
                                    <td>{language === "Chinese" ? "向左轉進入玉山景觀公路水里玉山線/頂平路/台21線" : "Turn left onto Yushan Scenic Highway Shui Li Yushan Line/Dingping Road/Route 21"}</td>
                                </tr>
                                <tr>
                                    <td>23.</td>
                                    <td>78.2</td>
                                    <td>{language === "Chinese" ? "於環湖公路/台21甲線靠右行駛" : "Keep right onto Huanhu Road/Route 21A"}</td>
                                </tr>
                                <tr>
                                    <td>24.</td>
                                    <td>79.2</td>
                                    <td>{language === "Chinese" ? "在第 1個十字路口向左轉，走信義路/埔霧公路/台14" : "At the first intersection, turn left onto Xinyi Road/Puwu Highway/Route 14"}</td>
                                </tr>
                                <tr>
                                    <td>25.</td>
                                    <td>79.4</td>
                                    <td>{language === "Chinese" ? "向左轉" : "Turn left"}</td>
                                </tr>
                                <tr>
                                    <td>26.</td>
                                    <td>79.4</td>
                                    <td>{language === "Chinese" ? "向左轉進入環湖公路/台21甲線" : "Turn left onto Huanhu Road/Route 21A"}</td>
                                </tr>
                                <tr>
                                    <td>27.</td>
                                    <td>85.3</td>
                                    <td>{language === "Chinese" ? "向右轉，繼續沿環湖公路/台21甲線前進" : "Turn right and continue on Huanhu Road/Route 21A"}</td>
                                </tr>
                                <tr>
                                    <td>28.</td>
                                    <td>99.0</td>
                                    <td>{language === "Chinese" ? "向左轉，繼續沿中正路/環湖公路/台21甲線前進" : "Turn left and continue on Zhongzheng Road/Huanhu Road/Route 21A"}</td>
                                </tr>
                                <tr>
                                    <td>29.</td>
                                    <td>99.0</td>
                                    <td>{language === "Chinese" ? "靠左行駛，進入玉山景觀公路水里玉山線/台21線" : "Keep left onto Yushan Scenic Highway Shui Li Yushan Line/Route 21"}</td>
                                </tr>
                                <tr>
                                    <td>30.</td>
                                    <td>103.9</td>
                                    <td>{language === "Chinese" ? "向左轉" : "Turn left"}</td>
                                </tr>
                                <tr>
                                    <td>31.</td>
                                    <td>103.9</td>
                                    <td>{language === "Chinese" ? "向右轉" : "Turn right"}</td>
                                </tr>
                                <tr>
                                    <td>32.</td>
                                    <td>104.1</td>
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