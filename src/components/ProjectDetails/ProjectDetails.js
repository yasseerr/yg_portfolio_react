import React,{useState}from 'react';
import PropTypes from 'prop-types';
import './ProjectDetails.scss';
import { displayProject,hideProject } from "../../actions";

import { connect } from "react-redux";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import Portfolio from "../../portfolio_config";

import logo from "src/data/VisualBlueprint/01_colored.png";
import logo2 from "src/data/VisualBlueprint/02_handeling_threads.png";
import logo3 from "src/data/VisualBlueprint/03_NodeSelection.png";
//import img1 from "data/VisualBlueprint/i01_colored.png";

function ImageContainer(props) {
  let im = require("../../data/"+props.folder+"/"+props.src).default;
  return (
    <div className="img-container">
      <center style={{width: "100%",height: "100%"}}><img className="project-image" src={im}></img></center>
    </div>
  )
}
function VideoContainer(props) {
  let im = require("../../data/"+props.folder+"/" + props.src).default;
  return (
    <div className="img-container">
      <center style={{ width: "100%", height: "100%" }}>
        <video className="project-image" playsInline autoPlay muted loop>
          <source src={im} type="video/mp4"/>
          Could not display the video
        </video>
      </center>
    </div>
  )
}


const ProjectDetails = (props) => {
  const [imageIndex,setImageIndex] = useState(0);
  const tick = ()=> imageIndex<(project.images.length+project.videos.length-1)?setImageIndex(imageIndex+1):"";
  const tock = ()=> imageIndex>0?setImageIndex(imageIndex-1):"";
  const project_style =(!props.project_open?{display: "None"}:{});
  let image_translate = "translate("+(-imageIndex*100)+"%)";
  console.log(props.current_project);
  console.log("");
  let project = Portfolio.projects[props.current_project]
  project = project?project:{name: "",description: "",images:[],videos: [],link: ""}
  console.log(project)
  return(
    <div className="ProjectDetails" style={project_style}>
      
      <Icon onClick={props.hideProject} className="hide-icon" icon="cross" color="white" iconSize="20"></Icon>
      <h3>Project: {project.name} </h3>
      <div className="description">
        <a href={project.link} target="_blank"> &gt; {project.linkText?project.linkText:"Source Code"} &lt; </a>
        <p/>
        {project.description}
      </div>
      <div className="gallery">
        <div style={{height: "100%",width: "100%", transform: image_translate, transition: "1s ease-in-out"}}>
          {project.videos.map((i)=>(<VideoContainer folder={project.folder} src={i}/>))}
          {project.images.map((i)=>(<ImageContainer folder={project.folder} src={i}/>))}
        </div>
        <div className="bottom-menu">
          <div onClick={tock} class="bottom-button"><center style={{height: "100%"}}><Icon className="bottom-icon" iconSize={24} color="white" icon="arrow-left"/></center></div>
          <div onClick={tick} class="bottom-button"><center style={{height: "100%"}}><Icon className="bottom-icon" iconSize={24} color="white" icon="arrow-right"/></center></div>
          <span style={{verticalAlign: "middle"}}>Image : {imageIndex+1}</span>
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
