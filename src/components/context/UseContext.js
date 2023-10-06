import React from 'react';
import ComA from './ComA';
import BioData from './BioData';



const UseContext = (props) => {
    return (
        <>
            <h1>UseContext</h1>
            <p>name : {props.name}</p>
            <hr />
            <BioData.Provider value={{ firstName: 'Chandra Prakash', lastName: 'Suthar' }}>
                <ComA />
            </BioData.Provider>


        </>
    )
}

export default UseContext;
