import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './ListingContainer.scss';
import { realpathSync } from 'fs';
import {Link,Switch,Route,BrowserRouter as Router } from "react-router-dom";
import { Button,Card,Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import SkillsListing from "../SkillsListing/SkillsListing";

import { connect } from 'react-redux'

import { hideList, displayProject } from "../../actions";

import portfolio from "../../portfolio_config"
import im from "../../data/Endorsements/01.png";


class ListingContainer extends React.Component{
  constructor (props){
    super(props)
    this.state={
      visible: true
    }
  }
  render(){
    let adjastued_class = "ListingContainer" + (this.props.project_open ? " minimized":"");
    const container_style = {
      display: (this.props.list_open?"block":"None")
    }
    //console.log(this.props)
   return(
    <div className={adjastued_class} style={container_style} >
       <Icon onClick={this.props.hideList} className="hide-icon" icon="cross" color="white" iconSize="20"></Icon>
          <Switch>
         <Route exact path="/"  render={ (props)=> <AboutMe displayProject={this.props.displayProject}/>}/>
         <Route exact path="/aboutme" render={(props) => <AboutMe displayProject={this.props.displayProject} />}/>
            <Route exact path="/skills" ><SkillsListing callback={this.props.displayProject}/></Route>
            <Route> <div>error</div></Route>
          </Switch>
      
    </div>
  )
  }
};


function Endorsement(props) {
  let im2 = require("../../data/Endorsements/"+props.endorsement.image);
  const s = {
    height: "200px",
    width: "auto"
  }
  return (
    <div className="endorsement">
      <div className="endorsement-title">{props.endorsement.name}</div>
      <center><img style={s} src={im2.default}></img></center>
      <a className="endorsement-link" href={props.endorsement.link}>Link</a>
    </div>
  )
}

function Education(props) {
  let im2 = require("../../data/Education/" + props.education.image);
  const s = {
    height: "200px",
    width: "auto"
  }
  return (
    <div className="endorsement">
      <div className="endorsement-title">{props.education.name} + {props.education.date}</div>
      <center><img style={s} src={im2.default}></img></center>
    </div>
  )
}

function Project(props) {
  let project = portfolio.projects[props.project]
  let im2 = project.images[0]?require("../../data/"+project.folder+"/" + project.images[0]):"";
  const s = {
    height: "200px",
    width: "auto"
  }
  //console.log(props)
  return (
    <div className="endorsement">
      <div className="endorsement-title">{project.name}</div>
      <center><img style={s} src={im2.default}></img></center>
      <button onClick={()=>props.displayProject(props.project)} className="endorsement-link endorsement-button"><Icon icon="list-detail-view" color="white"></Icon></button>
      {/* <Button className="endorsement-link" icon="info-sign" minimal={false}>Details</Button> */}
    </div>
  )
}

function AboutMe(props){
  console.log(props)
  return (<div style={{padding: "20px"}}> 
  {portfolio.about_me}
  <br/>
  <h2>Endorsements: </h2>
  {portfolio.endorsement.map((e)=><Endorsement endorsement={e}/>)}
  <h2>Projects: </h2>
    {Object.keys(portfolio.projects).map((e) => <Project project={e} displayProject={props.displayProject}/>)}
  <p/>
  <h2>Education</h2>
  {portfolio.education.map((e) => <Education education={e} callback={props.callback}></Education>)} 
  </div>);
}

const mapStateToProps = (state) => ({
  project_open: state.ui.project_open,
  list_open: state.ui.list_open
})

const mapDispatchToProps = {
  hideList,
  displayProject
}


export default connect(mapStateToProps,mapDispatchToProps)(ListingContainer);
