import React from 'react';
import { Fade, Reveal } from 'react-reveal/';

const About = props => {
  let hiteshData = props.hiteshData;
  const { aClass } = props;
  return (
    <section className={`${aClass}`} id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 d-flex align-items-center'>
            <Fade bottom cascade duration={1000}>
              <div className='about_content'>
                <h2 className='t_color'>{hiteshData.aboutme}</h2>
                <h6>{hiteshData.role}</h6>
                <p>{hiteshData.aboutdetails}</p>
                <a
                  href='https://docs.google.com/document/d/1iotfOqi0Ihi-dbcjje-lhAmAR-XYpxbxtD9et-RpASY/edit?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='theme_btn'
                >
                  View Resume
                </a>
              </div>
            </Fade>
          </div>
          <div className='col-lg-5'>
            <div className='about_img'>
              <Reveal effect='fadeInUp' duration={1500}>
                <img src={require('../image/apporoach_man_img.jpeg')} alt='' />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
