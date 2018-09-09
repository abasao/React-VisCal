import { combineReducers } from 'redux';
import expressionReducer from './expressionReducer';
import editorReducer from './editorReducer';
import createReducer from './createReducer';

export default combineReducers({
  expressionState: expressionReducer,
  createState: createReducer,
  historyState: editorReducer
});
