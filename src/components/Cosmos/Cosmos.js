import React from 'react';
import PropTypes from 'prop-types';
import './Cosmos.scss';
import { FIXED } from '@blueprintjs/core/lib/esm/common/classes';
import MenuBar from '../MenuBar/MenuBar';
import ListingContainer from '../ListingContainer/ListingContainer';
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import MiddleMenu from '../MiddleMenu/MiddleMenu';

const Cosmos = () => {
  
  return (
  <div className="Cosmos Cosmos_radial">
    <MenuBar></MenuBar>
    <MiddleMenu/>
    <ListingContainer></ListingContainer>
    <ProjectDetails></ProjectDetails>
  </div>
  );
};

Cosmos.propTypes = {};

Cosmos.defaultProps = {};

export default Cosmos;
