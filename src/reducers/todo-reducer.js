import { handleActions } from 'redux-actions';

import * as types from '../actions/action-types';

const todoReducer = handleActions({
    [types.ADD_TODO]: (state, action) => ({
        ...state, todos: state.todos.concat(action.payload),
    }),
    [types.DELETE_TODO]: (state, action) => ({
        ...state, todos: state.todos.filter((item) => item.id !== action.payload.id),
    }),
},{
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
});

export default todoReducer;