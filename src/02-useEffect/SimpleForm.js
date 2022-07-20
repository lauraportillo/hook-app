import { useState, useEffect } from "react";

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'laura',
        email: 'laura@google.com'

    })

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="laura@google.com"
                name="email"
            />
        </>

    )
}

export default SimpleForm