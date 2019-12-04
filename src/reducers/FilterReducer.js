import {
  filterConstants,
  SET_VISIBILITY_FILTER
} from '../constants/actionTypes';

const filterReducer = (state = filterConstants.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
