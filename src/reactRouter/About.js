import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className='m-2'>
                <h1> About page</h1>

                <button className='btn btn-primary p-1 px-3 ' onClick={() => navigate("/contact")}> Go to Contact</button><br /><br />


                <button className='btn btn-primary p-1 px-3' onClick={() => navigate(-1)}> Go back</button>







            </section>

        </>
    )
}

export default About