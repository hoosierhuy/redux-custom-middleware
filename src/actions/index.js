import axios from 'axios';

import * as actionTypes from './actionTypes';

export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  return {
    type: actionTypes.FETCH_USERS,
    payload: request,
  };
}