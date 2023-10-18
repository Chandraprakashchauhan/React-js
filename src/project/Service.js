import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { serviceData } from './ServiceData';


const Service = () => {
    const location = useLocation();

    return (
        <>
            <p className='container'>{location.pathname}</p>
            <div className="container mt-3">
                <h4 className='text-center mb-3'>Our Service</h4>
                <div className="row row-col-2 g-5 ">

                    {serviceData.map((service, index) => (
                        <div className="col d-flex justify-content-center col-md-3 mx-auto" key={index}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={service.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.text}</p>
                                    <NavLink className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                            </div>
                        </div>
                    ))}









                </div>
            </div>





        </>
    )
}

export default Service