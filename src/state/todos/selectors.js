import { createSelector } from 'reselect';

import { getFilters } from 'state/filters/selectors';
import { allOption } from 'utils/constants';

const getState = state => state.todos;

export const getAllTodos = createSelector(getState, todos => todos.items);

export const getFilteredTodos = createSelector(
  getFilters,
  getAllTodos,
  (filters, allTodos) => {
    const filtersToApply = Object.keys(filters).filter(
      filterKey => filters[filterKey]
    );

    return allTodos.filter(todoItem => {
      return filtersToApply.every(filterName => {
        switch (filterName) {
          case 'search':
            return new RegExp(filters.search, 'i').test(todoItem.title);
          case 'status': {
            if (filters.status === allOption.value) return true;
            if (filters.status === 'open') return !todoItem.done;
            if (filters.status === 'done') return todoItem.done;
            break;
          }
          case 'priority':
            if (filters.priority === allOption.value) return true;

            return todoItem.priority === filters.priority;
          default:
            return true;
        }
        return null;
      });
    });
  }
);
