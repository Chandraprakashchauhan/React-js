import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary container position-sticky z-1 " style={{ top: '5px' }}>
                <div className="container-fluid text-primary">
                    <a className="navbar-brand text-primary" to="/">Chandra Prakash</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse  nav justify-content-end " id="navbarSupportedContent">
                        <ul className="navbar-nav me-0  mb-2 mb-lg-0 ">
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link menu_nav  text-primary" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link menu_nav    text-primary" to='/service' >Services</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link menu_nav   text-primary" to='/about' >About</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link menu_nav    text-primary" to='/contact' >Contact</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar