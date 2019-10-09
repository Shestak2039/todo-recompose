import { combineReducers } from 'redux';

import todoReducer from './todo-reducer';
import modalReducer from './modal-reducer';

const reducers = combineReducers({
    todoState: todoReducer,
    modalState: modalReducer,
});

export default reducers;