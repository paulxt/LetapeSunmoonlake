import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import LetapeSunmoonlakeDesImg1 from '../../assets/img/letape-sunmoonlake-desc-img1.jpg';
import LetapeSunmoonlakeDesImg2 from '../../assets/img/letape-sunmoonlake-desc-img2.jpg';
import LetapeSunmoonlakeDesImg3 from '../../assets/img/letape-sunmoonlake-desc-img3.jpg';
import LetapeSunmoonlakeDesImg4 from '../../assets/img/letape-sunmoonlake-desc-img4.jpg';

const Desc = ({language}) => {
    return (
        <section className="letape-sunmoonlake-desc">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center">
                        <h2>{language === "Chinese" ? "島嶼之心。世外桃源" : "Heart of Island"}</h2>
                        {language === "Chinese" ? <p>
                            坐擁山水繚繞的天然名勝湖景 <br />
                            享譽全球的環潭自行車路線 <br />
                            CNN評選為「世界10大最美自行車道」
                        </p> : <p>
                            Nestled amidst the mountains and surrounded by natural scenic beauty, Sun Moon Lake is a renowned global cycling route. CNN has ranked it among the "Top 10 Most Beautiful Cycling Routes in the World."
                        </p>}
                        
                        {language === "Chinese" ? <p>
                            騎著單車暢遊日月潭 <br/>
                            沈浸在映山映水、如詩如畫的景致中
                        </p> : <p>Riding a bicycle allows you to leisurely explore Sun Moon Lake, immersing yourself in its picturesque landscapes of mountains reflected in the water, like scenes from a poetic painting.</p>}
                        
                    </Col>
                    <Col md={6}>
                        <img src={LetapeSunmoonlakeDesImg1} alt="" />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={6} className="text-center">
                        <h2>{language === "Chinese" ? "逐鹿傳說的起源之地" : "Origin of the Thao"}</h2>
                        {language === "Chinese" ? <p>
                            邵族，擁有深厚文化底蘊的原住民族是日月潭地區最早的住民 邵語「thao」意為「人」「ita thao」（我們是人）提取「thao」一字而為「邵族」
                        </p> : <p>The Thao, an indigenous tribe with profound cultural heritage, were among the earliest inhabitants of the Sun Moon Lake region. In the Thao language, "thao" means "people," and "ita thao" translates to "we are people." The name "Thao" is derived from this word.</p>}
                        
                        {language === "Chinese" ? <p>
                            相傳邵族的祖先在一次狩獵中追逐一頭白鹿無意間發現了魚蝦豐饒的日月潭被這片美麗的湖泊吸引決定舉族遷居於此
                        </p> : <p>According to legend, ancestors of the Thao tribe were chasing a white deer during a hunt when they stumbled upon the bountiful Sun Moon Lake, teeming with fish and shrimp. Captivated by the beauty of this lake, they decided to relocate their entire tribe here.</p>}
                        
                        {language === "Chinese" ? <p>
                            與湖水、山林相依相存發展出魅力滿滿的人文特色
                        </p> : <p>Living in harmony with the lake waters and mountains, they developed a rich cultural identity full of charm and uniqueness.</p>}
                        
                    </Col>
                    <Col md={6}>
                        <img src={LetapeSunmoonlakeDesImg2} alt="" />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={6} className="text-center">
                        <h2>{language === "Chinese" ? "原住民美食饗宴" : "Aboriginal Feast"}</h2>
                        {language === "Chinese" ? <div>
                            <p>生鮮奇力魚漬有總統魚之稱、肉質細嫩「曲腰魚」拜鰻祭特色「白鰻麻糬」</p>
                            <p>擁有「鳥不踏」稱號的刺蔥是涼拌、煮湯、糕點好料醃肉與釀酒在地好味不可錯過的邵族美食佳餚</p>
                        </div> : <div>
                                <p>Fresh Pickled Chirih Fish: Known as the "President Fish," with delicate and tender flesh.</p>
                                <p> "White Eel Mochi" for Eel Festival, A unique dish featuring white eel and mochi.</p>
                                <p>"Bird-Not-Step" Chives: Also known as "Bird-Free" Chives, used in salads, soups, and pastries.</p>
                                <p>Local Delicacies for Marinating Meat and Brewing Alcohol: A must-try for Shaofu cuisine lovers.</p>
                        </div>}
                        
                    </Col>
                    <Col md={6}>
                        <img src={LetapeSunmoonlakeDesImg3} alt="" />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={6} className="text-center">
                        <h2>{language === "Chinese" ? "打造甘醇韻味詩篇" : "Flavor of Tea & Coffee"}</h2>
                        {language === "Chinese" ? <div>
                            <p>清晨的薄霧輕輕籠罩著茶園茶葉在陽光的沐浴下散發出獨特的香氣</p>
                            <p>咖啡豆在濕潤的氣候中慢慢成熟手工採摘後經過精心烘焙</p>
                            <p>每一口都是對這片土地深情的致敬</p>
                        </div> : <div>
                                <p>The gentle morning mist envelops the tea plantation, Tea leaves exuding their unique aroma under the bath of sunlight.</p>
                                <p>Coffee beans mature slowly in the humid climate, Hand-picked and meticulously roasted.</p>
                                <p>Each sip is a heartfelt tribute to this land.</p>
                        </div>}
                        
                    </Col>
                    <Col md={6}>
                        <img src={LetapeSunmoonlakeDesImg4} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Desc