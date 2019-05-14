import {
    CHANGE_TITLE,
} from '../actions/types/header';

const dafaultState = {
    title: '',
};

export default (state = dafaultState, action) => {
    switch (action.type) {
    case CHANGE_TITLE: {
        return { ...state, title: action.payload };
    }
    default:
        return state;
    }
};
