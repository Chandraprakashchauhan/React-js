import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
const Contact = () => {
    const location = useLocation();
    return (
        <>

            <section className=' container'>
                <p>{location.pathname}</p>
                <h1> Contact page</h1>
                <NavLink className="nav-link" to='/' >Go to Home</NavLink>
            </section>

        </>
    )
}

export default Contact