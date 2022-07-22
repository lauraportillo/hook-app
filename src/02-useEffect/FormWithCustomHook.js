//React
import { useForm } from "../hooks/useForm";
//Components


const FormWithCustomHook = () => {

    const { formState, handleInput, handleReset, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;


    return (
        <>
            <h1>Form with custom Hook</h1>
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

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInput}
            />

            <button onClick={handleReset} className="btn btn-primary mt-2">Reset</button>

        </>

    )
}

export default FormWithCustomHook;