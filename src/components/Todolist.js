import React, { useState } from 'react'

const Todolist = () => {

    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const addItems = () => {

        if (!input) {
            alert("enter Language ");
        } else {
            setItems([...items, input]);
            setInput('');

        }
    }

    const deleteItems = (id) => {

        const updateData = items.filter((elem, ind) => {
            return ind != id;
        });
        setItems(updateData);
    }

    return (
        <>
            <h1>Todo List</h1>

            <div>
                <h4>Language </h4>
                <input type="text" name="" id="" placeholder='Enter Language Name' value={input} onChange={(e) => setInput(e.target.value)} /><button onClick={addItems}>+</button>

                <div className='showItems'>

                    {
                        items.map((elem, ind) => {
                            return (
                                <div className='eachItems'>
                                    <h5>{elem}  <button onClick={() => deleteItems(ind)}>del</button></h5>
                                </div>
                            )
                        })
                    }


                </div>

                <button onClick={() => setItems([])}>Remove All</button>





            </div>

            <hr />
        </>
    )
}

export default Todolist