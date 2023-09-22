import React, { useState } from 'react'

const UseStates = () => {

    const [name, setname] = useState('Chandra Prakash');

    const changeName = () => {
        // let val = name;
        (name === 'Chandra Prakash') ? setname('CP Suthar') : setname('Chandra Prakash');
    }

    return (
        <>
            <hr />
            <h1>Use State</h1>
            <h3>{name}</h3>
            <button onClick={changeName}>click me</button>
            <hr />
        </>
    )
}

export default UseStates