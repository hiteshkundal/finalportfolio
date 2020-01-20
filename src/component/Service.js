import React from 'react';
import Sectiontitle from '../component/Banner/Sectiontitle';
import Fade from 'react-reveal/Fade';

const Service = props => {
  let hiteshData = props.hiteshData;
  var { wClass } = props;
  return (
    <section className={`${wClass}`} id='service'>
      <div className='container'>
        <Sectiontitle
          Title='My Skills'
          TitleP='I love what I do. I take great pride in what I do.'
        />
        <Fade bottom cascade duration={2000}>
          <div className='row'>
            {hiteshData.service &&
              hiteshData.service.map(item => {
                return (
                  <div className='col-lg-4 col-sm-6' key={item.id}>
                    <div
                      className='work_item wow fadeInUp'
                      data-wow-delay='0.1s'
                    >
                      <h2 className='t_color'>{item.serviceTitle}</h2>
                    </div>
                  </div>
                );
              })}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Service;
