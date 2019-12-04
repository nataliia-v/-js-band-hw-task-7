import React from 'react';

import FormField from 'components/Forms/FormField/FormField';
import Input from 'components/Forms/Input/Input';
import Textarea from 'components/Forms/Textarea/Textarea';
import Select from 'components/Forms/Select/Select';
import { priorityOptions } from 'utils/constants';

import styles from './TodoForm.module.scss';

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

  state = {
    formValues: {
      id: this.props.initialValues.id || Date.now(),
      done: this.props.initialValues.done,
      title: this.props.initialValues.title,
      description: this.props.initialValues.description,
      priority: this.props.initialValues.priority
    }
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState(({ formValues }) => ({
      formValues: { ...formValues, [name]: value }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();

    const { formValues } = this.state;
    const { onSubmit } = this.props;

    onSubmit(formValues);
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

export default TodoForm;
