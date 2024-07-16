// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import '../../App.css';

//image
import logo from '../../assets/img/logo.png';
// import logo2 from '../../assets/img/logo2.png'; //tu de france
// import navIcon1 from '../../assets/img/nav-icon1.svg'; //youtube
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

import logo3 from '../../assets/img/logo-nu-white.png'

// Hook
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavBar = ({ language, toggleLanguage}) => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" className='nav-logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>關於環法</Nav.Link> */}
                        <NavDropdown title={language === 'Chinese'? "關於環法" : "ABOUT"} id="nav-dropdown">
                            <NavDropdown.Item href='/about-tdf' eventKey="1.1">{language === 'Chinese'? "關於環法歷史" : "Tour de France culture"}</NavDropdown.Item>
                            <NavDropdown.Item href='/about-letape' eventKey="1.2">{language === 'Chinese'? "關於L’Étape" : "What is L’Étape"}</NavDropdown.Item>
                            <NavDropdown.Item href="/letape-sunmoonlake" eventKey="1.3">{language === 'Chinese'? "L‘Étape日月潭站" : "L’Étape Sun Moon Lake"}</NavDropdown.Item>
                            <NavDropdown.Item href='/letape-du-tour' eventKey="1.4">{language === 'Chinese'? "L’Étape錦標賽" : "L’Étape du Tour"}</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                        <NavDropdown title={language === 'Chinese'? "活動資訊" : "INFORMAITON"} id="nav-dropdown">
                            <NavDropdown.Item eventKey="2.1" href={'/event-info'}>{language === 'Chinese'? "活動辦法" : "Event Rules"}</NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.2" href='' >{language === 'Chinese'? "環法傳奇車手見面會" : "TDF Ambassador"}</NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.3" href='/race-kit'>{language === 'Chinese'? "環法挑戰賽限定禮盒" : "Registration Gift"}</NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.4">{language === 'Chinese'? "Premiere VIP 套裝遊程" : "Premium VIP Program"}</NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.5"><HashLink to={'/event-info#event-procedure'}>{language === 'Chinese'? "活動日程表" : "Event Schedule"}</HashLink></NavDropdown.Item>
                            {/* <NavDropdown.Item href='/event-info#event-procedure' eventKey="2.5">活動日程表</NavDropdown.Item> */}
                            <NavDropdown.Item eventKey="2.6"><HashLink to={'/event-info#race-village'}>{language === 'Chinese'? "環法嘉年華" : "Race Village"}</HashLink></NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.7"><HashLink to={'/event-info#event-traffic'}>{language === 'Chinese'? "交通指南" : "Getting Here"}</HashLink></NavDropdown.Item>
                            <NavDropdown.Item href='/faq' eventKey="2.8">{language === 'Chinese'? "常見問題" : "FAQ"}</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={language === 'Chinese'? "活動路線" : "ROUTE"} id="nav-dropdown">
                            <NavDropdown.Item href='/104k-route' eventKey="3.1">{language === 'Chinese'? "104K挑戰賽" : "104K The Race"}</NavDropdown.Item>
                            <NavDropdown.Item href="/29k-route" eventKey="3.2">{language === 'Chinese'? "29K經典組" : "29K The Ride"}</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={language === 'Chinese'? "合作夥伴" : "PARTNER"} id="nav-dropdown">
                            <NavDropdown.Item href='/sponsor' eventKey="4.1">{language === 'Chinese'? "贊助夥伴" : "Official Partners"}</NavDropdown.Item>
                            <NavDropdown.Item href='/volunteer' eventKey="4.2">{language === 'Chinese'? "志工招募" : "Volunteers"}</NavDropdown.Item>
                            <NavDropdown.Item href='/join-us' eventKey="4.3">{language === 'Chinese'? "成為合作夥伴" : "Become Partners"}</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/media" className={activeLink === 'press' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('press')}>{language === 'Chinese'? "媒體專區" : "MEDIA"}</Nav.Link>
                        <Nav.Link href="/contact-us" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>{language === 'Chinese'? "聯絡我們" : "CONTACT US"}</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.facebook.com/letapesunmoonlake/?locale=zh_TW" target='_blank' rel='noreferrer noopener'><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/letapesunmoonlake/" target='_blank' rel='noreferrer noopener'><img src={navIcon3} alt="" /></a>
                        </div>
                            
                        <HashLink to='https://bao-ming.com/eb/content/6179#29049' target='_blank'>
                            <button className="vvd"><span>Sign Up</span></button>
                        </HashLink>
                    </span>
                    <a className='nav-logo2-a' href="https://www.nutrilite.com.tw/" target='_blank' rel='noreferrer'><img src={logo3} alt="Logo2" className='nav-logo2'/></a>
                    <div className="language">
                        <span onClick={toggleLanguage}>
                            {
                                language === "Chinese" ? "ENGLISH"
                                    : "中文"
                            }
                        </span>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default NavBar