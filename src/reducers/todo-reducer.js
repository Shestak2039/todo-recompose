import * as types from '../actions/action-types';

const initialState = {
    todos: [
        {
            id: 1,
            message: 'Something',
        },
        {
            id: 2,
            message: 'Not something',
        },
        {
            id: 3,
            message: 'Something else',
        }
    ],
}

const todoReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.ADD_TODO:
            return {...state, todos: state.todos.concat(action.todo)};
        case types.DELETE_TODO:
            return {...state, todos: state.todos.filter((item) => item.id !== action.todo.id)};
        default:
            return state;
    }
}

export default todoReducer;