import { combineReducers } from 'redux';

import counter from './counterReducer.js';

const rootReducer = combineReducers({
  counter
});


export default rootReducer
