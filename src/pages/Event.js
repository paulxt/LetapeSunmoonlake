import React from 'react';
import '../styles.css/event.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import EventBanner from '../components/EventUI/EventBanner';
import EventInfo from '../components/EventUI/EventInfo';
import Division from '../components/EventUI/Division';
import Procedure from '../components/EventUI/Procedure';
import Reward from '../components/EventUI/Reward';
// import SiteMap from '../components/EventUI/SiteMap';
import Traffic from '../components/EventUI/Traffic';
import Precaution from '../components/EventUI/Precaution';
import RaceVillage from '../components/EventUI/RaceVillage';

const Event = ({language}) => {
    return (
        <div className='event'>
            <EventBanner language={language} />
            <EventInfo language={language} />
            <Division language={language} />
            <Procedure language={language} />
            <RaceVillage language={language} />
            <Reward language={language} />
            {/* <SiteMap /> */}
            <Traffic language={language} />
            <Precaution language={language} />
        </div>
    )
}

export default Event