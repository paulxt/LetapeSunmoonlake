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
import Photo2024Dump from '../components/HomeUI/Photo2024Dump';
// import Pocagar from '../components/HomeUI/Pocagar';
// import { LatestNews } from '../components/HomeUI/LatestNews';
import EventHighlight from '../components/HomeUI/EventHighlight';

const Home = ( {language} ) => {
    return (
        <div className="home">
            <Banner language={language} />
            <Video language={language} />
            <Photo2024Dump language={language} />
            <HomeDes1 language={language} />
            <HomeDes2 language={language} />
            <HomeDes3 language={language} />
            <Distance language={language} />
            {/* <Pocagar /> */}
            {/* <LatestNews /> */}
            <EventHighlight language={language} />
            {/* <Projects /> */}
            <Contact language={language} />
        </div>
    )
}

export default Home