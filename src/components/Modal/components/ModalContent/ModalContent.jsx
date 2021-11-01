import React from 'react';
import './ModalContent.scss';
import PropTypes from 'prop-types';

export const ModalContent = ({ children, setIsActive }) => {
  const closeModal = () => {
    setIsActive(false);
  };

  return (
    <div
      className="modal-content"
    >
      {children}
      <button className="modal-content__close" type="button" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </button>
    </div>
  );
};

ModalContent.propTypes = {
  children: PropTypes.node.isRequired,
  setIsActive: PropTypes.func.isRequired,
};
