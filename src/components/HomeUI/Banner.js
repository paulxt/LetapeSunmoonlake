// Hook
import React, { useState, useEffect, useRef } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../../assets/img/header-img.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';

export const Banner = ({language}) => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["環法自行車挑戰賽 紐崔萊日月潭站", "環法自行車挑戰賽 紐崔萊日月潭站", "環法自行車挑戰賽 紐崔萊日月潭站"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        } 
    }

    // Timer
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMins, setTimerMins] = useState('00');
    const [timerSecs, setTimerSecs] = useState('00');

    let timerInterval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('Nov 30, 2024 00:00:00').getTime();

        timerInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop our timer
                clearInterval(timerInterval.current)
            } else {
                //update timer 
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMins(mins);
                setTimerSecs(secs);
            }
        }, 1000);
    }

    // counting
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(timerInterval.current);
        }
    }, [])

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    {/* <span className="tagline">Welcome</span> */}
                                    <h1>2024 L'Étape <span className="small-text">SUN MOON LAKE</span></h1>
                                    <h1>{``}</h1>
                                    <h1 className="wrap"> {text}</h1>
                                    <h2><span className='theme-color'>Experience the Tour de France Legend</span></h2>
                                    <div className="timer align-items-center">
                                        <section>
                                            <span><p>{timerDays}</p></span>
                                            <p><small>Days</small></p>
                                        </section>
                                        <section>
                                            <span><p>{timerHours}</p></span>
                                            <p><small>Hours</small></p>
                                        </section>
                                        <section>
                                            <span><p>{timerMins}</p></span>
                                            <p><small>Mins</small></p>
                                        </section>
                                        <section>
                                            <span><p>{timerSecs}</p></span>
                                            <p><small>Seconds</small></p>
                                        </section>
                                    </div>
                                    <HashLink to={'https://bao-ming.com/eb/content/6179#29049'} target='_blank'>
                                        <button className='banner-btn' onClick={() => console.log('connect')}>Sign Up!<ArrowRightCircle size={25} /></button>
                                    </HashLink>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}