import React from 'react';
import PropTypes from 'prop-types';
import './MiddleMenu.scss';
import middleContainerIcon from "../../data/images/middle-container.svg"
import personalImage from "../../data/photo3.png"

import { Icon } from "@blueprintjs/core";
import { IconNames,IconSvgPaths20, IconContents } from "@blueprintjs/icons";
import PlanetItem from '../PlanetItem/PlanetItem';

///images for links
import gmail_icon from "../../data/images/gmail2.png";
import github_icon from "../../data/images/github2.png";
import gitlab_icon from "../../data/images/gitlab2.png";
import upwork_icon from "../../data/images/upwork2.png";

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
      <img className="menu-item-icon" src={props.info.icon} />
      <a href={props.info.link} target="_blank" style={{height: "100%",width:"100%",position: "absolute",top: "0%",left:"0%"}}/>
    </div>
  )
}


const MiddleMenu = () => {
  let items = [
    {icon: gmail_icon, link: "mailto:y.grimes@esi.dz"},
    {icon: github_icon, link: "https://www.github.com/yasseerr"},
    { icon: gitlab_icon, link: "https://gitlab.com/yasseerr"},
    { icon: upwork_icon, link: "https://www.upwork.com/freelancers/~01932ce8601f9efcf0j"}
  ]
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
