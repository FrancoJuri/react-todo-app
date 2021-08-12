import React, {  useEffect, useReducer } from 'react';
import AppRouter from './routes/AppRouter';
import { todoContext } from './todoContext';
import { todoReducer } from './todoReducer';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {

    const [state, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state])
 
    return (
        <todoContext.Provider value={{state, dispatch}}>
            <AppRouter />
        </todoContext.Provider>
    )
}

export default App;
