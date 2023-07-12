import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const Button = ({ text, className }) => (
  <div>
    <button type="button" className={className}>
      {text}
    </button>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default Button;
