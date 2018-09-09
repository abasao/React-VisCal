import { MULTIPLICATION_ACTION } from '../actionTypes';

export const multiplicationAction = (op = '*') => dispatch => {
  console.log(op);
  dispatch({
    type: MULTIPLICATION_ACTION,
    payload: {
      op
    }
  });
};
