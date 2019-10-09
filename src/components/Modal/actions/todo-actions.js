import * as types from './action-types';

export function addTodoAction(todo) {
    return {
        type: types.ADD_TODO,
        todo
    };
}

export function deleteTodoAction(todo) {
    return {
        type: types.DELETE_TODO,
        todo
    }
}