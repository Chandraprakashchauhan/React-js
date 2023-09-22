import React from 'react'

const Prop = (props) => {
    return (
        <>
            <h1>Props</h1>
            <p>Name : {props.name} </p>
            <p>Age : {props.age}</p>

            <hr />
        </>
    )
}

export default Prop