import { createStore, applyMiddleware, compose } from 'redux';
import State from './assets/JS/state';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleware = applyMiddleware(thunk);

const initialState = {
  expressionState: State.expression,
  historyState: State.history,
  createState: State.create
};

export default function configureStore(
  initState = window.STATE_FROM_SERVER || initialState
) {
  return createStore(
    rootReducer,
    initState,
    compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );
}
