import { useAppSelector } from '../../store/Hooks'
import style from './Counter.module.css'

const Counter = () => {

    const counterValue = useAppSelector(state => state.Text.counter)

    return (
            <div className={style.counter}>
                <h1>{counterValue+1}</h1>
            </div>
    )
}

export default Counter