import React from 'react';
import '../styles.css/volunteer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Banner from '../components/Volunteer/Banner';
import Job from '../components/Volunteer/Job';
import Gift from '../components/Volunteer/Gift';



const Volunteer = () => {
    return (
        <div className='volunteer' >
            <Banner />
            <Job />
            <Gift />
        </div>
    )
}

export default Volunteer