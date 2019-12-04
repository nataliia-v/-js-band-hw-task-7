import React, { Component } from 'react';
import classNames from 'classnames';

import DropdownAnchor from './DropdownAnchor';
import ButtonDropdown from '../ButtonDropdown/ButtonDropdown';
import { priorityOptions } from '../../utils/constants';

import styles from './TodoItem.module.scss';

const getTodoItemDropdownOptions = ({
  canBeDone,
  onDone,
  onEdit,
  onDelete
}) => [
  { label: 'Done', onClick: onDone, isAvailable: canBeDone },
  { label: 'Edit', onClick: onEdit },
  { label: 'Delete', onClick: onDelete }
];

class TodoItem extends Component {
  handleDone = () => {
    const { id, onDone } = this.props;
    console.log(this.props);

    onDone(id);
  };

  handleEdit = () => {
    const { id, onEdit } = this.props;

    onEdit(id);
  };

  handleDelete = () => {
    const { id, onDelete } = this.props;

    onDelete(id);
  };

  get priorityValue() {
    const { priority } = this.props;

    return priorityOptions.find(option => option.value === priority).label;
  }

  get todoItemOptions() {
    const { done } = this.props;

    return getTodoItemDropdownOptions({
      onDone: this.handleDone,
      onEdit: this.handleEdit,
      onDelete: this.handleDelete,
      canBeDone: !done
    });
  }

  render() {
    const { title, description, done } = this.props;

    return (
      <div
        className={classNames(styles.todoItem, {
          [styles.todoItemDone]: done
        })}
      >
        {done && (
          <div className={styles.iconDoneWrap}>
            <i
              className={classNames(styles.iconDone, 'fa fa-check-square-o')}
            />
          </div>
        )}
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.container}>
          <span className={styles.priority}>{this.priorityValue}</span>
          <ButtonDropdown
            anchorElement={DropdownAnchor}
            options={this.todoItemOptions}
          />
        </div>
      </div>
    );
  }
}

export default TodoItem;
