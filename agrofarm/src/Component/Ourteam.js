import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container} from 'react-bootstrap';
import { FaPhoneAlt, FaBars, FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from "react-icons/fa";


const slider4 = {
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
  
      }
    }
  }
function Ourteam(){
    return(
        <>     
      {/* ==========================section 5 start=============================== */}
      <div className='sec_5 space'>
        <Container>
          <div className='sec4_hd text-center'>
            <div className='sec_hd_1'>Latest News</div>
            <div className='sec_hd_2'>Our Blog</div>
          </div>
          <OwlCarousel id="s4" className='owl-theme' autoplay={true} {...slider4}>
            <div class='item'>
              <div className='sld_4 text-center'>
                <div className='img_5'>
                  <img src={require('../image/slider4_1.jpg')}></img>
                </div>
                <div className='sl4_info'>
                  <a>Rebecca Martinez</a>
                  <p>Rebecca is the Founder and CEO of Livedrink</p>
                </div>
                <div className='sl4_icon'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><FaGooglePlusG></FaGooglePlusG></a>
                </div>
              </div>
            </div>
            <div class='item'>
              <div className='sld_4 text-center'>
                <div className='img_5'>
                  <img src={require('../image/slider4_2.jpg')}></img>
                </div>
                <div className='sl4_info'>
                  <a>Peter McMillan</a>
                  <p>Peter is the Head of Livedrink’s Supply Chain</p>
                </div>
                <div className='sl4_icon'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><FaGooglePlusG></FaGooglePlusG></a>
                </div>
              </div>
            </div>
            <div class='item'>
              <div className='sld_4 text-center'>
                <div className='img_5'>
                  <img src={require('../image/slider4_3.jpg')}></img>
                </div>
                <div className='sl4_info'>
                  <a>Jane Smith</a>
                  <p>Jane Smith is our leading Customer Care specialist.</p>
                </div>
                <div className='sl4_icon'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><FaGooglePlusG></FaGooglePlusG></a>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='sld_4 text-center'>
                <div className='img_5'>
                  <img src={require('../image/slider4_4.jpg')}></img>
                </div>
                <div className='sl4_info'>
                  <a>Sam Williams</a>
                  <p>Sam is our expert in domestic Sales Management.</p>
                </div>
                <div className='sl4_icon'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><FaGooglePlusG></FaGooglePlusG></a>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </Container>
      </div>

      {/* ==========================section 5 end=============================== */}
        </>
    );
}
export default Ourteam;