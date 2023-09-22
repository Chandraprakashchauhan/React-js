import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `chats:(${count})`
        if (count >= 1) {
            document.title = `chats:(${count})`

        } else {
            document.title = `chats`

        }

    }, [count])

    useEffect(() => {
        if (count > 10) {

            document.title = `chats:(10+)`

        }

    }, [count])
    return (
        <>
            <h1>useEffect </h1>
            <p>chats {count}</p>
            <button onClick={() => setCount(count + 1)}>click</button>
            <hr />
        </>
    )
}

export default UseEffect