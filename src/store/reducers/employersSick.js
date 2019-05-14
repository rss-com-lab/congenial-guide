import {
    EMPLOYERS_SICK_SET, EMPLOYERS_SICK_REMOVE,
} from '../actions/types/employersSick';

const dafaultState = {
    employers: [],
};

export default (state = dafaultState, action) => {
    switch (action.type) {
    case EMPLOYERS_SICK_REMOVE: {
        return dafaultState;
    }
    case EMPLOYERS_SICK_SET: {
        return {
            employers: [...action.payload],
        };
    }
    default:
        return state;
    }
};
