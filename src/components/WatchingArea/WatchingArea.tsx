import Form from 'react-bootstrap/Form';
import { useAppSelector, useAppDispatch } from '../../store/Hooks'
import styles from "./WatchingArea.module.css"
import { changeAutoText } from '../../store/TextSlice'
import CustomAlert from '../../utils/CustomAlert/CustomAlert';


const WatchingArea = () => {

    const dispatch = useAppDispatch()

    let pointerCounter: number = -1
    const identicText = useAppSelector(state => state.Text.identicText)
    const loadedText = useAppSelector(state => state.Text.loadedText)
    const chars = [...identicText]
    const data = chars.map(el => {
        pointerCounter++
        return { place: pointerCounter, element: el }
    })
    
    const autotext = useAppSelector(state => state.Text.autotext)
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
            {loadedText !== "" && identicText === loadedText
            ? <CustomAlert title="Ура!" body="Обезьяны написали!" button="Закрыть" />
            : null}
        </>
    )
}

export default WatchingArea