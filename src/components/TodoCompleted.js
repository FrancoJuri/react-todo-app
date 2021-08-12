import React, { useContext } from 'react';
import { getDesactiveTodos } from '../selectors/getDesactiveTodos';
import { todoContext } from '../todoContext';
import '../css/index.css';
import { types } from '../types/types';
import TodoCompletedNoTasks from './TodoCompletedNoTasks';
import TodoItem from './TodoItem';

const TodoCompleted = () => {

    const {state, dispatch} = useContext(todoContext);

    const filteredTodos = getDesactiveTodos(state);

    const handleDelete = id => {
        dispatch({
            type: types.delete,
            payload: id,
        })
    }

    const handleDeleteAll = () => {
        dispatch({
            type: types.deleteAll,
        })
    }

    return (
        <div>
            <hr />
            {
                (!filteredTodos.length)
                &&
                <TodoCompletedNoTasks />
            }
            {
                filteredTodos.map(todo => (
                    <div className='d-flex todo-div mt-4' key={todo.id}>
                        <TodoItem todo={todo} dispatch={dispatch} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-backspace-fill" viewBox="0 0 16 16" onClick={() => handleDelete(todo.id, dispatch)}>
                        <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                        </svg>
                    </div>
                ))
            }
            {
                (filteredTodos.length >= 2)
                && <button className='btn btn-danger rounded mt-3' onClick={handleDeleteAll}>Delete All</button>
            }
        </div>
    )
}

export default TodoCompleted;
