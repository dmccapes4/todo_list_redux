import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import * from 'lodash';

const errorsReducer = (state = initialState, action) => {

  const newState = {};
  switch(action.type) {
    case RECEIVE_ERRORS:
      action.errors.forEach(error => {
        newState[error.id] = error;
      });
      return _.merge({}, state, newState);
    case CLEAR_ERRORS:
      return newState = {};
    default:
      return state;
  }
};

export default errorsReducer;
