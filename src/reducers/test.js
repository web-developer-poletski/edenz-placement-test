import types from '../actions/actionTypes';

const test = (state = {}, action) => {
  switch( action.type ) {
    case types.SET_CURRENT_TEST:
      return Object.assign(
        {},
        state,
        {
          currentTestId: action.payload
        }
      );

    case types.SET_TEST_PAGE:
      return Object.assign(
        {},
        state,
        {
          currentTestPage: action.payload
        }
      )

    case types.SET_VISIBILITY_FILTER:
      return Object.assign(
        {},
        state,
        {
          visibilityFilter: action.payload
        }
      )
    default:
      return state;
  }
}

export default test;