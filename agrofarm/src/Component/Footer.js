import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaPhoneAlt, FaBars, FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Container, Row, Col } from 'react-bootstrap';
function Footer(){
    return(
        <>
            {/* ==============================footer start============================ */}
      <div className='footer space'>
        <Container>
          <Row>
            <Col xl={4} >
              <div className='ft_hd1'>GALLERY</div>
              <div className='ft_img'>
                <img src={require('../image/f_1.jpg')}></img>
                <img src={require('../image/f_2.jpg')}></img>
                <img src={require('../image/f_3.jpg')}></img>
                <img src={require('../image/f_4.jpg')}></img>
                <img src={require('../image/f_5.jpg')}></img>
                <img src={require('../image/f_6.jpg')}></img>
              </div>
            </Col>
            <Col xl={4} md={6}>
              <div className='ft_hd1 py-sm-4 py-5'>QUICK LINKS</div>
              <div className='ft_2 d-flex'>
                <div className='ft_item1'>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Our Team</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>New Products</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Top Sellers</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>About Us</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>FAQ</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Contact Us</a></div>
                  </div>
                </div>
                <div className='ft_item2'>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Smoothies</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Energy Bowls</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Juices</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Ingredients</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Delivery</a></div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} md={6}>
              <div className='px-3 py-sm-4 py-5'>
                <div className='ft_hd1'>GET IN TOUCH</div>
                <div className='ft_item2 d-flex'>
                  <a><FaLocationDot></FaLocationDot></a>
                  <p>523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA</p>
                </div>
                <div className='ft_item2 d-flex'>
                  <a><FaPhoneAlt></FaPhoneAlt></a>
                  <p>+1 (844) 123 456 78</p>
                </div>
                <div className='ft_item2 d-flex'>
                  <a><IoMdMail></IoMdMail></a>
                  <p>info@demolink.org</p>
                </div>
                <div className='ft_icon'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><FaGooglePlusG></FaGooglePlusG></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ==============================footer end============================== */}
      {/* ==============================last footer===================== */}
      <div className='lt_ft text-center'> 
        <a>© 2023 AgroFarm. Privacy Policy. Design by Zemez</a>
      </div>
      {/* ==============================last footer===================== */}

        </>
    );
}
export default Footer;