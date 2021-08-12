import { types } from "./types/types";

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case types.add:
            return [action.payload, ...state];
        
        case types.delete:
            return state.filter(todo => todo.id !== action.payload);
        
        case types.toggle:
            return state.map(todo => 
                (todo.id === action.payload)
                ? {...todo, done: !todo.done}
                : todo
            )
        
        case types.deleteAll:
            return state.filter(todo => !todo.done)

        default:
            return state;
    }
}