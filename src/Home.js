import React from 'react';
import Navbar from './component/Navbar/Navbar';
import RBanner from './component/Banner/RippleBanner';
import About from './component/About';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Skills from './component/Service';
import hiteshData from './component/hiteshData';

const Home = () => (
  <div className='body_wrapper'>
    <Navbar mContainer='custome_container' />
    <RBanner hiteshData={hiteshData} imag='Sail-Away.jpg' />
    <About aClass='about_area' hiteshData={hiteshData} />
    <Skills wClass='work_area' hiteshData={hiteshData} />
    <Blog />
    <Contact hiteshData={hiteshData} />
    <Footer hiteshData={hiteshData} />
  </div>
);

export default Home;
