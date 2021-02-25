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
      let level_array = []
      for (let i = 0; i < 5; i++) {
        if (i < this.state.level) level_array.push(<div className="indexBar indexBar_filled"></div>);
        else level_array.push(<div className="indexBar indexBar_empty"></div>);
      }
      return(
        <div className="SkillIndex">
          <div className="SkillIndexChild">{this.state.skillName}</div>
          {level_array}
        </div>
      );
    }
}

export default SkillIndex;
