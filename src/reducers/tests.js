import types from '../actions/actionTypes';

const tests = (state = {}, action) => {
  switch( action.type ) {
    case types.RECEIVE_TEST:
      return Object.assign(
        {},
        state,
        {
          
        }
      );
    case types.REQUEST_TEST:
      return Object.assign(
        {},
        state,
        {
          [action.payload]: Object.assign(
            {},
            state[ action.payload ],
            {
              isFetching: true
            }
          )
        }
      );
    default:
      return state;
  }
}

export default tests;