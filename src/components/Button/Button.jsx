import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Button.scss';

export const Button = ({
  children, onClick, size, variant,
}) => (
  <button
    className={cn('button', {
      [`button--${variant}`]: variant,
      [`button--${size}`]: size !== 'default',
    })}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  size: 'default',
  variant: 'primary',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  variant: PropTypes.oneOf(['primary, outline']),
};
