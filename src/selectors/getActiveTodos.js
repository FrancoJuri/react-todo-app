
export const getActiveTodos = (state) => {

    return state.filter(todo => !todo.done);
}
