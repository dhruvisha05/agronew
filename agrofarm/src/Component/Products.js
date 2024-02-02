import { Container, Row, Col } from 'react-bootstrap';
function Products(){
    return(
        <>
            <div className='sec_3 space'>
        <Container>
          <Row>
            <div className='sec3_hd text-center'>
              <div className='sec_hd_1'>What we offer</div>
              <div className='sec_hd_2'>Our Products</div>
            </div>
            <Col lg={3} sm={6}>
              <div className='sec3_item1'>
                <img src={require('../image/sec_3_1.png')}></img>
                <h1>VEGETABLES</h1>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className='sec3_item1'>
                <img src={require('../image/sec_3_2.png')}></img>
                <h1>GRAIN AND OILSEED</h1>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className='sec3_item1'>
                <img src={require('../image/sec_3_3.png')}></img>
                <h1>FRUITS AND NUTS</h1>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className='sec3_item1'>
                <img src={require('../image/sec_3_4.png')}></img>
                <h1>TOBACCO</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
        </>
    );
}
export default Products;