import React from 'react';
import '../styles.css/racekit.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import RaceKitBanner from '../components/RaceKitUI/RaceKitBanner';
import Gift from '../components/RaceKitUI/Gift';

const RaceKit = ({ language }) => {
    return (
        <div className='race-kit'>
            <RaceKitBanner language={language} />
            <Gift language={language} />
        </div>
    )
}

export default RaceKit