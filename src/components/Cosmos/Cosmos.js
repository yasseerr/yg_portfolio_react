import React from 'react';
import PropTypes from 'prop-types';
import './Cosmos.scss';
import { FIXED } from '@blueprintjs/core/lib/esm/common/classes';
import MenuBar from '../MenuBar/MenuBar';
import ListingContainer from '../ListingContainer/ListingContainer';
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const Cosmos = () => {
  const centerRectStyle = {
    backgroundColor: "#ff0000",
    position: "fixed",
    top: "20%",
    bottom: "20%",
    right: "20%",
    left: "20%",
    backgroundColor: "transparent"
  };
  return (
  <div className="Cosmos Cosmos_radial">
    <MenuBar></MenuBar>
    <div style={centerRectStyle}>
      It should have some kind of text at least
    </div>
    <ListingContainer></ListingContainer>
    <ProjectDetails></ProjectDetails>
  </div>
  );
};

Cosmos.propTypes = {};

Cosmos.defaultProps = {};

export default Cosmos;
