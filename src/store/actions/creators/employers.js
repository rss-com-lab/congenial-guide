import { EMPLOYERS_SET, EMPLOYERS_REMOVE } from '../types/employers';

export function setEmployers(data) {
    return dispatch => dispatch({ type: EMPLOYERS_SET, payload: data });
}

export function removeEmployers() {
    return dispatch => dispatch({ type: EMPLOYERS_REMOVE, payload: false });
}
