import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Banner } from '../components/HomeUI/Banner';
import Video from '../components/HomeUI/Video';
import HomeDes1 from '../components/HomeUI/HomeDes1';
// import { Projects } from '../components/HomeUI/Projects';
import { Contact } from '../components/HomeUI/Contact';
import HomeDes2 from '../components/HomeUI/HomeDes2';
import HomeDes3 from '../components/HomeUI/HomeDes3';
import Distance from '../components/HomeUI/Distance';
// import Pocagar from '../components/HomeUI/Pocagar';
// import { LatestNews } from '../components/HomeUI/LatestNews';
import EventHighlight from '../components/HomeUI/EventHighlight';

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <Video />
            <HomeDes1 />
            <HomeDes2 />
            <HomeDes3 />
            <Distance />
            {/* <Pocagar /> */}
            {/* <LatestNews /> */}
            <EventHighlight />
            {/* <Projects /> */}
            <Contact />
        </div>
    )
}

export default Home