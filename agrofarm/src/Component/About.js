import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from "./Footer";
import Header from "./Header";
import Ourfarm from "./Ourfarm";
import Ourteam from "./Ourteam";
import Testimonials from "./Testimonials";

const about1 = {
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
function About() {
    return (
        <>
            <Header></Header>
            <div>
                <div className="about_1"></div>
                <div className="about1_info"><h1>About</h1></div>
                <div className="aboutus ">
                    <Container>
                        <Row>
                            <Col>
                                <div className="d-flex justify-content-center">
                                    <div className="active px-2">HOME</div>
                                    <div className="px-2"><FaArrowRightLong></FaArrowRightLong></div>
                                    <div className="px-2">ABOUT</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Ourfarm></Ourfarm>
            <div className="aboutus_2">
                <div className="about2_slider align-items-center">
                    <div className="about2_hd text-center"><h1>Our History</h1></div>
                    <OwlCarousel id="s5" className='owl-theme' fade autoplay={true} {...about1}>
                        <div class='item'>
                            <div className="about2_sl_info text-center">
                                <h1>Establishment</h1>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="about2_sl_info text-center">
                                <h1>First Success</h1>
                                <p>Mirabilis fraticinida patienter imperiums luna est. Ecce, mensa! Eleatess crescere, tanquam grandis valebat. Dexter, ferox accolas</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="about2_sl_info text-center">
                                <h1>New Technologies</h1>
                                <p>Est primus usus, cesaris. Azureus, fortis coordinataes sapienter magicae de raptus, germanus bursa. Peritus, nobilis buxums sed</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="about2_sl_info text-center">
                                <h1>National Recognition</h1>
                                <p>Barbatus fortiss ducunt ad poeta. Orexis dexter domus est. Glos, fermium, et demissio. Altus, germanus sectams tandem experientia</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="about2_sl_info text-center">
                                <h1>Partnership</h1>
                                <p>Guttuss sunt sagas de pius ionicis tormento. Sunt capioes acquirere brevis, mirabilis fluctuses. Regius, alter lapsuss semper</p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            <Ourteam></Ourteam>
            <div className="about_score1">
                <div className="score_info">
                    <Container>
                        <Row>
                            <Col md={3} xs={6} >
                                <div className="score_item  text-center">
                                    <h1>245</h1>
                                    <div className="about_shape"></div>
                                    <p>Vegetables<br></br>and fruits</p>
                                </div>
                            </Col>
                            <Col md={3} xs={6}>
                                <div className="score_item  text-center">
                                    <h1>382</h1>
                                    <div className="about_shape"></div>
                                    <p>Reliable<br></br>partners</p>
                                </div>
                            </Col>
                            <Col md={3} xs={6}>
                                <div className="score_item  text-center">
                                    <h1>1267</h1>
                                    <div className="about_shape"></div>
                                    <p>Satisfied<br></br>customers</p>
                                </div>
                            </Col>
                            <Col md={3} xs={6}>
                                <div className="score_item  text-center">
                                    <h1>474</h1>
                                    <div className="about_shape"></div>
                                    <p>New blog<br></br>articles</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </>
    );
}
export default About;