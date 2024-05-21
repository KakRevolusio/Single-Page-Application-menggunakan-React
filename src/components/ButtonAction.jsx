import React from 'react';
import PropTypes from 'prop-types';

const ButtonAction = ({ title, onClick, icon }) => (
  <button className='action' type='button' title={title} onClick={onClick}>
    {icon}
  </button>
);

ButtonAction.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired
};

export default ButtonAction;
