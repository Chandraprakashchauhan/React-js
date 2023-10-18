import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Service from './Service'
import './Style.css';
import Footer from './Footer'


const Pro_index = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='*' element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>


        </>
    )
}

export default Pro_index