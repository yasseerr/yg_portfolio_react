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
         level: this.props.level,
         showName: this.props.showName
       }
    }
    render(){
      let level_array = []
      let nameStyle = this.state.showName===false?{display: "None"}:{};
      for (let i = 0; i < 5; i++) {
        if (i < this.state.level) level_array.push(<div className="indexBar indexBar_filled"></div>);
        else level_array.push(<div className="indexBar indexBar_empty"></div>);
      }
      return(
        <div className="SkillIndex" style={this.props.style}>
          <div style={nameStyle} className="SkillIndexChild">{this.state.skillName}</div>
          {level_array}
        </div>
      );
    }
}

export default SkillIndex;
