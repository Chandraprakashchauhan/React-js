import React from 'react'
import { Navbar } from 'react-bootstrap'
import SilNavber from '../SilNavber'
import Loop from './Loop'
import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Intro from './Intro'
import Function from './Function'
import Ifelse from './Ifelse'


const Javascript = () => {
    return (
        <>
            <SilNavber pro="/js/" />
            <div className='border float-end' style={{ width: '70%', height: '500px', backgroundColor: '#8899db' }}>
                {/* <h1>js</h1> */}
                <Outlet />
            </div>






        </>
    )
}

export default Javascript