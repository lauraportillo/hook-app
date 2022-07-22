//React
import { useState } from "react"


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const handleInput = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        handleInput,
        handleResetForm
    }

}
