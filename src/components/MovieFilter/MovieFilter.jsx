import React from 'react';
import './MovieFilter.scss';
import PropTypes from 'prop-types';

export const MovieFilter = ({ query, handleChange }) => (
  <div className="filter">
    <input
      type="text"
      className="filter__input"
      placeholder="Type search movie title"
      value={query}
      onChange={handleChange}
    />
  </div>
);

MovieFilter.propTypes = {
  query: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
