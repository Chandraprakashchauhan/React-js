import React, { createContext } from 'react';
import ComA from './ComA';
import BioData from './BioData';



const UseContext = (props) => {
    return (
        <>
            <h1>UseContext</h1>
            <p>name : {props.name}</p>
            <hr />
            <BioData.Provider value={{ firstName: 'Chandra Prakash', lastName: 'Suthar' }}>
                <ComA name={props.name} />


            </BioData.Provider>


        </>
    )
}

export default UseContext;
