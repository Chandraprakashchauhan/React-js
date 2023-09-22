import React, { useState } from 'react'
import './Task.css';

const Task = () => {
    const [grid, setGrid] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);

    const [color, setColor] = useState(false);

    return (
        <>
            <div>Task</div>
            <h1>3 x 3</h1>
            <div className="grid-container">

                {grid.map((r) => (
                    <div className="grid-row">
                        {r.map(() => (

                            <button className={`grid-cell ${(color === false) ? 'gray' : 'green'}`} onClick={() => setColor(!color)} ></button>
                        ))}

                    </div>
                ))}

            </div>
        </>

    )
}

export default Task