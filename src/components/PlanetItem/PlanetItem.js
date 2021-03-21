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
        <span className="abriviation">{props.planet.abriviation}</span>
        <div className="planet-desc"> {props.planet.description}</div>
      </div>
      <img src={borderSvg}></img>
    </div>
  )
};

PlanetItem.propTypes = {};

PlanetItem.defaultProps = {};

export default PlanetItem;
