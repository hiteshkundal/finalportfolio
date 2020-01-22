import React from 'react';
import { Link } from 'react-router-dom';
import GitHub from '../image/github.png';
import LinkedIn from '../image/linkedin3.png';
import Twitter from '../image/twitter.png';
import Email from '../image/email.png';

const Footer = props => {
  return (
    <section className='footer-area sect-pad'>
      <div className='container'>
        <div className='footer-content'>
          <Link to='/' className='logo wow fadeInDown' data-wow-delay='0.4s'>
            <img src={require('../image/logo2.png')} alt='' />
          </Link>
          <ul className='list_style'>
            <li>
              <a
                href='https://github.com/hiteshkundal/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={GitHub} alt=''></img>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/hiteshchauhanbrandcer/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={LinkedIn} alt=''></img>
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/hiteshkundal'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={Twitter} alt=''></img>
              </a>
            </li>
            <li>
              <a
                href='mailto:hiteshchauhan.nmims@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={Email} alt=''></img>
              </a>
            </li>
          </ul>
          <h6>Hitesh Chauhan </h6>
          <p>© 2019 Hitesh Chauhan</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
