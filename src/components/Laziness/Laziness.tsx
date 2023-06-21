import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { changeAutoText, changeUserText } from '../../store/TextSlice'
import { useAppSelector, useAppDispatch } from '../../store/Hooks'

const Laziness = () => {
    const letters = `абвгдеёжзийклмнопрстуфхцчшщъыьэюя .,-?!":—()`

    const dispatch = useAppDispatch()

    const autotext = useAppSelector(state => state.Text.autotext)

    let intervalID = useRef(0)

    function intervalDispatch () {
        if (autotext) {
            let intID = setInterval(() => {
                let randomIndex = Math.floor( Math.random() * letters.length )
                let randomLetter = letters[randomIndex]             
                dispatch(changeUserText(randomLetter))
            }, 20)     
            intervalID.current = intID
        } else {
            if (intervalID) clearInterval(intervalID.current)
        }
    }

    useEffect(() => { 
            intervalDispatch ()
    },[autotext]);

    const handleWriting = () => {     
        dispatch(changeAutoText(!autotext))    
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
                {autotext}
            </h1>
        </>
    )
}

export default Laziness