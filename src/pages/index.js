import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour, homeObjFive } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
           <InfoSection {...homeObjOne} /> 
           <InfoSection {...homeObjTwo} /> 
           <InfoSection {...homeObjFive} /> 
           <Services />
           <InfoSection {...homeObjThree} /> 
           <InfoSection {...homeObjFour} />
           <Footer />
        </>
    )
};

export default Home;