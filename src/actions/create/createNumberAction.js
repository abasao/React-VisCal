import { CREATE_NUMBER_ACTION } from '../actionTypes';

export const createNumberAction = ({ multi, add }) => dispatch => {
  dispatch({
    type: CREATE_NUMBER_ACTION,
    payload: {
      multi,
      add
    }
  });
};
