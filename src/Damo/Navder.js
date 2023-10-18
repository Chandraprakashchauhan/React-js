import React from 'react'
import { NavLink } from 'react-router-dom'

const Navder = () => {

    const navBarO = [
        { path: '/c/intro', text: 'C' },
        { path: '/cpp/intro', text: 'C++' },
        { path: '/js/intro', text: 'JavaScript' },

    ]
    return (
        <>
            <ul className="nav justify-content-end border m-2 float-end" style={{ width: '100%', backgroundColor: '#8899db' }} >
                {
                    navBarO.map((t) => {
                        return (
                            <li className="nav-item">

                                <NavLink className="nav-link active" to={t.path}>{t.text}</NavLink>
                            </li>
                        )
                    })
                }

            </ul>

        </>
    )
}

export default Navder