import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col } from 'react-bootstrap';


const slider2 = {
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    center: true,
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
function Ourfarm(){
    return(
        <>
      <div className='sec_1 space'>
        <Container>
          <Row>
            <Col lg={6}>
              <OwlCarousel className='owl-theme' autoplay={true} {...slider2}>
                <div class='item' data-hash="4">
                  <img src={require('../image/slider2_4.jpg')}></img>
                </div>
                <div class='item' data-hash="2">
                  <img src={require('../image/slider2_2.jpg')}></img>
                </div>
                <div class='item' data-hash="3">
                  <img src={require('../image/slider2_3.jpg')}></img>
                </div>
                <div class='item' data-hash="1">
                  <img src={require('../image/slider2_1.jpg')}></img>
                </div>
              </OwlCarousel>
              <div className='slider_2'>
                <center className='px-xl-5'>
                  <a href="#4" class="active"><img class="a" src={require('../image/slider2_4.jpg')} alt=""></img></a>
                  <a href="#2" class="active"><img class="a" src={require('../image/slider2_2.jpg')} alt=""></img></a>
                  <a href="#3" class="active"><img class="a" src={require('../image/slider2_3.jpg')} alt=""></img></a>
                  <a href="#1" class="active"><img class="a" src={require('../image/slider2_1.jpg')} alt=""></img></a>
                </center>
              </div>
            </Col>
            <Col lg={6}>
              <div className='sec_2_right'>
                <h4>Founded in 1999</h4>
                <h1>Our farm</h1>
                <h3>Who we are</h3>
                <ul class="sec_2_menu">
                  <li><a>ABOUT US</a></li>
                  <li><a>WHY CHOOSE US</a></li>
                  <li><a>OUR MISSION</a></li>
                </ul>
                <div class="vr_line"></div>
                <p>Chicken Good is a 100% American, family-owned and operated company, providing fresh shell eggs and egg products to supermarkets, restaurants and food manufacturers.</p>
                <div className='btn'><a>READ MORE</a></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

        </>
    );
}
export default Ourfarm;