import { createAction } from 'redux-actions';
import * as types from './action-types';

export const showModalAction = createAction(types.SHOW_MODAL);
export const hideModalAction = createAction(types.HIDE_MODAL);
