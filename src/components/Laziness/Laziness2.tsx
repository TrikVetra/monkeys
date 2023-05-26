import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { changeUserText } from '../../store/TextSlice'
import { useAppSelector, useAppDispatch } from '../../store/Hooks'

var intervalID: number

const Laziness = () => {
    const dispatch = useAppDispatch()

    const [autotext, setAutotext] = useState(false);    
    const userText = useAppSelector(state => state.Text.userText)

    function intervalDispatch (userText: string) {
        intervalID = setInterval(() => dispatch(changeUserText(userText + 'a')), 500)        
    }

    useEffect(() => {
        if (autotext) {
            intervalDispatch(userText)     
        } else {
            clearInterval(intervalID)
        }      
    }, [autotext]);

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

            НЕ РАБОТАЕТ. СДЕЛАТЬ КОНКАТЕНАЦИЮ В СЛАЙСЕ!!!

        </>
    )
}

export default Laziness