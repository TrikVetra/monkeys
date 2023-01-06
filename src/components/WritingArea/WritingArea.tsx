import Form from 'react-bootstrap/Form';
//import { useSelector, useDispatch } from 'react-redux'
import { changeUserText } from '../../store/TextSlice'
import { useAppSelector, useAppDispatch } from '../../store/Hooks'

const WritingArea = () => {

    const userText = useAppSelector(state => state.Text.userText)
    const dispatch = useAppDispatch()

    return (
        <>
            <h5>Пиши как обезьяна тут</h5>
            <Form.Control 
                style={{height: "50vh"}}
                as="textarea" 
                aria-label="With textarea" 
                value={userText} 
                onChange={(e) => dispatch(changeUserText(e.target.value))}
            />
        </>
    )
}

export default WritingArea