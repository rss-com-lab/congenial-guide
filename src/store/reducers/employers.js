import {
    EMPLOYERS_SET, EMPLOYERS_REMOVE,
} from '../actions/types/employers';

const dafaultState = {
    employers: [],
};

export default (state = dafaultState, action) => {
    switch (action.type) {
    case EMPLOYERS_REMOVE: {
        return dafaultState;
    }
    case EMPLOYERS_SET: {
        return {
            employers: [...action.payload],
        };
    }
    default:
        return state;
    }
};
