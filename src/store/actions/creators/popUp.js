import { POPUP_CLOSE, POPUP_OPEN } from '../types/popUp';

export function openPopUp(data) {
    return dispatch => dispatch({ type: POPUP_OPEN, payload: data });
}

export function closePopUp() {
    return dispatch => dispatch({ type: POPUP_CLOSE, payload: false });
}
