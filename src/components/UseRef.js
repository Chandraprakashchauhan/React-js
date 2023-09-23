import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [show, setShow] = useState(false);

    const luckyName = useRef(null);

    const submitForm = (e) => {

        e.preventDefault();

        const name = luckyName.current.value

        name === "" ? alert("plz fill lucky Name") : setShow(true);

    }

    return (
        <>
            <h1>useRef</h1>

            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="luckyName">Enter your Lucky Name</label>
                    <input type="text" id="luckyName" ref={luckyName} />
                </div>
                <button type='submit'>Submit</button>
            </form>
            <p>{show ? `your lucky Name is ${luckyName.current.value}` : " "} </p>

            <hr />
        </>
    )
}

export default UseRef