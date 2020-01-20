import React from 'react';
import Reveal from 'react-reveal/Reveal/';

const Sectiontitle = props => {
  const { Title, TitleP } = props;
  return (
    <div className='section_title text-center mb_60'>
      <Reveal effect='fadeInUp'>
        <h2 className='mb_0 title_h2 t_color'>{Title}</h2>
      </Reveal>
      <Reveal effect='fadeInUp' duration={1500}>
        <p className='mb_0 title_p'>{TitleP}</p>
      </Reveal>
      <Reveal effect='fadeInLeft' duration={2000}>
        <span className='bottom_line'></span>
      </Reveal>
    </div>
  );
};

export default Sectiontitle;
