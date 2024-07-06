import React from 'react';
import '../styles.css/racekit.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import RaceKitBanner from '../components/RaceKitUI/RaceKitBanner';
import Gift from '../components/RaceKitUI/Gift';

const RaceKit = () => {
    return (
        <div className='race-kit'>
            <RaceKitBanner />
            <Gift />
        </div>
    )
}

export default RaceKit