import React from 'react'
import '../styles.css/letape-sunmoonlake.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Banner from '../components/LetapeSunMoonLake/Banner';
import Desc from '../components/LetapeSunMoonLake/Desc';
import Season from '../components/LetapeSunMoonLake/Season';

const LetapeSunMoonLake = ({language}) => {
    return (
        <div className='letape-sunmoonlake'>
            <Banner language={language} />
            <Desc language={language} />
            <Season language={language} />
        </div>
    )
}

export default LetapeSunMoonLake