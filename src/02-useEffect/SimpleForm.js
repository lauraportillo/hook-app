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

    // useEffect se usa para disparar efectos secundarios
    // normalmente los hooks van arriba, pero los efectos se puden colocar abajo
    // [] un arreglo vacío significa que quiero que se EJECUTE UNA SOLA VEZ
    // Si quiero que se ejecute cada vez que el formulario cambia: 
    // SE RECOMIENDA EFECTOS ESPECÍFICOS POR CADA ACIIÓN QUE QUERAMOS EJECUTAR

    useEffect(() => {
        console.log('useEffect called');
    }, [])

    useEffect(() => {
        console.log('formState changed!');
    }, [formState])

    useEffect(() => {
        console.log('emails changed!');
    }, [email])







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