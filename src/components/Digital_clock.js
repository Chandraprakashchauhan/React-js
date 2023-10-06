import React, { useState } from 'react'

const Digital_clock = () => {

    let time = new Date().toLocaleTimeString();
    const [clock, setClock] = useState(time)

    const update = () => {
        let time = new Date().toLocaleTimeString();
        setClock(time);
    }

    setInterval(update, 1000)
    return (
        <>
            <h1>Digital Clock</h1>
            <h1>{clock}</h1>
            <hr />
        </>
    )
}

export default Digital_clock