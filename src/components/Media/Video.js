import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//third video
import IntroVideo from '../../assets/img/Intro.mp4';

const Video = () => {
    return (
        <section className="video-section">
            <Container>
                <h2 className='theme-color mb-3'><em>影音專區</em></h2>
                <Row className='align-items-center'>
                    <Col md={6} className='px-2 py3'>
                        <iframe width="600" height="338" src="https://www.youtube.com/embed/YdNosghI3UI?si=aJr2ao-KVJw623mz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <h4>Tour de France International</h4>
                    </Col>
                    <Col md={6} className='px-2 py3'>
                        <iframe width="600" height="338" src="https://www.youtube.com/embed/ekIGyvfiubs?si=GV0qtIr7v37En0VL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <h4>Tour de France Imagination</h4>
                    </Col>
                </Row>
                <Row className='align-items-center'>
                    <Col size={12} className='mt-5'>
                        <video controls src={IntroVideo} type="video/mp4" />
                        <h4>Tour de France Intro.</h4>
                    </Col>
                </Row>
                <Row className='align-items-center mt-5'>
                    <Col md={6} className='mb-5'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/UIBtQS4dBSw?si=46ls0zaO-kLJrL_b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <h4>What is L'Etape by Tour de France?</h4>
                    </Col>
                    <Col md={6} className='mb-5'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/TpuFMseiYkY?si=oybZusnht_USuhX3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <h4>What is L’ÉTape Championship?</h4>
                    </Col>
                    <Col md={6} className='mb-5'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Juh9T4DFATw?si=ig990rb-cWwicgMr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <h4>What is L'Etape Reward?</h4>
                    </Col>
                    <Col md={6} className='mb-5'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Oy9Dkewy13s?si=9cRW_vRCkdIGrK0H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <h4>Around the World - 2024</h4>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Video