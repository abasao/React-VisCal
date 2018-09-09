import { REMOVE_BLOCK_ACTION } from '../actionTypes';
export const removeAction = (remove = true) => dispatch => {
  console.log(remove);
  dispatch({
    type: REMOVE_BLOCK_ACTION,
    payload: { remove }
  });
};
