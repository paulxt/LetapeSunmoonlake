import React from 'react'
import '../styles.css/letape-sunmoonlake.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Banner from '../components/LetapeSunMoonLake/Banner';
import Desc from '../components/LetapeSunMoonLake/Desc';
import Season from '../components/LetapeSunMoonLake/Season';

const LetapeSunMoonLake = () => {
    return (
        <div className='letape-sunmoonlake'>
            <Banner />
            <Desc />
            <Season />
        </div>
    )
}

export default LetapeSunMoonLake