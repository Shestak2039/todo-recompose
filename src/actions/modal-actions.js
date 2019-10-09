import * as types from './action-types';

export function showModalAction() {
    return {
        type: types.SHOW_MODAL
    }
}

export function hideModalAction() {
    return {
        type: types.HIDE_MODAL
    }
}