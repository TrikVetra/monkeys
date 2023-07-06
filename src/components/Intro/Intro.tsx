import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './Intro.module.css'

const Intro = () => {
    return (
        <Container fluid="md">
            <Row >
                <Col sm={9}>
                    <h1 className={style.title}>Может ли обезьяна написать Войну и мир? </h1>
                </Col>
            </Row>
            <Row >
                <Col sm={8}>
                    <p>
                        Противники эволюции говорят, что сложное существо не могло возникнуть само собой, потому что случайное возникновение такого набора генов, как, скажем, у человека невозможно.
                    </p>
                    <p>
                        Также невозможно, как то, что обезьяны, будь их хоть миллион, случайно напечатают «Войну и мир», стуча по клавиатуре.
                    </p>
                    <p>
                        Так ли это при условии, что естественный отбор будет закреплять полезные мутации также, как буквы в этом приложении, если они случайно оказались на правильных местах?
                    </p>
                    <p>
                        Давайте проверим.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro