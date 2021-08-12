import React from 'react';
import '../css/form.css';
import useForm from '../hooks/useForm';
import { types } from '../types/types';

const Form = ({dispatch}) => {

    const [{name}, handleInputChange, reset] = useForm({
        name: '',
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(name.trim().length < 2){
            return;
        }

        const action = {
            type: types.add,
            payload: {
                id: new Date().getTime(),
                name,
                done: false,
            },
        }

        dispatch(action)
        reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className='p-3' placeholder='add a task' autoComplete='off' name='name' value={name} onChange={handleInputChange} />
            <button type='submit' className='p-3 ms-3'>
                Add
            </button>
        </form>
    )
}

export default Form;
