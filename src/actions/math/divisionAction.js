import { DIVISION_ACTION } from '../actionTypes';

export const divisionAction = (op = '/') => dispatch => {
  dispatch({
    type: DIVISION_ACTION,
    payload: {
      op
    }
  });
};
