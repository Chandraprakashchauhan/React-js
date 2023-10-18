import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const location = useLocation();
    const [data, setData] = useState({
        fullname: '',
        subject: '',
        email: '',
        message: ''
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })


    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(data)

    }

    return (
        <>
            <p className='container'>{location.pathname}</p>

            <h2 className='text-center'>Contact us</h2>
            <section className='d-flex align-items-center pt-3'>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6  pt-lg-0 order-2 order-lg-1">
                                    <form onSubmit={formSubmit}>
                                        <div className="mb-3">
                                            <input type="text" name='fullname' value={data.fullname} onChange={InputEvent} className="form-control p-3" placeholder='Full Name' />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" name='subject' value={data.subject} onChange={InputEvent} className="form-control p-3" placeholder='Subject' />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" name='email' value={data.email} onChange={InputEvent} className="form-control p-3" placeholder='Email' />
                                        </div>
                                        <div className="form-floating">
                                            <textarea className="form-control p-3" name='message' value={data.message} onChange={InputEvent} id="float" placeholder='Message' style={{ height: '100px' }}></textarea>
                                            <label for="float">Message</label>
                                        </div>
                                        <div className="mb-3">
                                            <button type="submit" className="btn btn-outline-primary rounded-pill  px-4 mt-3  float-start">Send</button>
                                        </div>
                                    </form>
                                </div>


                                <div className='col-lg-6 order-lg-2 mb-3   '>
                                    <img src='https://www.theautomotiveindia.com/forums/data/attachments/218/218031-a68d075eb2a70ccced2ef7c3b0bb8d3d.jpg' alt="" className='w-100' />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>




            {/* 















            <div className="container text-center mt-5">
                <div className="row g-2">
                    <div className="col-6">
                        <div className=" "><img src="https://www.theautomotiveindia.com/forums/data/attachments/218/218031-a68d075eb2a70ccced2ef7c3b0bb8d3d.jpg" className='w-100 rounded' /></div>
                    </div>
                    <div className="col-6">
                        <div className="p-4 pb-5 border border-1 rounded-2 border-primary border-opacity-10">
                            <form className=''>
                                <div className="mb-3">
                                    <input type="email" className="form-control p-3" placeholder='Full Name' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control p-3" placeholder='Subject' />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control p-3" placeholder='Email' />
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control p-3" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                                    <label for="floatingTextarea2">Message</label>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-outline-primary rounded-pill  px-4 mt-3  float-start">Send</button>
                                </div>
                            </form>


                        </div>
                    </div>

                </div>
            </div> */}

        </>
    )
}

export default Contact