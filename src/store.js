import { createStore, applyMiddleware, compose } from 'redux';
import app from './reducers';
import constants from './constants';
import thunkMiddleware from 'redux-thunk';
import currentPageNameUpdater from './middleware/currentPageNameUpdater';
import testController from './controllers/testController';
// import testController from './middleware/testController';

const initialState = {
  pages: {
    currentPage: 'Login'
  },
  test: {
    currentTestId: '',
    currentTestPage: 1,
    isChecking: false,
    isFilling: false,
    isSubmitting: false,
    lastTestPage: 1,
    questionsPerPage: 10,
    visibilityFilter: constants.QUESTIONS_SHOW_ALL
  },
  tests: {},
  user: {
    email: 'mail@example.com',
    name: 'user',
    isLogged: false
  }
}

let store;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== 'production') {
  store = createStore(
    app,
    initialState,
    composeEnhancers(
      applyMiddleware(
        currentPageNameUpdater,
        thunkMiddleware,
        testController
      )
    )
  )
}
else {
  store = createStore(
    app,
    initialState
  )
}

export default store;