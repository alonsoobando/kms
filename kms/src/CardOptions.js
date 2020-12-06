import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function CardOptions() {
    return (
        <div className="CardOptions">
            <header className="CardOptions-header">
                <Container className="my-sm-4">
                    <CardDeck>
                        <Card>
                            <Card.Body>
                                <Card.Title><Button variant="link">Knowledge Base Articles</Button></Card.Title>
                                <Card.Text>
                                    Global Service Center's approved KBAs. Internal Only.
      </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title><Button variant="link">Quick Procedures</Button></Card.Title>
                                <Card.Text>
                                    Procedures for ticket handling. Approved for customer distribution.{' '}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title><Button variant="link">Tech-Tips</Button></Card.Title>
                                <Card.Text>
                                    Approved Tech-Tips.
      </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <CardDeck className="mt-sm-3">
                        <Card>
                            <Card.Body>
                                <Card.Title><Button variant="link">Training</Button></Card.Title>
                                <Card.Text>
                                    Global Service Center training documentation.
      </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title><Button variant="link">Internal Procedures</Button></Card.Title>
                                <Card.Text>
                                    Global Service Center department Procedures.{' '}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title><Button variant="link">Scripts & Tools</Button></Card.Title>
                                <Card.Text>
                                    Helpful tools for Global Service Center engineers. 
      </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </header>
        </div>
    );
}

export default CardOptions;