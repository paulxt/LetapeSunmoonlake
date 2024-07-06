import React from 'react'
import '../styles.css/route104.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Route104Banner from '../components/Route104/Route104Banner';
import RouteMap from '../components/Route104/RouteMap';
import RouteGpx from '../components/Route104/RouteGpx';
import Slow from '../components/Route104/Slow';
import RouteContent from '../components/Route104/RouteContent';
import RouteSpotlight from '../components/Route104/RouteSpotlight';

const Route104 = () => {
    return (
        <div className='route-104'>
            <Route104Banner />
            <RouteMap />
            <RouteGpx />
            <Slow />
            <RouteContent />
            <RouteSpotlight />
        </div>
    )
}

export default Route104