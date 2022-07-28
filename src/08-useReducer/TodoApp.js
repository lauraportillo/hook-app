// React
import { useReducer } from 'react'
import { todoReducer } from './todoReducer';
// Components
import TodoList from './TodoList';

const initialState = [
    {
        id: new Date().getTime(),
        todo: 'Recolectar la piedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        todo: 'Recolectar la piedra del Tiempo',
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
                    <TodoList todos={todos} />
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