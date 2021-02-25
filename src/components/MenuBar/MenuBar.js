import React from 'react';
import PropTypes from 'prop-types';
import './MenuBar.scss';
import SkillIndex from '../SkillIndex/SkillIndex';

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
    <div style={{display: "inline-block", textAlign: "right",backgroundColor: "blue",height: "100%",float: "right"}}> This will hold the sliding items</div>
  </div>
  )
};

MenuBar.propTypes = {};

MenuBar.defaultProps = {};

export default MenuBar;
