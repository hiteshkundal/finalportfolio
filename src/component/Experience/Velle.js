import React from 'react';
import { Fade, Reveal } from 'react-reveal/';
import VelleWeb from '../../image/velle.webp';

const Velle = props => {
  const { aClass } = props;
  return (
    <section className={`${aClass}`} id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 d-flex align-items-center'>
            <Fade bottom cascade duration={1000}>
              <div className='about_content'>
                <h2 className='t_color'>Velle</h2>
                <h6>Co-founder</h6>
                <p>
                  A crowdsourced content distribution android app matching
                  content with the mood of users.
                </p>
                <ul>
                  <li>Had around 30k users after our MVP launch.</li>
                  <li>Handled marketing campaigns for the product.</li>
                  <li>
                    Ran user testing and feedback sessions with over 300 app
                    users.
                  </li>
                </ul>
              </div>
            </Fade>
          </div>
          <div className='col-lg-5 velle'>
            <div className='about_img'>
              <Reveal effect='fadeInUp' duration={1500}>
                <img
                  src={VelleWeb}
                  alt=''
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.66) 0px 5px 10px 0px' }}
                ></img>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Velle;
