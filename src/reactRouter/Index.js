import React from 'react';
// import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Error from './Error';
import User from './User';
import Search from './Search';
import Address from './Address';
import Email from './Email';


const Index = () => {
    return (
        <>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home text='page' />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/user/:name" element={<User />} />
                    <Route path="/about/address" element={<Address />} />
                    <Route path="/about/email" element={<Email />} />
                    <Route path='*' element={<Error />} />

                </Routes>
            </BrowserRouter>


        </>
    )
}

export default Index