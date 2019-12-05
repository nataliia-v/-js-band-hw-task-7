import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from './types';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case EDIT_TODO:
      return {
        ...state,
        items: state.items.map(todo =>
          todo.id === action.payload.id
            ? {
                ...todo,
                ...action.payload
              }
            : todo
        )
      };
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
};
