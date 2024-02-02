import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function Stack1() {
    return (
        <>
            <div className='stack1'>
                <Container>
                    <div className='stackinfo text-center'>
                        <h1>Subscribe to Our Newsletter</h1>
                        <p>Sign up to our newsletter and be the first to know about the latest company news, special offers, events, and discounts.</p>
                    </div>
                    <div className='stack_1'>
                        <Stack direction="horizontal" gap={3}>
                            <Form.Control className="me-auto" placeholder="Add your item here..." />
                            <Button variant="secondary">Submit</Button>
                            <div className="vr" />
                        </Stack>
                    </div>
                </Container>
            </div>
        </>
    );
}
export default Stack1;