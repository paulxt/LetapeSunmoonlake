import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//image
import PartnerSectionImg1 from '../../assets/img/partner-section-img1.png'; //環境部
import PartnerSectionImg2 from '../../assets/img/partner-section-img2.jpg'; //交通部
import PartnerSectionImg3 from '../../assets/img/logo-nu.png'; //紐崔萊
import PartnerSectionImg4 from '../../assets/img/partner-section-img4.png'; //KPLUS
import PartnerSectionImg5 from '../../assets/img/partner-section-img5.png';
import PartnerSectionImg6 from '../../assets/img/partner-section-img6.png';
import PartnerSectionImg7 from '../../assets/img/partner-section-img7.png'; //名衍
import PartnerSectionImg8 from '../../assets/img/partner-section-img8.png'; //雪霸運動
import PartnerSectionImg9 from '../../assets/img/partner-section-img9.png'; //日管處
import PartnerSectionImg10 from '../../assets/img/partner-section-img10.png'; //Titan
import PartnerSectionImg11 from '../../assets/img/partner-section-img11.png'; //Bone
import PartnerSectionImg12 from '../../assets/img/partner-section-img12.png'; //南投縣政府
import PartnerSectionImg13 from '../../assets/img/partner-section-img13.png'; //推廣協會
import PartnerSectionImg14 from '../../assets/img/partner-section-img14.png'; //Oakley
import PartnerSectionImg15 from '../../assets/img/partner-section-img15.jpg'; //Deya
import PartnerSectionImg16 from '../../assets/img/partner-section-img16.png'; //黑妞
import PartnerSectionImg17 from '../../assets/img/partner-section-img17.png'; //Castrol
import PartnerSectionImg18 from '../../assets/img/partner-section-img18.png'; //Eva Air長榮
import PartnerSectionImg19 from '../../assets/img/partner-section-img19.png'; //FACTOR
import PartnerSectionImg20 from '../../assets/img/partner-section-img20.png'; //雷文虎克
import PartnerSectionImg21 from '../../assets/img/partner-section-img21.png'; //SHIMANA
import PartnerSectionImg22 from '../../assets/img/partner-section-img22.png'; //Volvo
import PartnerSectionImg23 from '../../assets/img/partner-section-img23.png'; //公勝保經
import PartnerSectionImg24 from '../../assets/img/partner-section-img24.jpg'; //Viva萬歲牌



const PartnerSection = ({language}) => {
    return (
        <section className="partner-section">
            <Container>
                <Row className='align-items-center text-center py-2'>
                    {
                        language === "Chinese" ? <h1><span>合作夥伴</span></h1> : <h1><span>OFFICIAL PARTNERS</span></h1>
                    }
                </Row>
                <Row className='align-items-center text-center my-4'>
                    <h2>指導單位 | Advisory Organization</h2>
                    {/* 環境部 */}
                    <Col size={12} xs={6} md={6} sm={6} >
                        <a href="https://www.taiwan.net.tw/w1.aspx" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-100' src={PartnerSectionImg1} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col  size={12} xs={6} md={6} sm={6}>
                        <a href="https://www.taiwan.net.tw/w1.aspx" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-100' src={PartnerSectionImg2} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={6} sm={6} >
                        <a href="https://www.nantou.gov.tw/big5/index.php" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img src={PartnerSectionImg12} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={6} sm={6} >
                        <a href="https://www.aso.fr/en/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-100' src={PartnerSectionImg5} alt="" />
                            </div>
                        </a>
                    </Col>
                </Row>
                <Row className='align-items-center text-center my-4'>
                    <h2>主辦單位 | Organizer</h2>
                    <Col xs={6}>
                        <div className="img-bx">
                            <img src={PartnerSectionImg13} alt="" />
                        </div>
                    </Col>
                    <Col xs={6}>
                        <a href="https://body-marketing.com.tw/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img src={PartnerSectionImg7} alt="" />
                            </div>
                        </a>
                    </Col>
                </Row>
                <Row className='align-items-center text-center my-4' rel='noreferrer noopener'>
                    <h2>協辦單位 | Co-organizer</h2>
                    <Col xs={6}>
                        <a href="https://sherpa-sports.co/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-100' src={PartnerSectionImg8} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col xs={6}>
                        <a href="https://admin.taiwan.net.tw/sunmoonlake/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img src={PartnerSectionImg9} alt="" />
                            </div>
                        </a>
                    </Col>
                </Row>

                <Row className='align-items-center text-center my-4'>
                    <h2>冠名贊助 | Presented by</h2>
                    <Col xs={12} className='center'>
                        <a href="https://www.nutrilite.com.tw/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-100 my-5 logo-nu' src={PartnerSectionImg3} alt="" />
                            </div>
                        </a>
                    </Col>
                </Row>
                
                <Row className='align-items-center text-center my-4'>
                    <h2>合作夥伴 | Official Partners</h2>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://www.kplus-helmet.com/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                            <img className='w-75' src={PartnerSectionImg4} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://www.titan-tech.com.tw/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg10} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://www.boneshop.com/tw/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg11} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://tw.oakley.com/zh" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg14} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://www.mommyhappy.com/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg6} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://www.deya.tw" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg15} alt="" />
                            </div>
                        </a>
                    </Col>

                    {/* 新增贊助商 16-24 */}
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://www.deya.tw" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg16} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://www.castrol.com/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg17} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://www.evaair.com/zh-tw/index.html" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg18} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://factorbikes.com/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg19} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://lwhklab.com.tw/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg20} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://www.shimano.com/en/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg21} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://www.volvo.com/en/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg22} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://www.goldennet.com.tw/tw" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg23} alt="" />
                            </div>
                        </a>
                    </Col>
                    <Col size={12} xs={6} md={3} sm={6} className='py-4'>
                        <a href="https://viva.lianhwa.com.tw/" target='_blank' rel='noreferrer noopener'>
                            <div className="img-bx">
                                <img className='w-75' src={PartnerSectionImg24} alt="" />
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PartnerSection