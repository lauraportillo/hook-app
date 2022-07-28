import React from 'react'

const TodoItem = ({ todo }) => {

    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className='align-self-center'>{todo.description} </span>
            <button className='btn btn-danger'>Delete</button>
        </li>

    )
}

export default TodoItem;