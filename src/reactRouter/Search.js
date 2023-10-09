import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Search = () => {
    const location = useLocation();
    const getdata = (e) => {
        e.preventDefault();
    }

    const [search, setSearch] = useState("");

    const inputEvent = (e) => {
        const data = e.target.value;
        setSearch(data);

    }


    const img = `https://source.unsplash.com/500x600?${search}`;
    return (
        <>
            <div className="container my-5">


                {location.pathname}
                <form className="d-flex w-50 m-auto" role="search" onSubmit={getdata}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={inputEvent} value={search} />
                </form>

                <img src={img} className='m-5 rounded-4' />




            </div>
        </>
    )
}

export default Search