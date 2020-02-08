import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";

export const getData = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("this is res.data", res.data);
      dispatch({ type: FETCH_DATA, payload: res.data })
    })
    .catch(err => {
      console.error("error fetching data from api. err: ", err);
    });
};