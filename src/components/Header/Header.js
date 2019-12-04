import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerName}>TODOList</h1>
    </div>
  );
}

export default Header;
