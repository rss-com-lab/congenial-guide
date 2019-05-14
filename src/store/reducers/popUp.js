import {
    POPUP_CLOSE, POPUP_OPEN,
} from '../actions/types/popUp';

const dafaultState = {
    open: false,
    content: '',
    title: '',
};

export default (state = dafaultState, action) => {
    switch (action.type) {
    case POPUP_CLOSE: {
        return dafaultState;
    }
    case POPUP_OPEN: {
        return action.payload;
    }
    default:
        return state;
    }
};
