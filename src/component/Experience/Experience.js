import React from 'react';
import Sectiontitle from '../Banner/Sectiontitle';
import Reveal from 'react-reveal/Reveal/';
import style from './Experience.module.css';

const Experience = () => {
  return (
    <section className='blog_area' id='blog'>
      <div className='container'>
        <Sectiontitle Title='Experience' TitleP='Things I have been doing...' />
        <Reveal effect='fadeInUp' duration={1000}>
          <div className={style.TimeLine}></div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
