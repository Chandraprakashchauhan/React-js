import React, { useState } from 'react'

const UseStateObject = () => {
  const [myObject, setmyObject] = useState({
    Name: "Dilip", Age: 19
  });

  const Update = () => {
    setmyObject({
      ...myObject, Name: "deepak"
    });

  }


  return (
    <>
      <h1>Use State Object</h1>
      <p>Name: {myObject.Name} & Age: {myObject.Age}</p>
      <button onClick={Update}>Update</button>

      <hr />
    </>
  )
}

export default UseStateObject