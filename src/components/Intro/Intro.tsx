import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Intro = () => {
    return (
        <Container fluid="md">
            <Row >
                <Col sm={10}>
                <h1>Может ли обезьяна написать Войну и Мир? </h1>
                </Col>
            </Row>
            <Row >
                <Col sm={8}>
                <p>
                Противники эволюции говорят, что сложное существо не могло возникнуть само собой, потому что случайное возникновение такого набора генов, как, скажем, у человека невозможно.     
                </p> 
                </Col>
                                           
            </Row>
            <Row>
                <Col sm={8}>
                <p>
                Так ли это при условии, что естественный отбор будет закреплять полезные мутации?
                Давайте проверим.
                </p>
                </Col>                
            </Row>            
        </Container>
    )
}

export default Intro