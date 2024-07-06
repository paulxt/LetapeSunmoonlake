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

const SignUpGift = () => {
    return (
        <section className='sign-up-gift'>
            <Container>
                <h2><span><img src="" alt="" /></span>環法挑戰賽限定禮盒</h2>
                <Row className='align-items-center'>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={signUpGiftImg1} alt="" />
                            <h3>環法挑戰賽限定禮盒 <span className='sm-text'>（總價值：$7,820元）</span></h3>
                            <p className='px-3'>將選手物資打造成「環法挑戰賽限定禮盒」，讓每位報名者在參賽前就可以感受到滿滿的環法氛圍！</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={signUpGiftImg2} alt="" />
                            <h3>L’ÉTAPE 概念小卡</h3>
                            <p className='px-3'>日月潭自行車全球公認必騎路線、致敬環法傳奇，屬於你的環法紀念卡，為今年的環法挑戰賽騎行之旅留下軌跡</p>
                        </div>
                    </Col>
                    <Col md={12} className='px-2 py-3'>
                        <div className="gift-card">
                            <Row className='align-items-center'>
                                <Col md={6} className='px-5'>
                                    <img src={signUpGiftImg3} alt="" />
                                </Col>
                                <Col md={6} className='px-4' >
                                    <h3>L’ÉTape 紀念車衣<span className='sm-text'>（市價：$6,000元）</span></h3>
                                    <p>❮環法挑戰賽日月潭站限定車衣❯ 質感灰與極致黑設計，結合在地具有神聖意義的「鹿」與日月潭形狀，締造屬於你的環法傳奇。</p>
                                    <ul>
                                        <li>YKK拉鍊</li>
                                        <li>86%聚脂纖維、14%萊卡</li>
                                        <li>輕量化、高透氣布料</li>
                                        <li>競技版型</li>
                                        <li>獨創蜂巢袖口設計</li>
                                        <li>專為高強度賽事訓練而生</li>
                                    </ul>
                                    <div className="size align-items-center mt-5">
                                        {/* Size Map Popout */}
                                        <button data-bs-toggle="modal" data-bs-target="#sizeMap"><span><img src="" alt="" />尺寸參考表</span></button>
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
                                        <button data-bs-toggle="modal" data-bs-target="#refMap"><span><img src="" alt="" />身高體重對照</span></button>
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
                            <h3>自行車補給小袋<span className='sm-text'>（市價：$200元）</span></h3>
                            <p className='px-3'>環法代表色：經典黃自行車補給小袋！適中容量與尺寸怎麼背都好看、吸睛設計與亮眼色，讓你成為騎行焦點～</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img src={signUpGiftImg5} alt="" />
                            <h3>經典自行車襪<span className='sm-text'>（市價：$580元）</span></h3>
                            <p className='px-3'>ULTRA X 0.5 - L’ETAPE Sun Moon Lake Titan 2024 全新產品！適用多項運動，設計薄型、止滑提供極佳舒適度與包覆感</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img className='w-75 gift-75-center my-5' src={signUpGiftImg6} alt="" />
                            <h3>運動水壺<span className='sm-text'>（市價：$200元）</span></h3>
                            <p className='px-3'>任何運動最重要的就是要補水！自行車運動更是如此，經典黃環法風格色系，騎到哪都有滿滿的專業感與紀念價值</p>
                        </div>
                    </Col>
                    <Col md={6} className='px-2 py-3'>
                        <div className="gift-card">
                            <img className='w-75 bone my-1' src={signUpGiftImg7} alt="" />
                            <h3>BONE單車手機綁<span className='sm-text'>（市價：$560元）</span></h3>
                            <p className='px-3 add-padding'>Bone在原創設計中注入熱情並堅持質感，打造觸動人心微笑生活，手機綁為第四代綁繩結構，更服貼手機提高穩定性！高拉力設計適用4.7吋到7.2吋各牌手機、不同管徑可快速固定在自行車龍頭或手把、Touch ID/Face ID 輕鬆使用！彈性材質減少自行車彈跳撞擊、環保矽膠材質耐汙、可水洗，自在騎行最放心</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SignUpGift