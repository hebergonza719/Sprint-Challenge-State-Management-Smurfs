import React, { useEffect } from 'react';

import SmurfCard from './SmurfCard';

import { connect } from "react-redux";

import { getData } from "../actions";

const DisplaySmurfs = props => {

  const { smurfs, getData } = props;

  useEffect(() => {
    getData();
  }, [smurfs]);

  console.log("DisplaySmurf: props.smurfs", props.smurfs);
  
  return (
    <div className="card-container">
      {props.smurfs.map((smurf) => {
        return <SmurfCard smurf={smurf} />
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect (
  mapStateToProps,
  { getData }
)(DisplaySmurfs);