import React, { useState } from 'react'

const Toggle = () => {
    const [status, setstatus] = useState(true);
    return (
        <>
            <h1>Toggle</h1>
            {
                status ? <h4>Well-Come</h4> : null
            }

            <button onClick={() => setstatus(false)}>Hide</button>
            <button onClick={() => setstatus(true)}>Show</button>
            <button onClick={() => setstatus(!status)}>Toggle</button>

            <hr />

        </>
    )
}

export default Toggle