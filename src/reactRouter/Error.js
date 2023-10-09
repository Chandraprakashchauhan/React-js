import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="text-center my-5">
                <h2 >404 page not find </h2>
                <p>Sorry, This page doesn`t exist</p>

                <Link className="nav-link" to="/" >go to home</Link>




            </div>
        </>
    )
}

export default Error