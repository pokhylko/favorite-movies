import React, { useEffect, useState } from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { ModalContent } from './components/ModalContent';

export const Modal = ({ children, id, isActive }) => {
  const [isActiveModal, setIsActiveModal] = useState(false);

  useEffect(() => {
    setIsActiveModal(isActive);
  }, [isActive]);

  return (
    <div
      id={id}
      className={cn(
        'modal',
        { 'modal--active': isActiveModal },
      )}
    >
      <ModalContent setIsActive={setIsActiveModal}>
        {children}
      </ModalContent>
    </div>
  );
};

Modal.defaultProps = {
  isActive: false,
};

Modal.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
