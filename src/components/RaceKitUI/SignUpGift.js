import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/js/src/modal';

//image
import signUpGiftImg1 from '../../assets/img/sign-up-gift-img1.png';
import signUpGiftImg2 from '../../assets/img/sign-up-gift-img2.png';
import signUpGiftImg3 from '../../assets/img/sign-up-gift-img3.png';
import signUpGiftImg4 from '../../assets/img/sign-up-gift-img4.png';
import signUpGiftImg5 from '../../assets/img/sign-up-gift-img5.png';
import signUpGiftImg6 from '../../assets/img/sign-up-gift-img6.png';
import signUpGiftImg7 from '../../assets/img/sign-up-gift-img7.png';

import sizeMapImg from '../../assets/img/size-map-img.png';
import refMapImg from '../../assets/img/ref-map-img.png';

const SignUpGift = ({language}) => {
    return (
        <section className='sign-up-gift'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={signUpGiftImg1} alt="" />
                            {language === "Chinese" ? <h3>環法挑戰賽限定禮盒 <span className='sm-text'>（總價值：$7,820元）</span></h3>
                                : <h3> Exclusive Gift Box <span className='sm-text'>（Value：NT$7,820）</span></h3>}
                            <p className='px-3'>{language === "Chinese" ? "將選手物資打造成「環法挑戰賽限定禮盒」，讓每位報名者在參賽前就可以感受到滿滿的環法氛圍！" : `Create the athletes' supplies into a "Tour de France Challenge Limited Edition Gift Box," allowing each participant to experience the full atmosphere of the Tour de France before the competition begins!`}</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={signUpGiftImg2} alt="" />
                            <h3>{language === "Chinese" ? "L’ÉTAPE 概念小卡" : "L’ÉTAPE Postcard"}</h3>
                            <p className='px-3'>{language === "Chinese" ? "日月潭自行車全球公認必騎路線、致敬環法傳奇，屬於你的環法紀念卡，為今年的環法挑戰賽騎行之旅留下軌跡" : "Sun Moon Lake Cycling, a globally recognized must-ride route for a lifetime. Receive your own Tour de France commemorative card, leaving a mark on this year's TDF Challenge cycling journey."}</p>
                        </div>
                    </Col>
                    <Col md={12} className='px-2 py-3'>
                        <div className="gift-card">
                            <Row className='align-items-center'>
                                <Col md={6} className='px-5'>
                                    <img src={signUpGiftImg3} alt="" />
                                </Col>
                                <Col md={6} className='px-4' >
                                    {language === "Chinese" ? <h3>L’ÉTape 紀念車衣<span className='sm-text'>（市價：$6,000元）</span></h3>
                                        : <h3>L’ÉTape Jersey<span className='sm-text'>（Value：NT$6,000）</span></h3>}
                                    <p>{language === "Chinese" ? "❮環法挑戰賽紐崔萊日月潭站限定車衣❯ 質感灰與極致黑設計，結合在地具有神聖意義的「鹿」與日月潭形狀，締造屬於你的環法傳奇。" : `Featuring a sophisticated design in  gray and  black, incorporating the sacred symbol of the "deer" and the shape of Sun Moon Lake, creating your own legend of the TDF.`}</p>
                                    <ul>
                                        <li>{language === "Chinese" ? "YKK拉鍊" : "YKK Zippers"}</li>
                                        <li>{language === "Chinese" ? "86%聚脂纖維、14%萊卡" : "86% polyester fiber, 14% Lycra "}</li>
                                        <li>{language === "Chinese" ? "輕量化、高透氣布料" : "Lightweight fabric "}</li>
                                        <li>{language === "Chinese" ? "競技版型" : "Athletic fit Designed"}</li>
                                        <li>{language === "Chinese" ? "獨創蜂巢袖口設計" : "Honeycomb cuff design"}</li>
                                        <li>{language === "Chinese" ? "專為高強度賽事訓練而生" : "For high-intensity competitive training"}</li>
                                    </ul>
                                    <div className="size align-items-center mt-5">
                                        {/* Size Map Popout */}
                                        <button data-bs-toggle="modal" data-bs-target="#sizeMap"><span><img src="" alt="" />{language === "Chinese" ? "尺寸參考表" : "Size Chart"}</span></button>
                                        <div className="modal fade" id='sizeMap' tabIndex="-1" aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-body">
                                                        <button type='button' className='btn-clos'
                                                        data-bs-dismiss="modal" aria-label='Close'></button>
                                                        <img className='d-block w-200' src={sizeMapImg} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Reference Map Popout*/}
                                        <button data-bs-toggle="modal" data-bs-target="#refMap"><span><img src="" alt="" />{language === "Chinese" ? "身高體重對照" : "Body REF"}</span></button>
                                        <div className="modal fade" id='refMap' tabIndex="-1" aria-hidden="true">
                                            <div className="modal-dialog modal-xl">
                                                <div className="modal-content">
                                                    <div className="modal-body mt-5">
                                                        <button type='button' className='btn-clos'
                                                        data-bs-dismiss="modal" aria-label='Close'></button>
                                                        <img className='d-block w-200' src={refMapImg} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={signUpGiftImg4} alt="" />
                            {language === "Chinese" ? <h3>自行車補給小袋<span className='sm-text'>（市價：$200元）</span></h3>
                                : <h3>Bag <span className='sm-text'>（Value：NT$200）</span></h3>}
                            <p className='px-3'>{language === "Chinese" ? "環法代表色：經典黃自行車補給小袋！適中容量與尺寸怎麼背都好看、吸睛設計與亮眼色，讓你成為騎行焦點～" : "Cycling supply pouch! Perfectly sized and designed to be eye-catching, with a capacity and dimensions that look good no matter how you wear it."}</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={signUpGiftImg5} alt="" />
                            {language === "Chinese" ? <h3>經典自行車襪<span className='sm-text'>（市價：$580元）</span></h3>
                                : <h3>Socks <span className='sm-text'>（Value：NT$580）</span></h3>}
                            
                            <p className='px-3'>{language === "Chinese" ? "ULTRA X 0.5 - L’ETAPE Sun Moon Lake Titan 2024 全新產品！適用多項運動，設計薄型、止滑提供極佳舒適度與包覆感" : "ULTRA X 0.5 - L’ETAPE Sun Moon Lake Titan 2024 ! exclusive design cycling socks for Sun Moon Lake Station, allowing you to wear the legend of theTDF Challenge on your feet. Suitable for cycling, running, triathlons, and more, these socks are thin, non-slip, and offer excellent comfort and support, enhancing your sports performance to the next level."}</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img className='w-75 gift-75-center my-5' src={signUpGiftImg6} alt="" />
                            {language === "Chinese" ? <h3>運動水壺<span className='sm-text'>（市價：$200元）</span></h3>
                                : <h3>Water Bottle <span className='sm-text'>（Value：NT$200）</span></h3>}
                            <p className='px-3'>{language === "Chinese" ? "任何運動最重要的就是要補水！自行車運動更是如此，經典黃環法風格色系，騎到哪都有滿滿的專業感與紀念價值" : "Hydration is key in any sport, especially cycling! With classic yellow styles inspired by the Tour de France, you'll have a professional and commemorative look wherever you ride."}</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img className='w-75 bone my-1' src={signUpGiftImg7} alt="" />
                            {language === "Chinese" ? <h3>BONE單車手機綁<span className='sm-text'>（市價：$560元）</span></h3>
                                : <h3>BONE Bike Tie <span className='sm-text'>（Value：NT$560）</span></h3>}
                            <p className='px-3 add-padding'>{language === "Chinese" ? "Bone在原創設計中注入熱情並堅持質感，打造觸動人心微笑生活，手機綁為第四代綁繩結構，更服貼手機提高穩定性！高拉力設計適用4.7吋到7.2吋各牌手機、不同管徑可快速固定在自行車龍頭或手把、Touch ID/Face ID 輕鬆使用！彈性材質減少自行車彈跳撞擊、環保矽膠材質耐汙、可水洗，自在騎行最放心" : "Bone infuses passion and commitment to quality in its original designs, creating products that bring smiles to people's lives. Bike Tie ensures stability and snug fit for your phone, supporting screen sizes from 4.7 inches to 7.2 inches across various brands. It securely attaches to bike stems or handlebars of different diameters, allowing easy access to Touch ID/Face ID."}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SignUpGift