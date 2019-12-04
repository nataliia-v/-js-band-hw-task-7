import React from 'react';

const defaultValue = {
  activeModal: null,
  openModal: null,
  closeModal: null
};

const ModalContext = React.createContext(defaultValue);

ModalContext.displayName = 'ModalContext';

export default ModalContext;
