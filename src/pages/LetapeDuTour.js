import React from 'react';
import '../styles.css/letapedutour.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Banner from '../components/LetapeDuTour/Banner';
import KOM from '../components/Route104/KOM';
import YellowShirt from '../components/Route104/YellowShirt';
import Introduction from '../components/LetapeDuTour/Introduction';

const LetapeDuTour = ({language}) => {
    return (
        <div className='letape-du-tour'>
            <Banner language={language} />
            <Introduction language={language} />
            <YellowShirt language={language} />
            <KOM language={language} />
        </div>
    )
}

export default LetapeDuTour