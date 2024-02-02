import { GiMonsteraLeaf, GiFarmTractor, GiGreenhouse, GiFarmer } from "react-icons/gi";
import { Container, Row, Col } from 'react-bootstrap';

function Services(){
    return(
        <>
            <div className='sec_2 space text-md-center text-center'>
        <Container>
          <Row>
            <Col lg={3} sm={6}>
              <div className='sec_item1'>
                <a><GiMonsteraLeaf></GiMonsteraLeaf></a>
                <h3>Natural feed</h3>
                <p>We use the best feeds with essential nutrients to raise the best chickens and turkeys.</p>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className='sec_item1'>
                <a><GiFarmTractor></GiFarmTractor></a>
                <h3>Natural feed</h3>
                <p>We use the best feeds with essential nutrients to raise the best chickens and turkeys.</p>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className='sec_item1'>
                <a><GiGreenhouse></GiGreenhouse></a>
                <h3>Natural feed</h3>
                <p>We use the best feeds with essential nutrients to raise the best chickens and turkeys.</p>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className='sec_item1'>
                <a><GiFarmer></GiFarmer></a>
                <h3>Natural feed</h3>
                <p>We use the best feeds with essential nutrients to raise the best chickens and turkeys.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
        </>
    );
}
export default Services;
