import { handleActions } from 'redux-actions';

import * as types from '../actions/action-types';

const modalReducer = handleActions({
    [types.SHOW_MODAL]: (state) => ({
        ...state, modal: true,
    }),
    [types.HIDE_MODAL]: (state) => ({
        ...state, modal: false,
    }),
}, { modal: false });

export default modalReducer;