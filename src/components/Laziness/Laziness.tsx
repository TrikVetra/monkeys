import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { changeAutoText } from '../../store/TextSlice'
import { useAppSelector, useAppDispatch } from '../../store/Hooks'

const Laziness = () => {

    const autotext = useAppSelector(state => state.Text.autotext)

    const dispatch = useAppDispatch()

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
        </>
    )
}

export default Laziness