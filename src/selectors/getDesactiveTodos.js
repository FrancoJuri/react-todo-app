
export const getDesactiveTodos = (state) => {

    return state.filter(todo => todo.done);
}