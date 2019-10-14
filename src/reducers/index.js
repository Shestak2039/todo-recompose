import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { reducer as modal } from 'redux-modal';

import todoReducer from './todo-reducer';

const reducers = combineReducers({
    todoState: todoReducer,
    form: formReducer,
    modal
});

export default reducers;