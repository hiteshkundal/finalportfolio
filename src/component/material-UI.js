import React from 'react';
import { Fade, Reveal } from 'react-reveal/';

const material = props => {
  const { aClass } = props;
  return (
    <section className={`${aClass}`} id='about' style={{ paddingTop: '20px' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 d-flex align-items-center'>
            <Fade bottom cascade duration={1000}>
              <div className='about_content'>
                <h2 className='t_color'>Material-Ui</h2>
                <h6>Open Source Contributor</h6>
                <ul>
                  <li>
                    Added padding support for helperText in{' '}
                    <span style={{ color: '#050d2d' }}>TextField </span>
                    component.
                  </li>
                  <li>
                    Add feature for expanding all steps at once in{' '}
                    <span style={{ color: '#050d2d' }}>Stepper </span>component.
                  </li>
                  <li>
                    Improve{' '}
                    <span style={{ color: '#050d2d' }}>Breadcrubms </span>
                    component.
                  </li>
                </ul>
                <a
                  href='https://github.com/mui-org/material-ui/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Ahiteshkundal+'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='theme_btn'
                >
                  View More
                </a>
              </div>
            </Fade>
          </div>
          <div className='col-lg-5'>
            <div className='about_img'>
              <Reveal effect='fadeInUp' duration={1500}>
                <img src={require('../image/material.png')} alt='' />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default material;
