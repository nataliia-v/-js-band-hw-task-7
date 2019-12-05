import { allOption } from 'utils/constants';
import { SET_FILTER } from './types';

const initialState = {
  search: '',
  status: allOption.value,
  priority: allOption.value
};

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_FILTER: {
      return {
        ...state,
        [payload.name]: payload.value
      };
    }
    default:
      return state;
  }
};
