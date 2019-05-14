import { EMPLOYERS_LAY_OFF_SET, EMPLOYERS_LAY_OFF_REMOVE } from '../types/employersLayOff';

export function setEmployersLayOff(data) {
    return dispatch => dispatch({ type: EMPLOYERS_LAY_OFF_SET, payload: data });
}

export function removeEmployersLayOff() {
    return dispatch => dispatch({ type: EMPLOYERS_LAY_OFF_REMOVE, payload: false });
}
