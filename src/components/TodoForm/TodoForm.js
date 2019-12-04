import React from 'react';

import { connect } from 'react-redux';
import FormField from '../Forms/FormField/FormField';
import Input from '../Forms/Input/Input';
import { priorityOptions } from '../../utils/constants';

import styles from './TodoForm.module.scss';
import Textarea from '../Forms/Textarea/Textarea';
import Select from '../Forms/Select/Select';
import { addTodo } from '../../actions/actionCreators';

class TodoForm extends React.Component {
  static defaultProps = {
    initialValues: {
      id: null,
      done: false,
      title: '',
      description: '',
      priority: 'high'
    }
  };

  state = (() => {
    const { initialValues } = this.props;
    return {
      formValues: {
        id: initialValues.id || Date.now(),
        done: initialValues.done,
        title: initialValues.title,
        description: initialValues.description,
        priority: initialValues.priority
      }
    };
  })();

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState(({ formValues }) => ({
      formValues: { ...formValues, [name]: value }
    }));
  };

  handleSubmit = event => {
    const { dispatch } = this.props;
    const { formValues } = this.state;
    event.preventDefault();
    dispatch(addTodo(formValues));
  };

  render() {
    const { formValues } = this.state;
    const { onClose } = this.props;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <FormField
          label="Title"
          control={
            <Input
              name="title"
              value={formValues.title}
              placeholder="Title"
              onChange={this.handleChange}
              required
            />
          }
        />

        <FormField
          label="Description"
          control={
            <Textarea
              name="description"
              value={formValues.description}
              placeholder="Description"
              onChange={this.handleChange}
            />
          }
        />

        <FormField
          label="Priority"
          control={
            <Select
              name="priority"
              value={formValues.priority}
              onChange={this.handleChange}
              options={priorityOptions}
            />
          }
        />

        <div className={styles.buttons}>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onClose}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-outline-primary">
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default connect()(TodoForm);
