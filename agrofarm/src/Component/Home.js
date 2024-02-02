import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Header from './Header';
import Services from './Services';
import Products from './Products';
import Blog from './Blog';
import Ourfarm from './Ourfarm';
import Ourteam from './Ourteam';
import Footer from './Footer';

const slider1 = {
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 1,

    }
  }
}
function Home() {
  return (
    <>
      <Header></Header>
      <div>
        <OwlCarousel id="s1" className='owl-theme' fade autoplay={true} {...slider1}>
          <div class='item'>
            <div className='sl_1'>
              <img src={require('../image/slider1_1.jpg')}></img>
            </div>
            <div className='sl_1_info'>
              <h2>Feeding a Growing World</h2>
              <p>Adipiscing inciderint est in. Ius nusquam oportere et, ius ea mazim</p>
              <div className='sl_btn'><a>READ 3 TO 4 CHANGLOG</a></div>
            </div>
          </div>
          <div class='item'>
            <div className='sl_1'>
              <img src={require('../image/slider1_2.jpg')}></img>
            </div>
            <div className='sl_1_info'>
              <h2>Feeding a Growing World</h2>
              <p>Adipiscing inciderint est in. Ius nusquam oportere et, ius ea mazim</p>
              <div className='sl_btn'><a>READ 3 TO 4 CHANGLOG</a></div>
            </div>
          </div>
          <div class='item'>
            <div className='sl_1'>
              <img src={require('../image/slider1_3.jpg')}></img>
            </div>
            <div className='sl_1_info'>
              <h2>Feeding a Growing World</h2>
              <p>Adipiscing inciderint est in. Ius nusquam oportere et, ius ea mazim</p>
              <div className='sl_btn'><a>READ 3 TO 4 CHANGLOG</a></div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <Ourfarm></Ourfarm>
      <Services></Services>
      <Products></Products>
      <Blog></Blog>
      <Ourteam></Ourteam>
      <Footer></Footer>

    </>
  );
}

export default Home;
