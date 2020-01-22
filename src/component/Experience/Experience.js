import React from 'react';
import Sectiontitle from '../Banner/Sectiontitle';
import Reveal from 'react-reveal/Reveal/';
import style from './Experience.module.css';
import Material from '../material-UI';
import Brandcer from './Brandcer';
import Velle from './Velle';

const Experience = props => {
  const { aClass } = props;
  return (
    <section className={`${aClass}`} id='blog'>
      <div className='container'>
        <Sectiontitle Title='Experience' TitleP='Things I have been doing...' />
        <Reveal effect='fadeInUp' duration={1000}>
          <div className={style.Timeline}>
            <Material aClass='about_area' />
            <Brandcer aClass='about_area' />
            <Velle aClass='about_area' />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
