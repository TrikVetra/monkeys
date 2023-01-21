import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './Intro.module.css'

const Intro = () => {
    return (
        <Container fluid="md">
            <Row >
                <Col sm={9}>
                <h1 className={style.title}>Может ли обезьяна написать Войну и Мир? </h1>
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