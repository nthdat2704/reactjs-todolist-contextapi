import { GET_TODOS, SAVE_TODOS, DELETE_TODO, ADD_TODO } from './type';
export const todoReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_TODOS:
            const todos = localStorage.getItem("todos")
            console.log(todos);
            if (todos) {

                state = JSON.parse(todos)
            }
            return state;
        case SAVE_TODOS:
            console.log(payload.todos);
            localStorage.setItem("todos", JSON.stringify(payload.todos))
            return state;
        case DELETE_TODO:
            { console.log(payload.id) }
            return state.filter(todo => todo.id !== payload.id);
        case ADD_TODO:
            return [...state, payload.todo];


        default:
            return state;
    }
}