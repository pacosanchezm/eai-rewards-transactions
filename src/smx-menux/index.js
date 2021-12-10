import React from 'react';

// This component requires prop-types
import PropTypes from 'prop-types';

import './styles.css';

const MyCoolButton = ({ type, title, onClick }) => (
  <button
    type={type}
    className="container"
    onClick={onClick}
  >
    {title}
  </button>
);

MyCoolButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

MyCoolButton.defaultProps = {
  type: 'button',
  onClick: () => {},
};

export default MyCoolButton;