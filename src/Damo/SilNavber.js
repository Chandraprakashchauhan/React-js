import React from 'react'
import { NavLink } from 'react-router-dom'
import Try from './Try'

const SilNavber = (props) => {
    const silNavberO = [
        {
            path: 'intro',
            text: 'Intro'
        },
        {
            path: 'loop',
            text: 'Loop'
        },
        {
            path: 'ifelse',
            text: 'Ifelse'
        },
        {
            path: 'function',
            text: 'Function'
        },
    ]

    return (
        <>
            {/* <ul className="nav flex-column w-25  border m-3 float-start" style={{ backgroundColor: '#8899db' }}>
                {
                    silNavberO.map((t) => {
                        return (
                            <li className="nav-item">
                                <NavLink className="nav-link" to={props.pro + t.path}> {t.text}</NavLink>
                            </li>
                        );
                    })
                }

            </ul> */}

            {/* sdfghjkl; */}
            {/* <Try /> */}

            <nav className="navbar navbar-expand-md bg-body-tertiary" style={{
                width: 'fit-content', backgroundColor: 'red'
            }} >
                <div className='bg-primary px-5' >
                    <button className="navbar-toggler fbtn focus-ring  focus-ring-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>


                    <div className="offcanvas offcanvas-start bg-primary" id="offcanvasNavbar" style={{ top: '80px', width: '100px' }}>
                        <div className="offcanvas-header position-relative">
                            {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
                            <button type="button" className="btn-close position-absolute top-0 end-0 m-2 " data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <ul className="navbar-nav d-flex flex-column">
                            {
                                silNavberO.map((t) => {
                                    return (
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={props.pro + t.path}> {t.text}</NavLink>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                </div>
            </nav>




        </>
    )
}

export default SilNavber