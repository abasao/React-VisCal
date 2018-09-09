import { ENTER_BLOCK_ACTION } from '../actionTypes';
export const enterAction = (expression = [], genExpression) => dispatch => {
  dispatch({
    type: ENTER_BLOCK_ACTION,
    payload: { expression, genExpression }
  });
};
