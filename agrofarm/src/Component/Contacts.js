import Footer from "./Footer";
import Header from "./Header";
import { FaArrowRightLong } from "react-icons/fa6";
import { Container, Row, Col } from "react-bootstrap";
import Services from "./Services";

function Contacts(){
    return(
        <>
        <Header></Header>
        <div>
                <div className="Contacts_1"></div>
                <div className="Contacts_info"><h1>Contacts</h1></div>
                <div className="Contacts ">
                    <Container>
                        <Row>
                            <Col>
                                <div className="d-flex justify-content-center">
                                    <div className="active px-2">HOME</div>
                                    <div className="px-2"><FaArrowRightLong></FaArrowRightLong></div>
                                    <div className="px-2">CONTACTS</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        <Services></Services>
        <Footer></Footer>
        </>
    );
}
export default Contacts;