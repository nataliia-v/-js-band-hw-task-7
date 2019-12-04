import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filters from '../Filters/Filters';
import TodoList from '../TodoList/TodoList';

import ModalContext from '../../contexts/ModalContext';
import TodoForm from '../TodoForm/TodoForm';
import { allOption } from '../../utils/constants';

import { deleteTodo, toggleTodo } from '../../actions/actionCreators';

class Todos extends Component {
  static contextType = ModalContext;

  state = {
    allTodoItems: [],
    // filteredTodoItems: [],
    filters: {
      search: '',
      status: allOption.value,
      priority: allOption.value
    }
  };

  componentDidMount() {
    this.recalculate();
  }

  componentDidUpdate(prevProps, prevState) {
    const { allTodoItems, filters } = this.state;

    if (
      prevState.allTodoItems !== allTodoItems ||
      prevState.filters !== filters
    ) {
      this.recalculate();
    }
  }

  recalculate = () => {
    // const { filters } = this.state;
    //
    // const filtersToApply = Object.keys(filters).filter(
    //   filterKey => filters[filterKey]
    // );
    //
    // this.setState(({ allTodoItems }) => ({
    //   filteredTodoItems: allTodoItems.filter(todoItem => {
    //     return filtersToApply.every(filterName => {
    //       switch (filterName) {
    //         case 'search':
    //           return new RegExp(filters.search, 'i').test(todoItem.title);
    //         case 'status': {
    //           if (filters.status === allOption.value) return true;
    //           if (filters.status === 'open') return !todoItem.done;
    //           if (filters.status === 'done') return todoItem.done;
    //           break;
    //         }
    //         case 'priority':
    //           if (filters.priority === allOption.value) return true;
    //
    //           return todoItem.priority === filters.priority;
    //         default:
    //           return true;
    //       }
    //       return null;
    //     });
    //   })
    // }));
  };

  onFiltersChange = filters => {
    this.setState({
      filters
    });
  };

  onAddTodoItem = todoItem => {
    const { closeModal } = this.context;
    this.setState(({ allTodoItems }) => ({
      allTodoItems: [...allTodoItems, todoItem]
    }));
    closeModal();
  };

  onDone = todoId => {
    const { dispatch } = this.props;
    console.log('dispatched onDone: ', dispatch(toggleTodo(todoId)));
  };

  handleEdit = values => {
    const { closeModal } = this.context;
    this.setState(({ allTodoItems }) => ({
      allTodoItems: allTodoItems.map(todoItem => {
        if (todoItem.id === values.id) return values;
        return todoItem;
      })
    }));

    closeModal();
  };

  onEdit = todoId => {
    const { allTodoItems } = this.state;
    const { openModal, closeModal } = this.context;

    const todoItem = allTodoItems.find(item => item.id === todoId);

    openModal({
      component: TodoForm,
      componentProps: {
        onSubmit: this.handleEdit,
        initialValues: todoItem,
        onClose: closeModal
      }
    });
    // const {dispatch} = this.props;
    // dispatch(editTodo(todoId));
  };

  onDelete = todoId => {
    const { dispatch } = this.props;
    dispatch(deleteTodo(todoId));
  };

  render() {
    const { filters } = this.state;
    const { todos } = this.props;
    return (
      <div>
        <Filters
          filtersInitialValues={filters}
          onAddTodoItem={this.onAddTodoItem}
          onFiltersChange={this.onFiltersChange}
        />
        <TodoList
          todoItems={todos}
          onDone={this.onDone}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todos);
