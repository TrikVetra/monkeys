import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
//import { useSelector, useDispatch } from 'react-redux'
import { changeLoadedText } from '../../store/TextSlice'
import { useAppSelector, useAppDispatch } from '../../store/Hooks'
import CustomAlert from '../../utils/CustomAlert/CustomAlert';

const LoadText = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const text = useAppSelector(state => state.Text.loadedText)
    const dispatch = useAppDispatch()

    return (
        <>
            <Button
                style={{ "margin": "0px 0px 20px 10px" }}
                variant="dark"
                type="submit"
                onClick={handleShow}>
                Загрузить текст
            </Button>

            {show
                ? <CustomAlert
                    title="Загрузить текст"
                    body={
                        <div>
                            <p>
                                Можешь загрузить и «войну и мир», конечно, но для начала давай что поменьше?
                            </p>
                            <Form.Control
                                as="textarea"
                                aria-label="Text"
                                value={text}
                                onChange={(e) => dispatch(changeLoadedText(e.target.value))}
                            />
                        </div>
                    }
                    button="Готово"
                    onClose={handleShow} />
                : null}
        </>
    )
}

export default LoadText