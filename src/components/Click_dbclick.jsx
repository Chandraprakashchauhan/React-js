import React, { useState } from 'react'

const Click_dbclick = () => {
    const [btntext, setBtntext] = useState('use me');
    const [color, setColor] = useState('black');

    const onClick = () => {
        setBtntext('onClick');
        setColor('yellow');

    }
    const onDoubleClick = () => {
        setBtntext('onDoubleClick')
        setColor('red');

    }
    const onMouseEnte = () => {
        setBtntext('onClick');
        setColor('yellow');

    }
    const onMouseLeave = () => {
        setBtntext('onDoubleClick')
        setColor('red');

    }

    return (
        <>
            <h1 style={{ color: color }}>Click DoubleClick</h1>
            <button> click me</button> <br />
            <button onClick={() => setColor('Green')}> click me</button> <br />
            <button onDoubleClick={() => setColor('Orange')}> onDoubleClick</button><br />
            <button onMouseEnter={() => setColor('Red')}>  onMouseEnter</button><br />
            <button onMouseLeave={() => setColor('Yellow')}> onMouseLeave</button><br />
            <button onMouseMove={() => setColor('Grey')}> onMouseMove</button><br />



        </>
    )
}

export default Click_dbclick