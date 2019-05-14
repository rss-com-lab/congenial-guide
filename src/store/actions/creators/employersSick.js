import { EMPLOYERS_SICK_SET, EMPLOYERS_SICK_REMOVE } from '../types/employersSick';

export function setEmployersSick(data) {
    return dispatch => dispatch({ type: EMPLOYERS_SICK_SET, payload: data });
}

export function removeEmployersSick() {
    return dispatch => dispatch({ type: EMPLOYERS_SICK_REMOVE, payload: false });
}
