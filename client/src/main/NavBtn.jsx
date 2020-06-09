import React from 'react';
import PropTypes from 'prop-types';
import './css/NavBtn.scss'

const NavBtn = props => <div className="navigationText" onClick={props.clickHandler} >{props.name}</div>;

NavBtn.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func
};

export default NavBtn;
