import { useState } from 'react'

function CounterApp() {


    // State

    const [{ counter1, counter2, counter3 }, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

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
                    counter1: counter1 + 1,
                    counter2: counter2,
                    counter3: counter3,
                })
            }>+1</button>

        </>
    )
}

export default CounterApp;