import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AddOnImg1 from '../../assets/img/add-on-gift-img1.png';
import AddOnImg2 from '../../assets/img/add-on-gift-img2.png';
import AddOnImg3 from '../../assets/img/add-on-gift-img3.png';
import AddOnImg4 from '../../assets/img/add-on-gift-img4.png';

const AddOnGift = ({language}) => {
    return (
        <section className="add-on">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={AddOnImg1} alt="" />
                            {language === "Chinese" ? <h3>自行車小帽<span className='sm-text'>（售價：$490元｜原價：$590元）</span></h3>
                                : <h3>Cap<span className='sm-text'>(Disc Price: $490 | Original Price: $590)</span></h3>}
                            <p className='text-center px-3'>{language === "Chinese" ? "自行車小帽融合了在地海棠花壓紋設計，並結合了國際環法挑戰賽事的品牌標誌，不僅展現了獨特的風格，更注重舒適度與功能性。精心設計的材料與製作工藝，確保騎行中的舒適感與效能，讓您專注於每一次的騎行體驗。" : "The cycling cap blends local magnolia flower embossed design with the branding of the international Tour de France Challenge. It not only showcases a unique style but also emphasizes comfort and functionality. Carefully designed materials and craftsmanship ensure comfort and performance during rides, allowing you to focus on every cycling experience."}</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={AddOnImg2} alt="" />
                            {language === "Chinese" ? <h3>titan ULTRA X 0.5 - L’ETAPT Sun Moon Lake 紀念襪款<span className='sm-text'>（售價：$580元）</span></h3>
                                : <h3>titan ULTRA X 0.5 - L’ETAPT Sun Moon Lake <span className='sm-text'>（Value：NT$580）</span></h3>}
                            
                            <p className='text-center px-3'>{language === "Chinese" ? "適用於單車、跑步、三鐵等多項運動，這款襪子設計薄型、止滑，並提供極佳的舒適度與包覆感，讓你的運動體驗更上一層樓。" : "Suitable for cycling, running, triathlons, and more, these socks are designed to be thin, non-slip, and offer excellent comfort and support, enhancing your sports experience to the next level."}</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={AddOnImg3} alt="" />
                            {language === "Chinese" ? <h3>BONE角色氣嘴塞<span className='sm-text'>（售價：$790元｜原價：$990元）</span></h3>
                                : <h3>BONE Character-Valve-Cap<span className='sm-text'>（Disc Price: $790 | Original Price: $990）</span></h3>}
                            <p className='text-center px-3'>{language === "Chinese" ? "兼容美式、法式氣嘴，可用於單車、機車、汽車，緊密包覆氣嘴，防塵、防水、抗鏽環保矽膠材質，全件可水洗，六入組為各角色各一個" : "Suitable for bicycles, motorcycles, and cars. It tightly wraps around the valve to prevent dust, water, and rust, made from environmentally friendly silicone material. All parts are washable, and the six-piece set includes one for each type of valve."}</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={AddOnImg4} alt="" />
                            {language === "Chinese" ? <h3 className='text-center'>BONE單車手機綁接 2-磁吸<br /><span className="sm-text">（售價：$999元｜原價：$1290元）</span></h3>
                                : <h3 className='text-center'>BONE Tie Connect 2 Magnetic <br/><span className="sm-text">(Disc Price: $990 | Original Price: $1290)</span></h3>}
                            
                            <p className='text-center px-3'>{language === "Chinese" ? "磁吸功能精準對位，快速吸附，通用不對稱綁繩設計！適用4.7吋-7.2吋手機，矽膠彈力吸震、保護手機，單車綁接座適用不同車管，快速綁附不滑動，緊密貼合22-47mm管徑" : "Universal strap structure, quickly attachable to bicycle handlebars or stem.Paired with a power strap, it securely fastens a power bank to the handlebar or frame, enabling charging while cycling."}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
}

export default AddOnGift