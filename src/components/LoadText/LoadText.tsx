import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
//import { useSelector, useDispatch } from 'react-redux'
import { changeLoadedText } from '../../store/TextSlice'
import { useAppSelector, useAppDispatch } from '../../store/Hooks'
import CustomAlert from '../../utils/CustomAlert/CustomAlert';

// const LoadText = () => {

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const text = useAppSelector(state => state.Text.loadedText)
//     const dispatch = useAppDispatch()

//     return (
//         <>
//             <Button 
//             style={{"margin": "0px 0px 20px 10px"}}
//             variant="dark" 
//             type="submit" 
//             onClick={handleShow}>
//                 Загрузить текст
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                 <Modal.Title>Загрузить текст</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>

//                     <Form.Control 
//                     as="textarea" 
//                     aria-label="Text" 
//                     value={text} 
//                     onChange={(e) => dispatch(changeLoadedText(e.target.value))}
//                     />

//                 </Modal.Body>
//                 <Modal.Footer>
//                 {/* <Button variant="outline-dark" onClick={handleClose}>
//                     Закрыть
//                 </Button> */}
//                 <Button variant="dark" onClick={handleClose}>
//                     Готово
//                 </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }

const LoadText = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <Form.Control
                            as="textarea"
                            aria-label="Text"
                            value={text}
                            onChange={(e) => dispatch(changeLoadedText(e.target.value))}
                        />}
                    button="Готово" />
                : null}
        </>
    )
}

export default LoadText