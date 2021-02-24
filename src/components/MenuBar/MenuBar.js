import React from 'react';
import PropTypes from 'prop-types';
import './MenuBar.scss';

const MenuBar = () => (
  <div className="MenuBar">
    <div className="Title">Yasser Grimes </div>
    <div style={{display: "inline-block"}}> This will hold the sliding items</div>
  </div>
);

MenuBar.propTypes = {};

MenuBar.defaultProps = {};

export default MenuBar;
