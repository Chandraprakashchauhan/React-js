import React, { useEffect, useState } from 'react';

const PosterPin = () => {
    const [pin, setPin] = useState('');
    const [data, setData] = useState([]);



    useEffect(() => {



        fetch('https://api.postalpincode.in/pincode/306902')
            .then((response) => response.json())
            .then((responseData) => {
                // Check if the response is an array
                if (Array.isArray(responseData)) {
                    setData(responseData[0].PostOffice);
                }
            })

    }, []);



    // console.log(pin)



    return (
        <>


            <div className="container my-5">









                <div className="container text-center">
                    <div className="row row-cols-2 row-cols-lg-5  g-2 g-lg-3">
                        {data.map((postOffice) => (
                            <>
                                <div className="col">
                                    <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
                                        <div className="card-header"><b><i>{postOffice.Name}</i></b></div>
                                        <div className="card-body text-start">
                                            <h5 className="card-title"><b>State</b>: {postOffice.State}</h5>
                                            <p className="card-text"><b>BranchType</b>: {postOffice.BranchType}</p>
                                            <p className="card-text"><b>Circle</b> {postOffice.Circle}</p>
                                            <p className="card-text"><b>District</b>: {postOffice.District}</p>
                                            <p className="card-text"><b>Region</b>: {postOffice.Region}</p>
                                            <p className="card-text"><b>Block</b>: {postOffice.Block}</p>
                                            <p className="card-text"><b>Country</b>: {postOffice.Country}</p>
                                            <p className="card-text"><b>Pincode</b>: {postOffice.Pincode}</p>

                                        </div>


                                    </div>



                                </div>

                            </>
                        ))}

                    </div>
                </div>
            </div>


        </>






    );
};

export default PosterPin;
