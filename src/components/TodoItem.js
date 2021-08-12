import React from 'react';
import { handleToggle } from '../helpers/helpers';

const TodoItem = ({todo, dispatch}) => {
    return (
        <>
            <input type='checkbox' checked={todo.done ? true : false} className='mt-1' onChange={() => handleToggle(todo.id, dispatch)} />
            <p className={`${todo.done && 'completed'}`}>{todo.name}</p>
        </>
    )
}

export default TodoItem;
