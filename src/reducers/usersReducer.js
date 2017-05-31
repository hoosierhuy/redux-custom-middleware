import * as actionTypes from '../actions/actionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
}