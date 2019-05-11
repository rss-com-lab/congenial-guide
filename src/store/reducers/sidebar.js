import {
    SIDEBAR_LEFT_CLOSE, SIDEBAR_LEFT_OPEN,
    SIDEBAR_RIGHT_CLOSE, SIDEBAR_RIGHT_OPEN,
} from '../actions/types/sidebar';

const defaultSidebar = {
    open: false,
    content: '',
    title: '',
};
const defaultState = {
    left: { ...defaultSidebar },
    right: { ...defaultSidebar },
};

export default (state = defaultState, action) => {
    switch (action.type) {
    case SIDEBAR_LEFT_CLOSE: {
        const result = { ...defaultState };
        result.right = { ...state.right };
        return result;
    }
    case SIDEBAR_LEFT_OPEN: {
        const result = {
            left: action.payload,
            right: { ...state.right },
        };
        return result;
    }
    case SIDEBAR_RIGHT_CLOSE: {
        const result = {
            right: { ...defaultState.right },
            left: { ...state.left },
        };
        return result;
    }
    case SIDEBAR_RIGHT_OPEN: {
        const result = {
            right: action.payload,
            left: { ...state.left },
        };
        return result;
    }
    default:
        return state;
    }
};
