import { FaPhoneAlt, FaBars, FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Col,Button, Offcanvas, NavDropdown} from 'react-bootstrap';
function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
    {/* ====================================top header start================================ */}
    <header>
        <div className='top_hd background'>
          <Container>
            <Row>
              <Col xl={2} lg={3}>
                <div className='tophd_1 d-flex'>
                  <a><FaPhoneAlt></FaPhoneAlt></a>
                  <p>1-800-1234-5671</p>
                </div>
              </Col>
              <Col xl={2} lg={3}>
                <div className='tophd_1 d-flex'>
                  <a><IoMdMail></IoMdMail></a>
                  <p>info@demolink.org</p>
                </div>
              </Col>
              <Col xl={8} lg={6}>
                <div className='tophd_1 d-flex'>
                  <a><FaLocationDot></FaLocationDot></a>
                  <p>2130 Fulton Street San Diego, CA 94117-1080 USA</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ==========================top header end============================= */}

        {/* ==============================logo header start========================== */}
        <div className='logo_hd'>
          <Container>
            <Row>
              <Col lg={4}>
                <div className='logo_left d-lg-block d-none'>
                  <img src={require('../image/logo1.png')}></img>
                </div>
              </Col>
              <Col lg={8}>
                <div className='logo_right d-lg-block d-none'>
                  <div className="logo_menu">
                    <Link to="/"><a>Home</a></Link>
                    <Link to="/About"><a>About</a></Link>
                    <Link to="/Produce"><a>Produce</a></Link>
                    <Link to="/Blog1"><a>Blog</a></Link>
                    <Link to="/Pages"><a>Pages</a></Link>
                    <Link to="/Contacts"><a>Contacts</a></Link>
                    <a><IoSearchOutline></IoSearchOutline></a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid="lg">
            <Row>
              <Col sm={1} xs={2} className="res_btn1 d-lg-none d-xs-block">
                <Button onClick={handleShow}>
                  <a><FaBars></FaBars></a>
                </Button>
                <Offcanvas className="" show={show} onHide={handleClose}>
                <div className='responsive_off'>
                <Link to="/"><div><a>Home</a></div></Link>
                <Link to="/About"><div><a>About</a></div></Link>
                <Link to="/Produce"><div><a>Produce</a></div></Link>
                <Link to="/Blog1"><div><a>Blog</a></div></Link>
                <Link to="/Pages"><div><a>Pages</a></div></Link>
                <Link to="/Contacts"><div><a>Contacts</a></div></Link>
                </div>
                </Offcanvas>
              </Col>
              <Col xs={4}>
                <div className='logo_2_res d-lg-none'>
                  <img src={require('../image/logo1.png')}></img>
                </div>
              </Col>
              <Col xs={6}>
                <div className='dropdown1 d-lg-none'>
                  <div className='hd_icon'>
                    <a><IoSearchOutline></IoSearchOutline></a>
                  </div>
                  <div className='navdropdown1'>
                    <NavDropdown>
                      <NavDropdown.Item>
                        <div className='d-flex'>
                          <a><FaPhoneAlt></FaPhoneAlt></a>
                          <p>1-800-1234-5671</p>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <div className='d-flex'>
                          <a><IoMdMail></IoMdMail></a>
                          <p>info@demolink.org</p>
                        </div>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* ==============================logo header end========================== */}
      </header>
    </>
    );    
}
export default Header;