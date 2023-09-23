import React from 'react';
import ComB from './ComB';

const ComA = (props) => {
    return (
        <>
            <h1>UseContext Com A</h1>
            <p>name : {props.name}</p>
            <hr />
            <ComB name={props.name} />

        </>
    )
}

export default ComA