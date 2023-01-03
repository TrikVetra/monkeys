import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
//import { useSelector, useDispatch } from 'react-redux'
import { changeValue } from '../../store/LoadedTextSlice'
import { useAppSelector, useAppDispatch } from '../../store/Hooks'

const LoadText = () => {

    //let text = "test"

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const text = useAppSelector(state => state.LoadedText.value)
    const dispatch = useAppDispatch()

    return (
        <>
            <Button variant="dark" type="submit" onClick={handleShow}>
                Загрузить текст
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Загрузить текст</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Control 
                    as="textarea" 
                    aria-label="With textarea" 
                    value={text} 
                    onChange={(e) => dispatch(changeValue(e.target.value))}
                    />

                </Modal.Body>
                <Modal.Footer>
                <Button variant="outline-dark" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="dark" onClick={handleClose}>
                    Готово
                </Button>
                </Modal.Footer>
            </Modal>
        </>
            
        
    )
}

export default LoadText