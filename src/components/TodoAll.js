import React, { useContext } from 'react';
import { todoContext } from '../todoContext';
import Form from './Form';
import '../css/index.css';
import TodoAllNoTasks from './TodoAllNoTasks';
import TodoItem from './TodoItem';


const TodoAll = () => {

    const { state, dispatch } = useContext(todoContext);

    
    return (    
        <div>
            <hr />
            <Form dispatch={dispatch}/>

            {
                (!state.length)
                &&
                <TodoAllNoTasks />
            }

            {
                state.map(todo => (
                    <div className='d-flex todo-div mt-4' key={todo.id}>
                        <TodoItem todo={todo} dispatch={dispatch} />
                    </div>
                ))
            }

        </div>
    )
}

export default TodoAll;
