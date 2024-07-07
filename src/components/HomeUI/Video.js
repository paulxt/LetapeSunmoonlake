import React from 'react';
import IntroVideo from '../../assets/img/Intro.mp4';

const Video = () => {
    return (
        <section className='video' id='video'>
                <video controls src={IntroVideo} type="video/mp4" />
        </section>
    )
}

export default Video