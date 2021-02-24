import React from 'react';
import PropTypes from 'prop-types';
import './Cosmos.scss';
import { FIXED } from '@blueprintjs/core/lib/esm/common/classes';
import MenuBar from '../MenuBar/MenuBar';

const Cosmos = () => {
  const centerRectStyle = {
    backgroundColor: "#ff0000",
    position: "fixed",
    top: "20%",
    bottom: "20%",
    right: "20%",
    left: "20%"
  };
  return (
  <div className="Cosmos">
    <MenuBar></MenuBar>
    <div style={centerRectStyle}>
      It should have some kind of text at least
    </div>
  </div>
  );
};

Cosmos.propTypes = {};

Cosmos.defaultProps = {};

export default Cosmos;
