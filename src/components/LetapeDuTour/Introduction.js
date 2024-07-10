import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';



const Introduction = ({language}) => {
    return (
        <section className="letape-du-tour-introduction">
            <Container>
                <Row className='aling-items-center mt-5'>
                    <Col>
                        <h3 className='text-center'>{language === "Chinese"? "你是頂尖的自行車選手嗎？" : "Are you a top cyclist?"}</h3>
                        {language === "Chinese" ? <div>
                            <p className='text-center mt-5'>你是否曾想過贏得一場環法自行車賽系列比賽？ 本計畫專為想展現生涯最佳狀態的頂尖車手設計。</p>
                            <p className='text-center'>計畫將自動使你有資格參加環法自行車賽 L'Etape 錦標賽。</p>
                            <p className='text-center mb-5'>你將從本站出發，與最具競爭力的車手一同比賽，還有機會可在比賽村享受獨特的 L'Etape 冠軍賽資格賽待遇。</p>
                        </div> : <div>
                                <p className="text-center mt-5">Have you ever dreamed of winning a stage in the Tour de France series? </p>
                                <p className='text-center'>This program is designed specifically for elite cyclists looking to achieve their peak performance.</p>
                                <p className='text-center'>The program automatically qualifies you to participate in the Tour de France Cycling Series L'Etape Championship.</p>
                                <p className='text-center mb-5'>Starting from this stage, you'll compete alongside the most competitive cyclists and have the opportunity to enjoy the unique experience of the L'Etape Championship Qualifying Race in the race village.</p>
                        </div>}
                        
                        <iframe width="1120" height="630" src="https://www.youtube.com/embed/TpuFMseiYkY?si=dI1lzZmvNpxzH_cX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Col>
                </Row>
                <Row className='aling-items-center mt-5'>
                    <Col md={6}>
                        <h3 className='text-stroke text-center'>L’Étape REWARD</h3>
                        <p className='px-5 mt-5'>{language === "Chinese"? "參加世界各地的任一L'Etape by Tour de France賽事，您將獲得L'Etape du Tour法國站的獨家優先報名權" : "by participating in one of l'Etape by Tour de France events all arround the word, you will be granted an exclusive registration period for L'Etape du Tour in France."}</p>
                    </Col>
                    <Col md={6} className='bg-white text-black'>
                        <h3 className='text-stroke-reverse text-center'>L’Étape Championship</h3>
                        <p className='px-5 mt-5'>{language === "Chinese"? "在全球L’ÉTape 各站長距離組中總體（男子/女子）排名前三名，將獲得資格參加法國的L'Etape du Tour 錦標賽" : "by finishing in the top 3 overall (male/female) of the RACE, you will qualify for and get free regisration for L'Etape du Tour in France."}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Introduction