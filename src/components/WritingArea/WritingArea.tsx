import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { changeUserText } from '../../store/TextSlice'
import { useAppSelector, useAppDispatch } from '../../store/Hooks'
import CustomAlert from '../../utils/CustomAlert/CustomAlert';
import styles from "../WatchingArea/WatchingArea.module.css"

const WritingArea = () => {

    const dispatch = useAppDispatch()

    const [show, setShow] = useState(false);
    //const handleShow = () => setShow(true);

    const userText = useAppSelector(state => state.Text.userText)
    const loadedText = useAppSelector(state => state.Text.loadedText)

    function handleChange(e: any) {
        if (loadedText === '') {
            setShow(!show)
        } else {
            console.log(e)
            if(e.nativeEvent.data != null) {
                dispatch(changeUserText(e.target.value))
            }            
        }
    }

    return (
        <>
            <h5>Пиши как обезьяна тут</h5>
            <Form.Control
                style={{ height: "50vh" }}
                as="textarea"
                aria-label="With textarea"
                value={userText}
                onChange={(e) => handleChange(e)}
            />

            {show
                ? <CustomAlert
                    title="Текст не загружен"
                    body = {
                        <div>
                            Прежде чем начать, нажми <span className={styles.pointer}>Загрузить текст</span> и напиши там что-нибудь.
                        </div>
                    }
                    button="Готово"
                    onClose={handleChange} />
                : null}
        </>
    )
}

export default WritingArea