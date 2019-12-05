import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Filters from 'pages/Todos/components/Filters/Filters';
import TodoForm from 'components/TodoForm/TodoForm';
import ModalContext from 'contexts/ModalContext';
import { addTodo, deleteTodo, editTodo } from 'state/todos/actions';
import { getFilteredTodos } from 'state/todos/selectors';
import TodoItem from 'pages/Todos/components/TodoItem/TodoItem';

import styles from './Todos.module.scss';

class Todos extends Component {
  static contextType = ModalContext;

  onAddTodoItem = todoItem => {
    const { actions } = this.props;

    actions.addTodo(todoItem);
  };

  onDone = todoId => {
    const { actions } = this.props;

    actions.editTodo({ id: todoId, done: true });
  };

  handleEdit = values => {
    const { closeModal } = this.context;
    const { actions } = this.props;

    actions.editTodo(values);

    closeModal();
  };

  onEdit = todoId => {
    const { openModal, closeModal } = this.context;
    const { todos } = this.props;

    const todoItem = todos.find(item => item.id === todoId);

    openModal({
      component: TodoForm,
      componentProps: {
        onSubmit: this.handleEdit,
        initialValues: todoItem,
        onClose: closeModal
      }
    });
  };

  onDelete = todoId => {
    const { actions } = this.props;

    actions.deleteTodo(todoId);
  };

  render() {
    const { todos } = this.props;
    return (
      <div>
        <Filters onAddTodoItem={this.onAddTodoItem} />
        <div className={styles.wrapper}>
          {todos.map(todoItem => (
            <TodoItem
              key={todoItem.id}
              onDone={this.onDone}
              onEdit={this.onEdit}
              onDelete={this.onDelete}
              {...todoItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: getFilteredTodos(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      addTodo,
      deleteTodo,
      editTodo
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
