import Form from 'react-bootstrap/Form';
import { useAppSelector } from '../../store/Hooks'
import styles from "./WatchingArea.module.css"

const WatchingArea = () => {
    let counter: number = -1
    const identicText = useAppSelector(state => state.Text.identicText)
    const chars = [...identicText]
    const data = chars.map(el => {   
        counter++     
        return {place: counter, element: el}
    })

    const pointer = useAppSelector(state => state.Text.pointer)

    return (
        <>
            {pointer}
            <h5>Если угадал с буквами, увидишь их тут</h5>
            <div className={styles.area}>
                {data.map(el => {                    
                    if (el.place === pointer) {return <div key={el.place} className={styles.pointer}>{el.element}</div>}
                    else {return <div key={el.place}>{el.element}</div>}
                })}
            </div>
            {/* <Form.Control 
                style={{height: "50vh", backgroundColor: "#D3D3D3"}}
                as="textarea" 
                aria-label="With textarea" 
                value={String(identicText)} 
                readOnly
            /> */}
        </>
    )
}

export default WatchingArea