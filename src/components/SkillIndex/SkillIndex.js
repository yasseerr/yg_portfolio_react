import React from 'react';
import PropTypes from 'prop-types';
import './SkillIndex.scss';

class SkillIndex extends React.Component{
    constructor(props){
       super(props);
       this.state = {
         skillName: this.props.skillName,
         iconPath: this.props.iconPath,
         //the level from 1-5
         level: this.props.level
       }
    }
    render(){
      return(
        <div className="SkillIndex">
          <div className="SkillIndexChild">{this.state.skillName}</div>
          <div className="SkillIndexChild">{this.state.iconPath}</div>
          <div className="SkillIndexChild">{this.state.level}</div>
        </div>
      );
    }
}

export default SkillIndex;
