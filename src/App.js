import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/HomeUI/NavBar';
import { Footer } from './components/HomeUI/Footer';

// Route Components
import Home from './pages/Home';
import Event from './pages/Event';
import RaceKit from './pages/RaceKit';
import Route104 from './pages/Route104';
import Route29 from './pages/Route29';
import AboutTdf from './pages/AboutTdf';
import Contact from './pages/Contact';
import PartnerPage from './pages/PartnerPage';
import LetapeDuTour from './pages/LetapeDuTour';
import AboutLetape from './pages/AboutLetape';
import Media from './pages/Media';
import LetapeSunMoonLake from './pages/LetapeSunMoonLake';
import BecomePart from './pages/BecomePart';
import Volunteer from './pages/Volunteer';
import Faq from './pages/Faq';

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-tdf",
    element: <AboutTdf />,
  },
  {
    path: '/event-info',
    element: <Event />
  },
  {
    path: '/race-kit',
    element: <RaceKit />
  },
  {
    path: '/104k-route',
    element: <Route104 />
  },
  {
    path: '/29k-route',
    element: <Route29 />
  },
  {
    path: '/contact-us',
    element: <Contact />
  },
  {
    path: '/sponsor',
    element: <PartnerPage />
  },
  {
    path: '/letape-du-tour',
    element: <LetapeDuTour />
  },
  {
    path: '/about-letape',
    element: <AboutLetape />
  },
  {
    path: '/media',
    element: <Media />
  },
  {
    path: '/letape-sunmoonlake',
    element: <LetapeSunMoonLake />
  },
  {
    path: '/join-us',
    element: <BecomePart />
  },
  {
    path: '/volunteer',
    element: <Volunteer/>
  },
  {
    path: '/faq',
    element: <Faq />
  },
]


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {
          router.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))
        }
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
