import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { changeAutoText } from '../../store/TextSlice'
import { useAppSelector, useAppDispatch } from '../../store/Hooks'

const Laziness = () => {
    const dispatch = useAppDispatch()

    const [autotext, setAutotext] = useState(false);  
    //const [intervalID, setIntervalID] = useState(0);      
    let intervalID = useRef(0)

    function intervalDispatch () {
        if (autotext) {
            let intID = setInterval(() => {
                let randomValue = String.fromCharCode(Math.floor(Math.random()*(1040-1071))+1071).toLocaleLowerCase()
                dispatch(changeAutoText(randomValue))
            }, 500)     
            intervalID.current = intID
        } else {
            if (intervalID) clearInterval(intervalID.current)
        }
    }

    useEffect(() => { 
            intervalDispatch ()
    },[autotext]);

    const handleWriting = () => {        
        setAutotext(!autotext)         
    }

    return (
        <>
            <Button 
            style={{"margin": "0px 0px 20px 10px"}}
            variant="dark" 
            type="submit" 
            onClick={handleWriting}>
                {autotext ? 'Остановите обезьян!' : 'Лень писать, зовите обезьян!'}                
            </Button>
            <br></br>
            <h1>
                Сделать автотекст хранящимся в сторе.
                Если true += если false = 
            </h1>
        </>
    )
}

export default Laziness