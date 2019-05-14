import {
    CHANGE_TITLE,
} from '../types/header';

// eslint-disable-next-line import/prefer-default-export
export function changeTitle(str) {
    return { type: CHANGE_TITLE, payload: str };
}
