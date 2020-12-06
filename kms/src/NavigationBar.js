import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { House, Person, PersonPlus } from 'react-bootstrap-icons';

function NavigationBar() {
    return (
        <div className="NavigationBar">
            <header className="NavigationBar-header">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home"><House /> Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Button variant="outline-primary" className="mr-sm-2">Log In <Person /></Button>
                        <Button variant="outline-primary">Sign Up <PersonPlus /></Button>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </div>
    );
}

export default NavigationBar;