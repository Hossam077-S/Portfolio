import { Col, Form, InputGroup, Button } from 'react-bootstrap';
import NavBar from './NavBar';

export default function ContactUs() {
    return (
    <>
    <NavBar />
        <div className="contact-container">
            <div className="contact-Info">
                <div className="contact-title">
                    <h1>CONTACT ME</h1>
                    <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible</p>
                </div>
                <div className="contact-body">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} className="col-12 col-md-6" id="First-Form">
                                <InputGroup>
                                    <Form.Control type="text" placeholder="Full-Name" required/>
                                </InputGroup>

                                <InputGroup>
                                    <Form.Control type="number" placeholder="Phone Number" required/>
                                </InputGroup>

                                <InputGroup>
                                    <Form.Control type="email" placeholder="Email" required/>
                                </InputGroup>

                                <InputGroup>
                                    <Form.Control type="text" placeholder="Subject" required/>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} className="col-md-6 pr-4" id="Second-Form">
                                <InputGroup>
                                    <Form.Control id="area" as="textarea" placeholder="Please describe shortly you project" rows={5} required/>
                                </InputGroup>
                                <Button variant="outline-danger" className="mt-3" type="submit" size="lg" block>Contact Me</Button>
                            </Form.Group>
                            
                        </Form.Row>
                        
                        
                    </Form>

                </div>
            </div>
            
        </div>
    </>
    );
}

