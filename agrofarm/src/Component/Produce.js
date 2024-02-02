import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Stack } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from './Header';
import Ourfarm from './Ourfarm';
import Products from './Products';
import Services from './Services';
import Testimonials from './Testimonials';
import Stack1 from './Stack1';
import Footer from './Footer';

function Produce() {
    return (
        <>
            <Header></Header>
            <div>
                <div className="Produce_1"></div>
                <div className="Produce1_info"><h1>See what kinds of produce twe grow at our farms…</h1></div>
                <div className="Produce">
                    <Container>
                        <Row>
                            <Col>
                                <div className="d-flex justify-content-center">
                                    <div className="active px-2">HOME</div>
                                    <div className="px-2"><FaArrowRightLong></FaArrowRightLong></div>
                                    <div className="px-2">PRODUCE</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Products></Products>
            <Services></Services>
            <Testimonials></Testimonials>
            <Stack1></Stack1>
            <Footer></Footer>

        </>
    );
}
export default Produce;