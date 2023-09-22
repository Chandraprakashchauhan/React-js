import React, { useState } from 'react'

const Form = () => {

    const [user, setUser] = useState({
        name: "", email: "", phone: "", password: ""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
        console.log(user)

    }

    return (
        <>
            <h1>Form</h1>
            <h3>sign up</h3>
            <form >
                <div>
                    <label htmlFor="name">Your Name : </label>
                    <input type="text" name='name' id='name' required autoCapitalize='off' value={user.name} onChange={handleInputs} />
                </div><br />
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name='email' id='email' required autoCapitalize='off' value={user.email} onChange={handleInputs} />
                </div><br />
                <div>
                    <label htmlFor="phone">Phone Number : </label>
                    <input type="number" name='phone' id='phone' required autoCapitalize='off' value={user.phone} onChange={handleInputs} />
                </div><br />
                <div>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name='password' id='password' required autoCapitalize='off' value={user.password} onChange={handleInputs} />
                </div><br />
                <button type='submit'>sign up</button>
            </form>

            <hr />
        </>
    )
}

export default Form