import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useAppSelector } from '../../store/Hooks'
import style from './Counter.module.css'

const Counter = () => {

    const counterValue = useAppSelector(state => state.Text.counter)

    return (
            <div className={style.counter}>
                <h1>{counterValue}</h1>
            </div>
    )
}

export default Counter