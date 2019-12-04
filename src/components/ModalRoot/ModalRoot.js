import React from 'react';
import classNames from 'classnames';

import styles from './ModalRoot.module.scss';

class ModalRoot extends React.Component {
  componentDidUpdate() {
    const { activeModal } = this.props;
    if (activeModal) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }

  onModalContainerClick = event => {
    event.stopPropagation();
  };

  render() {
    const { activeModal, closeModal } = this.props;

    if (!activeModal) return null;

    const { component: Component, componentProps } = activeModal;

    return (
      <div className={styles.wrapper} onClick={closeModal}>
        <div
          className={classNames(styles.modalContainer, 'card')}
          onClick={this.onModalContainerClick}
        >
          <Component {...componentProps} />
        </div>
      </div>
    );
  }
}

export default ModalRoot;
