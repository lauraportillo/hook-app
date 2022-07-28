// Components
import TodoItem from "./TodoItem";


const TodoList = ({ todos }) => {
    return (
        <ul className='list-group'>
            {
                todos.map(todo => (
                    <li key={todo.id} className='list-group-item d-flex justify-content-between'>
                        <TodoItem todo={todo} />

                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList;



