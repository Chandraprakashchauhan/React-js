import React from 'react'
import Common from './Common'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation();
    return (
        <>
            <p className='container'>{location.pathname}</p>
            <Common name="Wellcome to About page" visit="/contact" btname="Contact Now" img="https://media.licdn.com/dms/image/D5612AQHgdInbW_TZAA/article-cover_image-shrink_600_2000/0/1655659700892?e=2147483647&v=beta&t=ArU6NbYErcp4sVbF_LEV_6P6oM_gPvAXjlj78yHOUdg" />
        </>
    )
}

export default About