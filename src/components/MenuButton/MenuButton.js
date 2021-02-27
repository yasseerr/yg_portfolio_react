import React from 'react';
import PropTypes from 'prop-types';
import './MenuButton.scss';
import { IconNames } from "@blueprintjs/icons";
import { Icon,Button } from "@blueprintjs/core";

const MenuButton = () => (
  <button className=" MenuButton">
    <Icon icon="info-sign" color="white" className="button-icon"></Icon>
    About Me
  </button>
);

MenuButton.propTypes = {};

MenuButton.defaultProps = {};

export default MenuButton;
