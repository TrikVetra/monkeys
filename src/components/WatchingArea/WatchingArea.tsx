import Form from 'react-bootstrap/Form';
import { useAppSelector } from '../../store/Hooks'
import styles from "./WatchingArea.module.css"

const WatchingArea = () => {
    let counter: number = -1
    const identicText = useAppSelector(state => state.Text.identicText)
    const chars = [...identicText]
    const data = chars.map(el => {
        counter++
        return { place: counter, element: el }
    })

    const pointer = useAppSelector(state => state.Text.pointer)

    return (
        <>
            <h5>Если угадал с буквами, увидишь их тут</h5>
            <div className={styles.area}>
                {data.map(el => {
                    return (
                        <div
                            key={el.place}
                            className={el.place === pointer ? styles.pointer : ""}
                        >
                            {el.element}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default WatchingArea