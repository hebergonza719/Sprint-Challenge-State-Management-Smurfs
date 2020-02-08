import { FETCH_DATA } from '../actions';

const initialState = {
  smurfs: []
};

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        smurfs: action.payload
      };
    };
    default:
      return state;
  };
};