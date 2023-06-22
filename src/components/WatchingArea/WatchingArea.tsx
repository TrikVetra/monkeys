import Form from 'react-bootstrap/Form';
import { useAppSelector, useAppDispatch } from '../../store/Hooks'
import styles from "./WatchingArea.module.css"
import { finish } from '../../store/TextSlice'
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
    
    const pointer = useAppSelector(state => state.Text.pointer)
    const counter = useAppSelector(state => state.Text.counter)

    const isFinish = useAppSelector(state => state.Text.isFinish)
    if (loadedText !== "" && loadedText === identicText) dispatch(finish(true))

    return (
        <>
            <h5>Если угадал с буквами, увидишь их тут</h5>

            <div className={styles.area}>
                {data.map(el => {
                    return (
                        <div
                            key={el.place}
                            className={el.place === pointer ? styles.pointer : styles.holder}
                        >
                            {el.element}                            
                        </div>
                        
                    )
                })}
            </div>

            {isFinish
            ? <CustomAlert 
                title="Ура!" 
                body = {
                    <>
                    <div>Обезьяны написали!</div>
                    <div>Понадобилось <span className={styles.pointer}>{counter+1}</span> обезьян.</div>
                    </>
                }
                button="Начать заново" 
                onClose={() => {dispatch(finish(false))}}/>
            : null}
        </>
    )
}

export default WatchingArea