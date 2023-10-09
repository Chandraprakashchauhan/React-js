import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <section className='container'>
                {location.pathname}

                <h1> About page</h1>

                <button className='btn btn-primary p-1 px-3 ' onClick={() => navigate("/contact")}> Go to Contact</button><br /><br />


                <button className='btn btn-primary p-1 px-3' onClick={() => navigate(-1)}> Go back</button>







            </section>

        </>
    )
}

export default About;