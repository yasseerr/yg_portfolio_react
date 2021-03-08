import React,{useState}from 'react';
import PropTypes from 'prop-types';
import './ProjectDetails.scss';
import { displayProject,hideProject } from "../../actions";

import { connect } from "react-redux";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import logo from "src/data/VisualBlueprint/01_colored.png";
import logo2 from "src/data/VisualBlueprint/02_handeling_threads.png";
import logo3 from "src/data/VisualBlueprint/03_NodeSelection.png";
//import img1 from "data/VisualBlueprint/i01_colored.png";

function ImageContainer(props) {
  return (
    <div className="img-container">
      <center style={{width: "100%",height: "100%"}}><img className="project-image" src={props.src}></img></center>
    </div>
  )
}



const ProjectDetails = (props) => {
  const [imageIndex,setImageIndex] = useState(0);
  const tick = ()=> setImageIndex(imageIndex+1);
  const tock = ()=> setImageIndex(imageIndex-1);
  const project_style =(!props.project_open?{display: "None"}:{});
  let image_translate = "translate("+(-imageIndex*100)+"%)";
  return(
    <div className="ProjectDetails" style={project_style}>
      <Icon onClick={props.hideProject} className="hide-icon" icon="cross" color="white" iconSize="20"></Icon>
      <h3>Project: {props.current_project}</h3>
      <div className="description">Description:
      <p>the project was developed when you know something was missing and needed to be developed</p>
      </div>
      <div className="gallery">
        <div style={{height: "100%",width: "100%", transform: image_translate, transition: "1s ease-in-out"}}>
          <ImageContainer src={logo}></ImageContainer>
          <ImageContainer src={logo2}></ImageContainer>
          <ImageContainer src={logo3}></ImageContainer>
        </div>
        <div className="bottom-menu">
          <div onClick={tock} class="bottom-button"><center style={{height: "100%"}}><Icon className="bottom-icon" iconSize={24} color="white" icon="arrow-left"/></center></div>
          <div onClick={tick} class="bottom-button"><center style={{height: "100%"}}><Icon className="bottom-icon" iconSize={24} color="white" icon="arrow-right"/></center></div>
          <span style={{verticalAlign: "middle"}}>Image : {imageIndex}</span>
        </div>
      </div>
  </div>
  )
};

ProjectDetails.propTypes = {};

ProjectDetails.defaultProps = {};

const mapStateToProps = (state) => ({
  current_project: state.current_project,
  project_open: state.ui.project_open
})

const mapDispatchToProps = {
  displayProject,
  hideProject
}




export default connect(mapStateToProps,mapDispatchToProps)(ProjectDetails);
