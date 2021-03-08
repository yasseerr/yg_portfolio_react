import React from 'react';
import PropTypes from 'prop-types';
import './MiddleMenu.scss';
import middleContainerIcon from "../../data/images/middle-container.svg"
import personalImage from "../../data/photo3.png"

import { Icon } from "@blueprintjs/core";
import { IconNames,IconSvgPaths20, IconContents } from "@blueprintjs/icons";
import PlanetItem from '../PlanetItem/PlanetItem';

const getRotationPositon = (i) => {
  let initial_angle = Math.PI * 0.95;
  let angle_step = Math.PI / 10;
  let a = Math.round(50 + Math.cos(initial_angle - angle_step * i) * 43).toString() + "%";
  let b = Math.round(50 + Math.sin(initial_angle - angle_step * i) * 43).toString() + "%";
  return { a, b }

}


function MenuItem(props) {
  let pos = getRotationPositon(props.index);
  return (
    <div className="menu-item" style={{ left: pos.a, top: pos.b }}>
      <Icon className="menu-item-icon" icon={props.info.icon} iconSize={20}/>
    </div>
  )
}


const MiddleMenu = () => {
  let items = [{icon: IconNames.GIT_REPO},{icon: IconNames.WALK},{icon: IconNames.LINK},{icon: IconNames.MEDIA}]
  const items_rendered = items.map((e,i) => <MenuItem index={i} info={e}/>);

  return(
    <div className="MiddleMenu">
      <PlanetItem duration="20s" p_radius="200" />
      <PlanetItem duration="40s" p_radius="400" />
      <PlanetItem duration="60s" p_radius="600" />
      <img src={middleContainerIcon} style={{ height: "100%", width: "auto" }} />
      <img src= {personalImage} className="personal-photo"/>
      <div className="item-container">{items_rendered}</div>
  </div>
  )};

MiddleMenu.propTypes = {};

MiddleMenu.defaultProps = {};

export default MiddleMenu;
