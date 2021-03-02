import React,{useState}from 'react';
import PropTypes from 'prop-types';
import './ProjectDetails.scss';
import { displayProject } from "../../actions";

import { connect } from "react-redux";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import logo from "src/data/VisualBlueprint/i01_colored.png";
//import img1 from "data/VisualBlueprint/i01_colored.png";

const ProjectDetails = (props) => {
  const [imageIndex,setImageIndex] = useState(0);
  const tick = ()=> setImageIndex(imageIndex+1);
  const tock = ()=> setImageIndex(imageIndex-1);
  return(
    <div className="ProjectDetails">
      <h3>Project: {props.current_project}</h3>
      <div className="description">Description:
      <p>the project was developed when you know something was missing and needed to be developed</p>
      </div>
      <div className="gallery">
        <center style={{height: "100%",width: "100%"}}><img className="project-image" src={logo}></img></center>
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
  current_project: state.current_project
})

const mapDispatchToProps = {
  displayProject  
}




export default connect(mapStateToProps,mapDispatchToProps)(ProjectDetails);
