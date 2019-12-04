import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from '../constants/actionTypes';

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
});

export const deleteTodo = id => ({
  type: REMOVE_TODO,
  id
});
export const editTodo = payload => ({
  type: EDIT_TODO,
  payload
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
