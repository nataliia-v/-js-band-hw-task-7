import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants/actionTypes';

const TODO_DATA = [];

const todoReducer = (state = TODO_DATA, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      const todoIndex = parseInt(action.id);
      return state.filter(todo => todo.id !== todoIndex);
    default:
      return state;
  }
};

export default todoReducer;
