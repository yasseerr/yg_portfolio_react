import React from 'react';
import PropTypes from 'prop-types';
import './ListingContainer.scss';
import { realpathSync } from 'fs';
import {Link,Switch,Route,BrowserRouter as Router } from "react-router-dom";
import { Button,Card } from "@blueprintjs/core";
import SkillsListing from "../SkillsListing/SkillsListing";

import { connect } from 'react-redux'


class ListingContainer extends React.Component{
  
  render(){
    let adjastued_class = "ListingContainer" + (this.props.project_open ? " minimized":"");
   return(
    <div className={adjastued_class} >
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
  project_open: state.ui.project_open
})

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps,mapDispatchToProps)(ListingContainer);
