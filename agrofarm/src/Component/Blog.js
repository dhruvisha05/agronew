import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Container} from 'react-bootstrap';
const slider3 = {
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
        items: 3,
  
      }
    }
  }
function Blog() {
    return (
        <>
            <div className='sec_4 space'>
                <Container>
                    <div className='sec4_hd text-center'>
                        <div className='sec_hd_1'>Latest News</div>
                        <div className='sec_hd_2'>Our Blog</div>
                    </div>
                    <OwlCarousel id="s3" className='owl-theme' autoplay={true} {...slider3}>
                        <div class='item'>
                            <div className='sld_3'>
                                <div className='img_3'>
                                    <img src={require('../image/slider3_1.jpg')}></img>
                                </div>
                                <div className='sec4_info'>
                                    <a>August 9,2021</a>
                                    <h2>Can a Smoothie Supercharge Your Day?</h2>
                                    <p>Most of us would agree – mornings are hectic. Getting yourself and possibly others ready for the day ahead may...</p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='sld_3'>
                                <div className='img_3'>
                                    <img src={require('../image/slider3_2.jpg')}></img>
                                </div>
                                <div className='sec4_info'>
                                    <a>August 9,2021</a>
                                    <h2>How to Make Your Breakfast Easy and Yummy</h2>
                                    <p>Combining milk and fruits is the best solution for your daily meal, whether it’s breakfast, lunch, or any other...</p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='sld_3'>
                                <div className='img_3'>
                                    <img src={require('../image/slider3_3.jpg')}></img>
                                </div>
                                <div className='sec4_info'>
                                    <a>August 9,2021</a>
                                    <h2>Tips from Our Team: Making Yoghurts with Fresh Fruits</h2>
                                    <p>Most of us would agree  Getting yourself and possibly others ready for the day ahead may...</p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </Container>
            </div>
        </>
    );
}
export default Blog;
