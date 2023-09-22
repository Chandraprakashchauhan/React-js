import React, { useState } from 'react'

const UseStateArray = () => {
    const biodata = [
        { id: 0, Name: "Dilip", Age: 18 },
        { id: 1, Name: "Veepul", Age: 20 },
        { id: 2, Name: "Bharat", Age: 25 },
        { id: 3, Name: "Mukesh", Age: 19 },
    ]

    const [myArray, setmyArray] = useState(biodata);

    const clearArray = () => {
        setmyArray([]);

    }

    const removeElem = (id) => {
        const myNewArray = myArray.filter((curelm) => {
            return curelm.id != id;
        })

        setmyArray(myNewArray);

    }

    return (
        <>
            <h1>Use State Array</h1>

            {
                myArray.map((curelm) => {
                    return (
                        <p key={curelm.id}>Name: {curelm.Name} & Age: {curelm.Age} <button onClick={() => removeElem(curelm.id)}>remove</button></p>

                    );
                }
                )

            }
            <button onClick={clearArray}>Clear</button>

            <hr />
        </>
    )
}

export default UseStateArray