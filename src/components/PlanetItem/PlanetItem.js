import React from 'react';
import PropTypes from 'prop-types';
import './PlanetItem.scss';
import borderSvg from "../../data/images/border-image1.svg"

const PlanetItem = (props) => {
  const container_style = {
    width: props.p_radius + "%",
    height: props.p_radius + "%",
    animationDuration: props.duration
  }
  return(
    <div style={container_style} className="PlanetItem">
      <div style={{animationDuration: props.duration}} className="PlanetDiv">
        DP
        <div className="planet-desc"> Understanding of the 22 Design Patterns</div>
      </div>
      <img src={borderSvg}></img>
    </div>
  )
};

PlanetItem.propTypes = {};

PlanetItem.defaultProps = {};

export default PlanetItem;
