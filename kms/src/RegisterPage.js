import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './logo.svg';

function RegisterPage() {
    return (
        <div className="RegisterPage">
            <header className="RegisterPage-header">
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={logo} />
                                <Card.Body>
                                    <Card.Title>Knowledge Management System</Card.Title>
                                    <Card.Text>Global Service Center</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={8}>
                            <h2>Sign Up</h2>
                            <Form.Row className="my-sm-3">
                                <Col>
                                    <Form.Control placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Last name" />
                                </Col>
                            </Form.Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Repeat Password" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                            <p>Already have an account? <Button variant="link">Login Here</Button></p>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default RegisterPage;