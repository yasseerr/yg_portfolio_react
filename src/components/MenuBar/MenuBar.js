import React from 'react';
import PropTypes from 'prop-types';
import './MenuBar.scss';
import SkillIndex from '../SkillIndex/SkillIndex';
import MenuButton from "../MenuButton/MenuButton";
import { IconNames } from "@blueprintjs/icons";

const MenuBar = () => {
  const currentSkills = [{skillName: "Qt",level: 5,iconPath:"path"},
    { skillName: "C++", level: 5, iconPath: "path" },
    { skillName: "JAVA", level: 4, iconPath: "path" },
    { skillName: "Matlab", level: 3, iconPath: "path" }];
  return (
  <div className="MenuBar">
    <div className="Title">Yasser Grimes </div>
    <div className="Separator Separator_left"></div>
    <div className="ticker-wrap">
        <div className="ticker">
          {currentSkills.map((value, index) => { return <SkillIndex skillName={value.skillName} level={value.level} iconPath={value.iconPath} /> })}
        </div>
    </div>
    <div className="Separator Separator_right"></div>
    <MenuButton path="/aboutme" icon="info-sign">About me</MenuButton>
    <MenuButton path="/skills" icon="list-detail-view">Skills</MenuButton>
  </div>
  )
};

MenuBar.propTypes = {};

MenuBar.defaultProps = {};

export default MenuBar;
