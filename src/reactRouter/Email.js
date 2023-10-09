import React from 'react'
import { useLocation } from 'react-router-dom'

const Email = () => {
    const location = useLocation();
    return (
        <>

            <div className='container'>
                {location.pathname}
                <h2>Email </h2>
                <p>marwadtech@gmail.com</p>
            </div>
        </>
    )
}

export default Email