import React from 'react';
import { Fade, Reveal } from 'react-reveal/';
import BrandWeb from '../../image/brandcer490.webp';

const Brandcer = props => {
  const { aClass } = props;
  return (
    <section className={`${aClass}`} id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 d-flex align-items-center'>
            <Fade bottom cascade duration={1000}>
              <div className='about_content'>
                <h2 className='t_color'>BrandCer</h2>
                <h6>Co-founder/Front-end Engineer</h6>
                <p>
                  An influencer marketing platform that brings micro-influencers
                  together and executes marketing campaigns through different
                  social channels.
                </p>
                <ul>
                  <li>Bring around 1.5k micro-influencers on platform.</li>
                  <li>
                    Executed around 10 paid market campaigns out of 20+ running
                    campaigns.
                  </li>
                  <li>Built the front-end of platform.</li>
                  <li>
                    Established relationships with marketing managers from
                    different brands.
                  </li>
                </ul>
              </div>
            </Fade>
          </div>
          <div className='col-lg-5'>
            <div
              className='about_img'
              style={{
                marginTop: '90px'
              }}
            >
              <Reveal effect='fadeInUp' duration={1500}>
                <img
                  src={BrandWeb}
                  alt=''
                  style={{
                    boxShadow: 'rgba(0, 0, 0, 0.66) 0px 2px 10px 0px'
                  }}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brandcer;
