import { useState } from 'react'

function CounterApp() {


    // State

    const [counter, setCounter] = useState(10);


    return (
        <>
            <h1>Counter: {counter}</h1>

            <hr />

            <button className='btn' onClick={() => setCounter(counter + 1)}    >+1</button>

        </>
    )
}

export default CounterApp;