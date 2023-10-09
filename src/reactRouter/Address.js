import React from 'react'
import { useLocation } from 'react-router-dom'

const Address = () => {
    const location = useLocation();
    return (
        <>
            <div className="container">
                {location.pathname}

                <h1>Address</h1>

                <pre>
                    Timber Market Rd, Vishwakarma gali,
                    Shreepal Nagar, Sumerpur,
                    Rajasthan 306902
                </pre>
            </div>

        </>
    )
}

export default Address