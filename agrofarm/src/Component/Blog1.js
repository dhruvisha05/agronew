import Blog from "./Blog";
import Header from "./Header";
import Footer from './Footer';
import { FaArrowRightLong } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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
function Blog1(){
    return(
        <>
        <Header></Header>
        <div>
                <div className="Contacts_1"></div>
                <div className="Contacts_info"><h1>Blog</h1></div>
                <div className="Contacts ">
                    <Container>
                        <Row>
                            <Col>
                                <div className="d-flex justify-content-center">
                                    <div className="active px-2">HOME</div>
                                    <div className="px-2"><FaArrowRightLong></FaArrowRightLong></div>
                                    <div className="px-2">BLOG</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        <Blog></Blog>
        <div className='sec_4'>
                <Container>
                    <OwlCarousel id="s3" className='owl-theme' autoplay={true} {...slider3}>
                        <div class='item'>
                            <div className='sld_3'>
                                <div className='img_3'>
                                    <img src={require('../image/slider3_4.jpg')}></img>
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
                                    <img src={require('../image/slider3_5.jpg')}></img>
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
                                    <img src={require('../image/slider3_6.jpg')}></img>
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
        <Footer></Footer>
        </>
    );
}
export default Blog1;