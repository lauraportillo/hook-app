import { useState, useEffect } from "react";

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'laura',
        email: 'laura@google.com'
    })

    // desestructurar el estado:
    const { username, email } = formState;

    // función que maneja los cambios en los inputs:
    // propiedades computadas de los objetos en javascript [name]: value
    const handleInput = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })

    }

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleInput} 
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="laura@google.com"
                name="email"
                value={email}
                onChange={handleInput} 
            />
        </>

    )
}

export default SimpleForm