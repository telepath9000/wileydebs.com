import React from 'react';
import PropTypes from 'prop-types';
import NavBtn from './NavBtn';
import './css/NavBar.scss';

const NavBar = ({ handleClick }) =>
    <div className="navBar" >
      <NavBtn name="Home" clickHandler={handleClick} />
      <NavBtn name="About" clickHandler={handleClick} />
    </div>

NavBar.propTypes = {
  handleClick: PropTypes.function
};

export default NavBar;
