import { ADDITION_ACTION } from '../actionTypes';

export const additionAction = (op = '+') => dispatch => {
  dispatch({
    type: ADDITION_ACTION,
    payload: {
      op
    }
  });
};
