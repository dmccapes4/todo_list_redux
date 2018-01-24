// import { dispatch, getState} from 'redux';

export const thunker = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  } else {
    return next(action);
  }
};
