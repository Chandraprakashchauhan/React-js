import React, { useEffect, useState } from 'react'

// https://jsonplaceholder.typicode.com/comments

const Api = () => {
    const [data, setData] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/comments';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log("json", json)
                setData(json)
            })
            .catch(e => {
                // console.log("e", e)
                alert("error")
            })

    }, [data])

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    //             const json = await response.json();
    //             setData(json);
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     }

    //     fetchData();
    // }, []);



    return (
        <>


            <h1>API</h1>



            {
                data.map(item => {
                    return (
                        <>
                            <p>{item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.email}</p>

                            <hr />
                        </>
                    )
                })
            }


        </>
    )
}

export default Api