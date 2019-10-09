import * as types from '../actions/action-types';

const initialState = {
    modal: false,
}

const modalReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.SHOW_MODAL:
            return {...state, modal: true};
        case types.HIDE_MODAL:
            return {...state, modal: false};
        default:
            return state;
    }
}

export default modalReducer;