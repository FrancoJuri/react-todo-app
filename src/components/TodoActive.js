import React, { useContext } from 'react';
import { todoContext } from '../todoContext';
import Form from './Form';
import '../css/index.css';
import { getActiveTodos } from '../selectors/getActiveTodos';
import TodoActiveNoTasks from './TodoActiveNoTasks';
import TodoItem from './TodoItem';

const TodoActive = () => {

    const { state, dispatch } = useContext(todoContext);

    const filteredTodos = getActiveTodos(state);
    

    return (
        <div>
            <hr />
            <Form dispatch={dispatch} />

            {
                (!filteredTodos.length)
                &&
                <TodoActiveNoTasks />
            }

            {
                filteredTodos.map(todo => (
                    <div className='d-flex todo-div mt-4' key={todo.id}>
                        <TodoItem todo={todo} dispatch={dispatch} />
                    </div>
                ))
            }
        </div>
    )
}

export default TodoActive;
