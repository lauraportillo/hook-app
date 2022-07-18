import { useState } from 'react'

function CounterApp() {


    // State

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
    const { counter1, counter2, counter3 } = state;

    console.log(counter1);
    console.log(counter2);
    console.log(counter3);


    return (
        <>
            <h1>Counter: {counter1}</h1>
            <h1>Counter: {counter2}</h1>
            <h1>Counter: {counter3}</h1>

            <hr />

            <button className='btn' onClick={
                () => setCounter({
                    ...state,
                    counter1: counter1 + 1,

                })
            }>+1</button>

        </>
    )
}

export default CounterApp;