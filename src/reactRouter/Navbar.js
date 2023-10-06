import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className='m-2'>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/' >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" >About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" >Contact</NavLink>
                    </li>

                </ul>
            </header>
        </>
    )
}

export default Navbar