import React from 'react';
import PropTypes from 'prop-types';
import './MenuBar.scss';
import SkillIndex from '../SkillIndex/SkillIndex';
import MenuButton from "../MenuButton/MenuButton";
import { IconNames } from "@blueprintjs/icons";
import { connect } from 'react-redux'
import { hideProject } from "../../actions";

import { useLocation } from "react-router-dom";
import portfolio from "../../portfolio_config";


const MenuBar = () => {
  // console.log(useLocation());
  const currentSkills = [{skillName: "Qt",level: 5,iconPath:"path"},
    { skillName: "C++", level: 5, iconPath: "path" },
    { skillName: "JAVA", level: 4, iconPath: "path" },
    { skillName: "Matlab", level: 3, iconPath: "path" }];
  const pathName = useLocation().pathname
  return (
    <div className="MenuBar" onClick={() => console.log("menu bar clicked")}>
      <div className="Title">{portfolio.name + " " +portfolio.last_name}</div>
      <div className="Separator Separator_left"></div>
      <div className="ticker-wrap">
        <div className="ticker">
          {currentSkills.map((value, index) => { return <SkillIndex skillName={value.skillName} level={value.level} iconPath={value.iconPath} /> })}
        </div>
      </div>
      <div className="Separator Separator_right"></div>
      <MenuButton active={(pathName === "/aboutme" || pathName ==="/")} path="/aboutme" icon="info-sign">About me</MenuButton>
      <MenuButton active={useLocation().pathname === "/skills"} path="/skills" icon="list-detail-view">Skills</MenuButton>
    </div>
  )
};

MenuBar.propTypes = {};

MenuBar.defaultProps = {};

export default  MenuBar;
