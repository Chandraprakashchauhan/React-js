import React from 'react'
import SilNavber from '../SilNavber'
import { Outlet } from 'react-router-dom'


const Cpp = () => {
    return (
        <>
            <SilNavber pro="/cpp/" />
            <div className='border float-end' style={{ width: '70%', height: '500px', backgroundColor: '#8899db' }}>
                {/* <h1>cpp</h1> */}
                <Outlet />
            </div>
        </>
    )
}

export default Cpp