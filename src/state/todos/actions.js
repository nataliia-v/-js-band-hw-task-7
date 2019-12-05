import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from './types';

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
});

export const editTodo = payload => ({
  type: EDIT_TODO,
  payload
});

export const deleteTodo = id => ({
  type: REMOVE_TODO,
  id
});
