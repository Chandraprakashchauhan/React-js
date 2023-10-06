import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';


const Index = () => {
    return (
        <>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path='*' element={<h1 className='text-center m-5'>404 Error</h1>} />

                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Index