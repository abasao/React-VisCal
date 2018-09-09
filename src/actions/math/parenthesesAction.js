import { PARENTHESES_ACTION } from '../actionTypes';
export const parenthesesAction = (parentheses = '( )') => dispatch => {
  console.log(parentheses);
  dispatch({
    type: PARENTHESES_ACTION,
    payload: {
      parentheses
    }
  });
};
