import { useForm } from "../hooks/useForm";


const TodoAdd = ({ onNewTodo }) => {

    const { description, handleInput, handleResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }

        onNewTodo(newTodo);
        handleResetForm();

    }


    return (
        <form onSubmit={onFormSubmit}>
            <input
                type='text'
                placeholder='What do you need to do?'
                className='form-control'
                name='description'
                value={description}
                onChange={handleInput}

            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-2'
            >
                Add
            </button>
        </form>
    )
}

export default TodoAdd;