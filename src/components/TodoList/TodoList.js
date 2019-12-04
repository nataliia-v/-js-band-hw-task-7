import React from 'react';

import styles from './TodoList.module.scss';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todoItems, onDone, onEdit, onDelete }) {
  return (
    <div className={styles.wrapper}>
      {todoItems.map(todoItem => (
        <TodoItem
          key={todoItem.id}
          onDone={onDone}
          onEdit={onEdit}
          onDelete={onDelete}
          {...todoItem}
        />
      ))}
    </div>
  );
}

export default TodoList;
