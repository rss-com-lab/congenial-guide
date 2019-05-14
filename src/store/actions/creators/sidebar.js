import {
    SIDEBAR_LEFT_CLOSE, SIDEBAR_LEFT_OPEN,
    SIDEBAR_RIGHT_CLOSE, SIDEBAR_RIGHT_OPEN,
} from '../types/sidebar';

function openSidebar(type, data) {
    return dispatch => dispatch({ type, payload: data });
}

function closeSidebar(type) {
    return dispatch => dispatch({ type, payload: false });
}

export function openLeftSidebar(data) {
    return openSidebar(SIDEBAR_LEFT_OPEN, data);
}

export function closeLeftSidebar() {
    return closeSidebar(SIDEBAR_LEFT_CLOSE);
}

export function openRightSidebar(data) {
    return openSidebar(SIDEBAR_RIGHT_OPEN, data);
}

export function closeRightSidebar() {
    return closeSidebar(SIDEBAR_RIGHT_CLOSE);
}
