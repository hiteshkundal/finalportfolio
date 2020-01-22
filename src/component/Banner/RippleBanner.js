import React from 'react';
import Reveal from 'react-reveal/Reveal/';
import WaterWave from 'react-water-wave';

const Banner = props => {
  let hiteshData = props.hiteshData;
  let { bClass, textLeft, imag } = props;
  return (
    <section id='home'>
      <WaterWave
        dropRadius={45}
        strength={500}
        className={`banner_area ${bClass}`}
        style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
        imageUrl={require('../../image/' + imag)}
      >
        {({ getRootProps }) => (
          <div className='container'>
            <div className={`banner_content ${textLeft}`}>
              <Reveal effect='fadeInUp'>
                <h5>HEY!</h5>
              </Reveal>
              <Reveal effect='fadeInUp' duration={1500}>
                <h2 className='wow fadeInLeft animated'>
                  I am {hiteshData.name}
                </h2>
              </Reveal>
              <Reveal effect='fadeInUp' duration={2200}>
                <h4 className='wow fadeInUp anoimated'>
                  Full-Stack Web Developer.
                </h4>
              </Reveal>
              {/* <Reveal effect='fadeInUp' duration={2200}>
                <ul className='list_style social_icon'>
                  {hiteshData.socialLinks &&
                    hiteshData.socialLinks.map(item => {
                      return (
                        <li key={item.name}>
                          <a
                            href={item.url}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <i className={item.className}></i>
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </Reveal> */}
            </div>
          </div>
        )}
      </WaterWave>
    </section>
  );
};

export default Banner;
