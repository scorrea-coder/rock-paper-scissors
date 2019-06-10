import React from 'react';
import PropTypes from 'prop-types';

const GameAlert = ({ message, className }) => (
  <div className={`alert alert-${className}`}>{message}</div>
);

GameAlert.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
};

GameAlert.defaultProps = {
  className: '',
};

export default GameAlert;
