import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './logo.svg';

function LoginPage() {
    return (
        <div className="LoginPage">
            <header className="LoginPage-header">
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
                            <h2>Login</h2>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                            <p>Don't have an account? <Button variant="link">Register Here</Button></p>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default LoginPage;