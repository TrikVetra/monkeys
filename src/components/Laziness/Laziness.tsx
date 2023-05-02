import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Laziness = () => {

    const [autotext, setAutotext] = useState(false);

    const handleWriting = () => setAutotext(!autotext)

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