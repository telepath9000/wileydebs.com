import React from 'react';
import PropTypes from 'prop-types';
import NavBtn from './NavBtn';
import './App.scss';

const Home = ({ handleClick }) => {
  return (
    <div>
      <NavBtn name="Home" clickHandler={handleClick} />
      <NavBtn name="About" clickHandler={handleClick} />
    </div>
  );
};

Home.propTypes = {
  handleClick: PropTypes.function
};

export default Home;
