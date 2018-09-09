import { DIGIT_ACTION } from '../actionTypes';
//SHOULD CORRESPOND TO DIGIT ON EDITOR
export const numberAction = digit => dispatch => {
  console.log('digitAction: ', digit);
  dispatch({
    type: DIGIT_ACTION,
    payload: {
      digit
    }
  });
};
