import React from 'react';
import styles from './Footer.module.scss';

function Footer({ internName }) {
  return (
    <div className={styles.footer}>
      <p className={styles.footerName}>{internName}</p>
    </div>
  );
}

export default Footer;
