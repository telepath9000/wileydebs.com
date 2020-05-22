import React from 'react';
import PropTypes from 'prop-types';
import './App.scss'

const NavBtn = props => <div className="navigationText" onClick={props.clickHandler} >{props.name}</div>;

NavBtn.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.function
};

export default NavBtn;
