import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_TODO
} from '../constants/actionTypes';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case EDIT_TODO:
      return [
        ...state,
        state.map(todo =>
          todo.id === action.payload.id
            ? {
                ...todo,
                ...action.payload
              }
            : todo
        )
      ];
    default:
      return state;
  }
};

export default todoReducer;
