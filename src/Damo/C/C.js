import React from 'react'
import { Navbar } from 'react-bootstrap'
import SilNavber from '../SilNavber'
import Loop from './Loop'
import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Intro from './Intro'


const C = () => {
    return (
        <>

            <SilNavber pro="/c/" />
            <div className='border float-end' style={{ width: '70%', height: '500px', backgroundColor: '#8899db' }}>
                <Outlet />
            </div>
            {/* <Intro /> */}





        </>
    )
}

export default C