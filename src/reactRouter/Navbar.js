import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className='m-0  p-1 pb-2 bg-primary-subtle '>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link ook" to='/' >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search" >Search</NavLink>
                    </li>
                    <li className="nav-item dropdown border border-0 ">
                        <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About
                        </Link>
                        <ul className="dropdown-menu p-2 border border-0 bg-primary-subtle">

                            <li><NavLink className="nav-link px-2 m-0" to="/about">About</NavLink></li>
                            <li><NavLink className="nav-link px-2 m-0" to="/about/email">Email</NavLink></li>
                            <li><NavLink className="nav-link px-2 m-0" to="/about/address">Address</NavLink></li>

                        </ul>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" >Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/user" >User</NavLink>
                    </li>

                </ul>
            </header>
        </>
    )
}

export default Navbar