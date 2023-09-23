import React, { useContext } from 'react';
import BioData from './BioData';

const ComB = (props) => {
    const { firstName, lastName } = useContext(BioData);
    return (
        <>
            <h1>UseContext ComB</h1>
            <p>name : {props.name}</p>
            <p>My Name : {firstName} {lastName}</p>
            <hr />
        </>
    )
}
export default ComB;
