import React from 'react';
import PropTypes from 'prop-types';
import './MenuButton.scss';
import { IconNames } from "@blueprintjs/icons";
import { Icon,Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";

const MenuButton = (props) => (
  <Link to={props.path}>
    <button className=" MenuButton">
      <Icon icon={props.icon} color="white" className="button-icon"></Icon>
      {props.children}
    </button>
  </Link>
);

MenuButton.propTypes = {};

MenuButton.defaultProps = {};

export default MenuButton;
