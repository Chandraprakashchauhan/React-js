import React from 'react'
import { NavLink } from 'react-router-dom';
const Contact = () => {
    return (
        <>

            <section className='m-2'>
                <h1> Contact page</h1>
                <NavLink className="nav-link" to='/' >Go to Home</NavLink>
            </section>

        </>
    )
}

export default Contact