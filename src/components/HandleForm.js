import React, { useState } from 'react'

const HandleForm = () => {
    const [Name, setName] = useState("");
    const [Select, setSelect] = useState("");
    const [experience, setExperience] = useState("");

    const getdata = (e) => {
        e.preventDefault();
        console.log("Name : " + Name);
        console.log("language : " + Select);
        console.log("Experience : " + experience);
    }

    return (
        <>
            <h1>Handle Form</h1>

            <form onSubmit={getdata}>
                <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} /><br />
                <select onChange={(e) => setSelect(e.target.value)}>
                    <option>html</option>
                    <option>css</option>
                    <option>java</option>
                    <option>c c++</option>
                </select><br />
                <input type="number" placeholder='Experience' onChange={(e) => setExperience(e.target.value)} /><br />

                <button type="submit">Submit</button>
            </form>
            <p>Name: {Name} </p>
            <p>language: {Select}</p>
            <p>Experience : {experience}</p>
            <hr />
        </>
    )
}

export default HandleForm