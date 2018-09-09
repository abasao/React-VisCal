import { ERASE_BLOCK_ACTION } from '../actionTypes';
export const eraseAction = (erase = true) => dispatch => {
  dispatch({
    type: ERASE_BLOCK_ACTION,
    payload: { erase }
  });
};
