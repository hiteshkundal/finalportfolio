import React from 'react';
import Navbar from './component/Navbar/Navbar';
import RBanner from './component/Banner/RippleBanner';
import About from './component/About';
import Experience from './component/Experience/Experience';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Skills from './component/Skills';
import hiteshData from './component/hiteshData';

const Home = () => (
  <div className='body_wrapper'>
    <Navbar mContainer='custome_container' />
    <RBanner hiteshData={hiteshData} imag='Sail-Away.jpg' />
    <About aClass='about_area' hiteshData={hiteshData} />
    <Skills wClass='work_area' hiteshData={hiteshData} />
    <Experience aClass='about_area' />
    <Contact hiteshData={hiteshData} />
    <Footer hiteshData={hiteshData} />
  </div>
);

export default Home;
