import { React, useState } from 'react';
import PropTypes from 'prop-types';
import './SkillsListing.scss';
import SkillIndex from "../SkillIndex/SkillIndex";
import { Icon,Button } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

const SkillListingDelegate = (props) => {

  const indexStyle = {
    float: "right",
    height: "25px",
  }
  let projects = props.skill.projects.map((p,i)=>{
    return(
      <div className="delegate-projects-item">
        <Icon icon="chevron-right" color="white" className="delegate-projects-icon"/> {p.name}
      </div>
    );
  });
  return (
    <div className="SkillDelegate">
      <div className="delegate-title">{props.skill.name}</div>
      <div className="delegate-projects">
         {projects}
      </div>
      <SkillIndex showName={false} skillName={props.skill.name} level={props.skill.level} style={indexStyle}></SkillIndex>
    </div>
  );
}

const SkillsListing = () => {
  const skills = [
    {
      name: "Qt",
      level: 5,
      projects: [
        { name: "Visual Bluepting" },
        { name: "OpenSimQt" }
      ]
    },
    {
      name: "C++",
      level: 5,
      projects: [
        { name: "Visual Bluepting" },
        { name: "OpenSimQt" },
        { name: "Arduino"}
      ]
    },
    {
      name: "Java",
      level: 4,
      projects: [
        { name: "Visual Bluepting" },
        { name: "OpenSimQt" },
        { name: "Arduino" }
      ]
    }];
  return (
    <div className="SkillsListing">
      SkillsListing Component
      {skills.map((skillObj,index)=><SkillListingDelegate skill={skillObj}/>)}
    </div>
  )
};


export default SkillsListing;
