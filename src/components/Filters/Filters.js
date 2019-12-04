import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoForm from 'components/TodoForm/TodoForm';
import ModalContext from 'contexts/ModalContext';
import Input from 'components/Forms/Input/Input';
import Select from 'components/Forms/Select/Select';
import { filterPriorityOptions, filterStatusOptions } from 'utils/constants';
import { getFilters } from 'state/filters/selectors';
import { setFilter } from 'state/filters/actions';

import styles from './Filters.module.scss';

class Filters extends Component {
  static contextType = ModalContext;

  openTodoFormModal = () => {
    const { openModal, closeModal } = this.context;
    openModal({
      component: TodoForm,
      componentProps: {
        onSubmit: this.handleTodoFormSubmit,
        onClose: closeModal
      }
    });
  };

  handleTodoFormSubmit = values => {
    const { onAddTodoItem } = this.props;
    const { closeModal } = this.context;

    onAddTodoItem(values);

    closeModal();
  };

  handleChange = event => {
    const { actions } = this.props;
    const { name, value } = event.currentTarget;

    actions.setFilter({ name, value });
  };

  render() {
    const { filters } = this.props;

    return (
      <div className={styles.wrapper}>
        <Input
          name="search"
          value={filters.search}
          placeholder="Search by title"
          onChange={this.handleChange}
        />
        <Select
          name="status"
          value={filters.status}
          onChange={this.handleChange}
          options={filterStatusOptions}
        />
        <Select
          name="priority"
          value={filters.priority}
          onChange={this.handleChange}
          options={filterPriorityOptions}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={this.openTodoFormModal}
        >
          Create
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: getFilters(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ setFilter }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
