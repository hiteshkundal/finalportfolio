import React from 'react';
import Navbar from './component/Navbar/Navbar';
import RBanner from './component/Banner/RippleBanner';
import About from './component/About';
// import Portfolio from './component/Portfolio/Portfolio';
// import Blog from './component/Blog/Blog';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Skills from './component/Service';
import jhonData from './component/jhonData';

export const Home4 = () => (
  <div className='body_wrapper'>
    <Navbar mContainer='custome_container' />
    <RBanner jhonData={jhonData} imag='Sail-Away.jpg' />
    <About aClass='about_area' jhonData={jhonData} />
    <Skills wClass='work_area' jhonData={jhonData} />
    {/* <Portfolio /> */}
    {/* <Blog /> */}
    <Contact jhonData={jhonData} />
    <Footer jhonData={jhonData} />
  </div>
);
