import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const User = () => {
    const { name } = useParams();
    const location = useLocation();
    // console.log(location)




    return (
        <>
            <div className="text-center">
                {location.pathname}
                <h3 >{name} page not </h3>
            </div>

        </>
    )
}

export default User