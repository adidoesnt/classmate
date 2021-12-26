import {Card, Container} from 'react-bootstrap';

function ModuleCard(props) {
    return (
        <Container className= 'd-flex align-items-center justify-content-center'>
            <Card>
                <Card.Body>
                    {props.children}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ModuleCard;