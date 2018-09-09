import {
  NUMBER_ACTION,
  ADDITION_ACTION,
  MULTIPLICATION_ACTION,
  DIVISION_ACTION,
  EXPAND_ACTION,
  COMPRESS_ACTION,
  ENTER_BLOCK_ACTION
} from '../actions/actionTypes';
import addExpression from '../assets/JS/expressionMethods';
//should import enter_action and take payload of
//state.create.createExpression to make an expression

//SHOULD CORRESPOND TO ACTIONS ON EXPRESSION
export default (state = {}, action) => {
  // console.log('expression reducer state:', state);
  switch (action.type) {
    case NUMBER_ACTION:
      return { ...state };
    case ADDITION_ACTION:
      return { ...state };
    case MULTIPLICATION_ACTION:
      return { ...state };
    case DIVISION_ACTION:
      return { ...state };
    case EXPAND_ACTION:
      return { ...state };
    case ENTER_BLOCK_ACTION:
      return {
        ...state,
        expressionCollection: {
          ...addExpression(
            state.expressionCollection,
            action.payload.expression,
            action.payload.genExpression
          )
        }
      };
    case COMPRESS_ACTION:
      return { ...state };
    default:
      return state;
  }
};
