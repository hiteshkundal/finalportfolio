import React from 'react';
import Reveal from 'react-reveal/Reveal/';

const Contact = props => {
  let hiteshData = props.hiteshData;
  return (
    <section className='contact-area' id='contact'>
      <div className='container'>
        <div className='row row-reverse'>
          {hiteshData.contact &&
            hiteshData.contact.map(item => {
              return (
                <React.Fragment key={item.id}>
                  <div className='col-lg-5'>
                    <Reveal effect='fadeInUp' duration={500}>
                      <div className='contact_info'>
                        <h4>{item.title}</h4>
                        <ul className='nav'>
                          {item.menuItems.map(info => {
                            return (
                              <li className='item' key={info.id}>
                                <div className='media'>
                                  <i className={info.icon}></i>
                                  <div className='media-body'>{info.text}</div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </React.Fragment>
              );
            })}
          <div
            style={{
              boxShadow: '0px 2px 35px 0px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}
          >
            <Reveal effect='fadeInUp' duration={800}>
              <iframe
                title='location'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.468789029415!2d77.082617915048!3d28.495540297018803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d192dedcecc3d%3A0xb6b7e997b4bed7c7!2sWeWork!5e0!3m2!1sen!2sin!4v1579451721627!5m2!1sen!2sin'
                style={{ width: '600px', height: '450px' }}
                frameborder='0'
                allowfullscreen=''
              ></iframe>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
