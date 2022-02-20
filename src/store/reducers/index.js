import { combineReducers } from 'redux';

import { userReducer } from './user';
import { warnReducer } from './warn';

const rootReducer = combineReducers({
  user: userReducer,
  warn: warnReducer,
});

export default rootReducer;