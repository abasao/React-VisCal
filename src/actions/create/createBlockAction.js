import { CREATE_BLOCK_ACTION } from '../actionTypes';

export const createBlockAction = ({ index }) => dispatch => {
  dispatch({
    type: CREATE_BLOCK_ACTION,
    payload: {
      index
    }
  });
};
