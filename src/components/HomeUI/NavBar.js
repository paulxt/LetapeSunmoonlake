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

import logo3 from '../../assets/img/logo-nu.png'

// Hook
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {

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
                        <NavDropdown title="關於環法" id="nav-dropdown">
                            <NavDropdown.Item href='/about-tdf' eventKey="1.1">關於環法歷史</NavDropdown.Item>
                            <NavDropdown.Item href='/about-letape' eventKey="1.2">關於L‘Étape</NavDropdown.Item>
                            <NavDropdown.Item href="/letape-sunmoonlake" eventKey="1.3">L‘Étape日月潭站</NavDropdown.Item>
                            <NavDropdown.Item href='/letape-du-tour' eventKey="1.4">L’Étape錦標賽</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                        <NavDropdown title="活動資訊" id="nav-dropdown">
                            <NavDropdown.Item href={'/event-info'} eventKey="2.1">活動辦法</NavDropdown.Item>
                            <NavDropdown.Item href='' eventKey="2.2">環法傳奇車手見面會</NavDropdown.Item>
                            <NavDropdown.Item href='/race-kit' eventKey="2.3">環法挑戰賽限定禮盒</NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.4">Premiere VIP 套裝遊程</NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.5"><HashLink to={'/event-info#event-procedure'}>活動日程表</HashLink></NavDropdown.Item>
                            {/* <NavDropdown.Item href='/event-info#event-procedure' eventKey="2.5">活動日程表</NavDropdown.Item> */}
                            <NavDropdown.Item eventKey="2.6"><HashLink to={'/event-info#race-village'}>環法嘉年華</HashLink></NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.7"><HashLink to={'/event-info#event-traffic'}>交通指南</HashLink></NavDropdown.Item>
                            <NavDropdown.Item href='/faq' eventKey="2.8">常見問題</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="活動路線" id="nav-dropdown">
                            <NavDropdown.Item href='/104k-route' eventKey="3.1">104K挑戰賽</NavDropdown.Item>
                            <NavDropdown.Item href="/29k-route" eventKey="3.2">29K經典組</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="合作夥伴" id="nav-dropdown">
                            <NavDropdown.Item href='/sponsor' eventKey="4.1">贊助夥伴</NavDropdown.Item>
                            <NavDropdown.Item href='/volunteer' eventKey="4.2">志工招募</NavDropdown.Item>
                            <NavDropdown.Item href='/join-us' eventKey="4.3">成為合作夥伴</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/media" className={activeLink === 'press' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('press')}>媒體專區</Nav.Link>
                        <Nav.Link href="/contact-us" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>聯絡我們</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.facebook.com/letapesunmoonlake/?locale=zh_TW" target='_blank' rel='noreferrer noopener'><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/letapesunmoonlake/" target='_blank' rel='noreferrer noopener'><img src={navIcon3} alt="" /></a>
                            
                        </div>
                            
                        <HashLink to='https://bao-ming.com/eb/content/6179#29049' target='_blank'>
                            <button className="vvd"><span>立即報名</span></button>
                        </HashLink>
                        
                    </span>
                    <a className='nav-logo2-a' href="https://www.nutrilite.com.tw/"><img src={logo3} alt="Logo2" className='nav-logo2'/></a>
                    <div className="language">
                        English
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
