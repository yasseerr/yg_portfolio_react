import React from 'react';
import PropTypes from 'prop-types';
import './MenuButton.scss';
import { IconNames } from "@blueprintjs/icons";
import { Icon,Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { showList } from "../../actions";
import { connect } from 'react-redux'



const MenuButton = (props) => {
  // console.log(props);
  return (
    <Link onClick={props.showList} to={props.path}>
      <button className={props.active ? "MenuButton MenuButton-active" : " MenuButton"}>
        <Icon icon={props.icon} color="white" className="button-icon"></Icon>
        {props.children}
      </button>
    </Link>
  )
};

MenuButton.propTypes = {};

MenuButton.defaultProps = {};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  showList
}


export default connect(mapStateToProps,mapDispatchToProps)(MenuButton);
