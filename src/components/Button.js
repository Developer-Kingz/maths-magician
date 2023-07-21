import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const Button = ({ text, className, onClick }) => (
  <div>
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  onClick: () => {},
  className: '',
};
export default Button;
