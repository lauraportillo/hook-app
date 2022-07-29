// React
import { useTodo } from "../hooks/useTodo";
// Components
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';


const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

    return (
        <>
            <h1>TodoApp: 10, <small>pending: 2</small> </h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className='col-5'>
                    <h4>Add TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>

            </div>


        </>
    )
}

export default TodoApp