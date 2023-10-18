import React from 'react'
import { NavLink } from 'react-router-dom'


const Common = (props) => {
    return (
        <>
            <section className='d-flex align-items-center'>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-lg-0 order-2 order-lg-1  my-auto">
                                    <h1>{props.name}<strong className='fs-1 text-primary   '>Chandra Prakash Suthar</strong></h1>
                                    <h3>We are the team of Marwad tech Software company</h3>

                                    <NavLink to={props.visit} className='btn btn-outline-primary rounded-pill mt-3'> {props.btname}</NavLink>
                                </div>


                                <div className='col-lg-6 order-lg-2 mr-4   '>

                                    <img src={props.img} alt="" className='w-100' />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Common