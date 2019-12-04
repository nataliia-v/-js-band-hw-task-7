import React, { Component } from 'react';

import TodoForm from '../TodoForm/TodoForm';
import ModalContext from '../../contexts/ModalContext';
import Input from '../Forms/Input/Input';
import Select from '../Forms/Select/Select';
import {
  allOption,
  filterPriorityOptions,
  filterStatusOptions
} from '../../utils/constants';

import styles from './Filters.module.scss';

class Filters extends Component {
  static contextType = ModalContext;

  static defaultProps = {
    filtersInitialValues: {
      search: '',
      status: allOption.value,
      priority: allOption.value
    }
  };

  state = (() => {
    const { filtersInitialValues } = this.props;

    return {
      filters: {
        search: filtersInitialValues.search,
        status: filtersInitialValues.status,
        priority: filtersInitialValues.priority
      }
    };
  })();

  openModal = () => {
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
    console.log(this.props);
    const { closeModal } = this.context;

    onAddTodoItem(values);

    closeModal();
  };

  handleChange = event => {
    const { onFiltersChange } = this.props;

    const { name, value } = event.currentTarget;

    this.setState(
      ({ filters }) => ({ filters: { ...filters, [name]: value } }),
      () => {
        const { filters } = this.state;
        onFiltersChange(filters);
      }
    );
  };

  render() {
    const { filters } = this.state;

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
          onClick={this.openModal}
        >
          Create
        </button>
      </div>
    );
  }
}

export default Filters;
