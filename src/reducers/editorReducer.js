import {
  ENTER_BLOCK_ACTION,
  ERASE_BLOCK_ACTION,
  PARENTHESES_ACTION,
  OPERATOR_ACTION,
  DIGIT_ACTION
} from '../actions/actionTypes';

//For history traversal
export default (state = {}, action) => {
  //Edit expressions through operator actions.
  // console.log('editor reducer state:', state);
  switch (action.type) {
    case PARENTHESES_ACTION:
      return {
        ...state
      };
    case ENTER_BLOCK_ACTION:
      return {
        ...state
      };
    case ERASE_BLOCK_ACTION:
      return {
        ...state
      };
    case OPERATOR_ACTION:
      return {
        ...state
      };
    case DIGIT_ACTION:
      return {
        ...state
      };
    default:
      return state;
  }
};
