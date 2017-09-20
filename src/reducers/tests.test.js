import types from '../actions/actionTypes';
import tests from './tests';

describe('Reducers: tests', () => {
    
  let initialState;
  
  beforeAll(() => {
    initialState = {
      '1': {
        isFetching: false,
        isComplete: true,
        questions: {
          '1': {
            text: 'text'
          }
        }
      }
    }
  });

  it('must be a function', () => {
    expect(tests).toBeInstanceOf(Function);
  });

  it('must not change state if action is unknown', () => {
    expect( 
      tests(
        initialState,
        {
          type: 'unknown',
          payload: '1'
        }
      )
    )
    .toBe(initialState)
  });

  it('must receive and store test data properly', () => {
    expect(
      tests(
        {
          '1': {
            isFetching: true,
            something: 'else'
          },
          '2': {
            isFetching: false,
            questions: {}
          }
        },
        {
          type: types.RECEIVE_TEST,
          payload: {
            '1': {
              'text': 'What is ...',
              options: {
                'a': 'well'
              }
            }
          }
        }
      )
    )
    .toEqual({
        '1': {
          isFetching: false,
          something: 'else',
          test: {
            '1': {
              'text': 'What is ...',
              options: {
                'a': 'well'
              }
            }
          }
        } ,
        '2': {
          isFetching: false,
          questions: {}
        }
      }
    )
  });

  it('must request data properly', () => {
    expect(
      tests(
        initialState,
        {
          type: types.REQUEST_TEST,
          payload: '2'
        }
      )
    )
    .toEqual({
      '1': {
        isFetching: false,
        isComplete: true,
        questions: {
          '1': {
            text: 'text'
          }
        }
      },
      '2': {
        isFetching: true
      }
    })
  });

});