import React,{useState}from 'react';
import PropTypes from 'prop-types';
import './ProjectDetails.scss';
import { displayProject } from "../../actions";

import { connect } from "react-redux";

const ProjectDetails = (props) => {
  const [counter, setCounter] = useState(0); 
  return(
    <div className="ProjectDetails">
      ProjectDetails Component {counter}
      <p> current project {props.current_project} </p>
      <button onClick={()=>setCounter(counter+1)}>Click me</button>
  </div>
  )
};

ProjectDetails.propTypes = {};

ProjectDetails.defaultProps = {};

const mapStateToProps = (state) => ({
  current_project: state.current_project
})

const mapDispatchToProps = {
  displayProject  
}




export default connect(mapStateToProps,mapDispatchToProps)(ProjectDetails);
