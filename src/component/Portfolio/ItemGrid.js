import React, { Component } from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';

class ItemGrid extends Component {
  state = {
    activeItem: 'web'
  };

  componentDidMount() {
    var imgLoad = new ImagesLoaded('.grid');

    imgLoad.on('progress', function(instance, image) {
      this.iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: 'masonry'
      });
    });
  }
  onFilterChange = newFilter => {
    this.setState({ activeItem: newFilter });
    if (this.iso === undefined) {
      this.iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: 'masonry'
      });
    }

    this.iso.arrange({ filter: newFilter });

    if (newFilter === '*') {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  };

  onActive = v => (v === this.state.activeItem ? 'active' : '');
  render() {
    return (
      <div>
        <ul className='list_style portfolio_menu text-center'>
          <li
            className={`${this.onActive('*')}`}
            data-wow-delay='0.1s'
            data-filter='*'
            onClick={() => {
              this.onFilterChange('*');
            }}
          >
            ALL
          </li>
          <li
            className={`${this.onActive('web')}`}
            data-wow-delay='0.3s'
            data-filter='web'
            onClick={() => {
              this.onFilterChange('web');
            }}
          >
            Front-end
          </li>
          <li
            className={`${this.onActive(`develop`)}`}
            data-wow-delay='0.6s'
            data-filter='develop'
            onClick={() => {
              this.onFilterChange('develop');
            }}
          >
            Back-end
          </li>
          <li
            className={`${this.onActive(`market`)}`}
            data-wow-delay='0.8s'
            data-filter='market'
            onClick={() => {
              this.onFilterChange('market');
            }}
          >
            Database
          </li>
        </ul>

        <div className='grid row'>
          <div className='col-md-3 col-sm-6 col-xs-12 grid-item tech develop'>
            <div className='portfolio hover-style'>
              <img src={require('../../image/portfolio/html.jpg')} alt='' />
              <div className='item-img-overlay'>
                <div className='overlay-info text-center'>
                  <h4 className='sm-titl'>HTML</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 col-xs-12 grid-item market web develop'>
            <div className='portfolio hover-style'>
              <img src={require('../../image/portfolio/sass.png')} alt='' />
              <div className='item-img-overlay'>
                <div className='overlay-info text-center'>
                  <h4 className='sm-titl'>SASS</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-6 col-xs-12 grid-item market develop'>
            <div className='portfolio hover-style'>
              <img src={require('../../image/portfolio/react.png')} alt='' />
              <div className='item-img-overlay'>
                <div className='overlay-info text-center'>
                  <h4 className='sm-titl'>ReactJS</h4>
                  <div className='icons'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-6 col-xs-12 grid-item web'>
            <div className='portfolio hover-style'>
              <img src={require('../../image/portfolio/node.png')} alt='' />
              <div className='item-img-overlay'>
                <div className='overlay-info text-center'>
                  <h4 className='sm-titl'>NodeJS</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 col-xs-12 grid-item market web'>
            <div className='portfolio hover-style'>
              <img src={require('../../image/portfolio/mongodb.jpg')} alt='' />
              <div className='item-img-overlay'>
                <div className='overlay-info text-center'>
                  <h4 className='sm-titl'>MongoDB</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 col-xs-12 grid-item develop'>
            <div className='portfolio hover-style'>
              <img src={require('../../image/portfolio/JS.jpg')} alt='' />
              <div className='item-img-overlay'>
                <div className='overlay-info text-center'>
                  <h4 className='sm-titl'>JavaScript</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemGrid;
