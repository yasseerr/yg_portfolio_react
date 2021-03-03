import React from 'react';
import PropTypes from 'prop-types';
import './ListingContainer.scss';
import { realpathSync } from 'fs';
import {Link,Switch,Route,BrowserRouter as Router } from "react-router-dom";
import { Button,Card,Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import SkillsListing from "../SkillsListing/SkillsListing";

import { connect } from 'react-redux'

import { hideList } from "../../actions";


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
   return(
    <div className={adjastued_class} style={container_style} >
       <Icon onClick={this.props.hideList} className="hide-icon" icon="cross" color="white" iconSize="20"></Icon>
          <Switch>
            <Route exact path="/"  component={AboutMe} />
            <Route exact path="/aboutme" component={AboutMe}/>
            <Route exact path="/skills" component={SkillsListing}/>
            <Route> <div>error</div></Route>
          </Switch>
      
    </div>
  )
  }
};

function AboutMe(){
  return(
    <div>this is the about me section</div>
  );
}

const mapStateToProps = (state) => ({
  project_open: state.ui.project_open,
  list_open: state.ui.list_open
})

const mapDispatchToProps = {
  hideList
}


export default connect(mapStateToProps,mapDispatchToProps)(ListingContainer);
