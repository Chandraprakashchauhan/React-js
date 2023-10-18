import React from 'react'
import Navder from './Navder'
import SilNavber from './SilNavber'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import C from './C/C'
import CIntro from './C/Intro'
import CIfelse from './C/Ifelse'
import CLoop from './C/Loop'
import CFunction from './C/Function'

import Cpp from './Cpp/Cpp'
import CppIntro from './Cpp/Intro'
import CppIfelse from './Cpp/Ifelse'
import CppLoop from './Cpp/Loop'
import CppFunction from './Cpp/Function'

import Javascript from './Javascript/Javascript'
import JsIntro from './Javascript/Intro'
import JsIfelse from './Javascript/Ifelse'
import JsLoop from './Javascript/Loop'
import JsFunction from './Javascript/Function'




const Damo_index = () => {
    return (
        <>
            <BrowserRouter>

                <Navder />
                <Routes>
                    <Route path='/' element={<C />}>
                        <Route path='/c/intro' element={<CIntro />} />
                        <Route path='/c/ifelse' element={<CIfelse />} />
                        <Route path='/c/loop' element={<CLoop />} />
                        <Route path='/c/function' element={<CFunction />} />
                    </Route>
                    <Route path='/' element={<Cpp />}>
                        <Route path='/cpp/intro' element={<CppIntro />} />
                        <Route path='/cpp/ifelse' element={<CppIfelse />} />
                        <Route path='/cpp/loop' element={<CppLoop />} />
                        <Route path='/cpp/function' element={<CppFunction />} />
                    </Route>
                    <Route path='/' element={<Javascript />}>
                        <Route path='/js/intro' element={<JsIntro />} />
                        <Route path='/js/ifelse' element={<JsIfelse />} />
                        <Route path='/js/loop' element={<JsLoop />} />
                        <Route path='/js/function' element={<JsFunction />} />
                    </Route>
                </Routes>


                {/* 
                <C />
                <Javascript /> */}
            </BrowserRouter>



        </>

    )
}

export default Damo_index