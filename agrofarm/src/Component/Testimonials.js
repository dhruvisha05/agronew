import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FaQuoteLeft } from "react-icons/fa";
import { Container } from 'react-bootstrap';


const Testimonial = {
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
  
      }
    }
  }
function Testimonials() {
    return (
        <>
            <div className="testimonials">
                <Container>
                <div className='testimonials_hd text-center'>Testimonials</div>
                <OwlCarousel id="s5" className='owl-theme' fade autoplay={true} {...Testimonial}>
                    <div class='item'>
                        <div className='t_icon text-center'><FaQuoteLeft></FaQuoteLeft></div>                
                        <p className='text-center'>Classis de salvus cursus, convertam galatae! Terror peregrinationes, tanquam audax cedrium. Cum luna prarere, omnes cannabises resuscitabo</p>
                        <div className='t_info d-flex'>
                            <img src={require('../image/ts_1.jpg')}></img>
                            <div>
                                <h6>Client</h6>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                    <div className='t_icon text-center'><FaQuoteLeft></FaQuoteLeft></div>
                        <p className='text-center'>Classis de salvus cursus, convertam galatae! Terror peregrinationes, tanquam audax cedrium. Cum luna prarere, omnes cannabises resuscitabo</p>
                        <div className='t_info d-flex text-center'>
                            <img src={require('../image/ts_2.jpg')}></img>
                            <div>
                                <h6>Client</h6>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                    <div className='t_icon text-center'><FaQuoteLeft></FaQuoteLeft></div>
                        <p className='text-center'>Classis de salvus cursus, convertam galatae! Terror peregrinationes, tanquam audax cedrium. Cum luna prarere, omnes cannabises resuscitabo</p>
                        <div className='t_info d-flex text-center'>
                            <img src={require('../image/ts_3.jpg')}></img>
                            <div>
                                <h6>Client</h6>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
                </Container>
            </div>
        </>
    );
}
export default Testimonials;