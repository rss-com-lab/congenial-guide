import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';

import popupReducer from './popUp';
import sidebarReducer from './sidebar';
import headerReducer from './header';
import employerReducer from './employers';
import employerSickReducer from './employersSick';
import employersLayOffReducer from './employersLayOff';

export default combineReducers({
    employersSick: employerSickReducer,
    employersLayOff: employersLayOffReducer,
    employers: employerReducer,
    popup: popupReducer,
    sidebar: sidebarReducer,
    header: headerReducer,
    toastr,
});
