import Form from 'react-bootstrap/Form';
import { useAppSelector } from '../../store/Hooks'
import styles from "./WatchingArea.module.css"
import { changeAutoText } from '../../store/TextSlice'



const WatchingArea = () => {
    let pointerCounter: number = -1
    const identicText = useAppSelector(state => state.Text.identicText)
    const loadedText = useAppSelector(state => state.Text.loadedText)
    const chars = [...identicText]
    const data = chars.map(el => {
        pointerCounter++
        return { place: pointerCounter, element: el }
    })

    const pointer = useAppSelector(state => state.Text.pointer)

    function finish () {
        alert ('Обезьяны написали!')
    }

    if (loadedText !== "" && identicText === loadedText) finish()

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