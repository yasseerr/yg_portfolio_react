import React from 'react';
import PropTypes from 'prop-types';
import './ListingContainer.scss';
import { realpathSync } from 'fs';
import {Link,Switch,Route,BrowserRouter as Router } from "react-router-dom";
import { Button,Card } from "@blueprintjs/core";
import SkillsListing from "../SkillsListing/SkillsListing";

class ListingContainer extends React.Component{
  
  render(){
   return(
    <div className="ListingContainer">
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

export default ListingContainer;
