import Form from 'react-bootstrap/Form';
import { useAppSelector } from '../../store/Hooks'

const WatchingArea = () => {

    const identicText = useAppSelector(state => state.Text.identicText)

    return (
        <>
            <h5>Если угадал с буквами, увидишь их тут</h5>
            <Form.Control 
                style={{height: "50vh", backgroundColor: "#D3D3D3"}}
                as="textarea" 
                aria-label="With textarea" 
                value={identicText} 
            />
        </>
    )
}

export default WatchingArea