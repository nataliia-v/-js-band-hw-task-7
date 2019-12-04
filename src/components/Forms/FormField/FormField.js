import React from 'react';

import styles from './FormField.module.scss';

function FormField({ label, control }) {
  return (
    <div className="form-group">
      <label className={styles.wrapper}>
        <span>{label}:</span>
        {control}
      </label>
    </div>
  );
}

export default FormField;
