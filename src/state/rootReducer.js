import { combineReducers } from 'redux';

import todos from 'state/todos/reducer';
import filters from 'state/filters/reducer';

export default combineReducers({
  todos,
  filters
});
