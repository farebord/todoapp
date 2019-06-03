import { TODOS_FETCHED, FETCH_ERROR, UPDATE_TODO, ADD_TODO, DELETE_TODO } from './actions/actionsTypes'

const initialState = {
    todos: [],
    status: 'loading'
}

const todoApp = (state = initialState, action) => {
    switch (action.type) {
        case TODOS_FETCHED: 
            return {
                todos: [...action.payload],
                status: 'loaded'
            }
        case FETCH_ERROR:
            return {
                todos: [],
                status: 'error',
                error: action.payload
            }
        case UPDATE_TODO:
            return {
                todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo),
                status: 'updated'
            }
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload],
                status: 'added'
            }
        case DELETE_TODO:
                return {
                    todos: state.todos.filter(todo => todo.id !== action.payload.id),
                    status: 'deleted'
                }
        default: 
            return state
    }
}

export default todoApp