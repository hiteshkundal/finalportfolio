import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Footer = props => {
  let hiteshData = props.hiteshData;
  return (
    <section className='footer-area sect-pad'>
      <div className='container'>
        <div className='footer-content'>
          <Link to='/' className='logo wow fadeInDown' data-wow-delay='0.4s'>
            <img src={require('../image/logo2.png')} alt='' />
          </Link>
          <Fade top cascade>
            <ul className='list_style'>
              {hiteshData.socialLinks.map(item => {
                return (
                  <li key={item.name}>
                    <a href={item.url}>
                      <i className={item.className}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Fade>
          <h6>Hitesh Chauhan </h6>
          <p>© 2019 Hitesh Chauhan</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
