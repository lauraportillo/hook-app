import { useReducer } from 'react'
import { todoReducer } from './todoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        todo: 'Recolectar la piedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        todo: 'Recolectar la piedra del Alma',
        done: false,
    },
];

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)



    return (
        <>
            <h1>TodoApp: 10, <small>pending: 2</small> </h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group'>
                        {
                            todos.map(todo => (
                                <li key={todo.id} className='list-group-item d-flex justify-content-between'>
                                    <span className='align-self-center'>Item 1</span>
                                    <button className='btn btn-danger'>Delete</button>
                                </li>
                            ))
                        }

                    </ul>
                </div>

                <div className='col-5'>
                    <h4>Add TODO</h4>
                    <hr />
                    <form >
                        <input
                            type='text'
                            placeholder='What do you nedd to do?'
                            className='form-control'
                        />
                        <button
                            type='submit'
                            className='btn btn-outline-primary mt-1'
                        >
                            Add
                        </button>

                    </form>

                </div>

            </div>


        </>
    )
}

export default TodoApp