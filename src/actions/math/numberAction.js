import { NUMBER_ACTION } from '../actionTypes';
export const numberAction = num => dispatch => {
  console.log('numberAction: ', num);
  dispatch({
    type: NUMBER_ACTION,
    payload: {
      num
    }
  });
};
