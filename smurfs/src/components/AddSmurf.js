import React, { useState } from "react";

import { connect } from "react-redux";

import { getData } from "../actions";

import axios from "axios";

const AddSmurf = props => {

  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setNewSmurf({
      name: "",
      age: "",
      height: ""
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        console.log("this is the response: ", res)
      })
      .catch(err => {console.log("this is error", err.response)}
      );
    clearForm();
  };

  console.log("this is name value", newSmurf.name);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Smurf Name: 
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={newSmurf.name}
          />
        </label>
        <label htmlFor="age"> Smurf Age: 
          <input
            onChange={handleChange}
            type="text"
            name="age"
            value={newSmurf.age}
          />
        </label>
        <label htmlFor="height"> Smurf Height: 
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={newSmurf.height}
          />
        </label>
        <button>Add Smurf</button>
      </form>
    </div>
  )
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps,
  { getData }
)(AddSmurf);