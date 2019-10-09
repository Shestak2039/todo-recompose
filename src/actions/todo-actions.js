import { createAction } from 'redux-actions';
import * as types from './action-types';

const addTodoAction = createAction(types.ADD_TODO, todo => todo);

const deleteTodoAction = createAction(types.DELETE_TODO, todo => todo);

export { addTodoAction, deleteTodoAction };