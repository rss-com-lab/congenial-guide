import {
    EMPLOYERS_LAY_OFF_SET, EMPLOYERS_LAY_OFF_REMOVE,
} from '../actions/types/employersLayOff';

const dafaultState = {
    employersLayOff: [],
};

export default (state = dafaultState, action) => {
    switch (action.type) {
    case EMPLOYERS_LAY_OFF_REMOVE: {
        return dafaultState;
    }
    case EMPLOYERS_LAY_OFF_SET: {
        return {
            employersLayOff: [...action.payload],
        };
    }
    default:
        return state;
    }
};
