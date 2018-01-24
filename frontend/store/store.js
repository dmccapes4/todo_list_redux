import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';
import { thunker } from '../middleware/thunk';

const store = createStore(rootReducer, applyMiddleware(thunker));
const configureStore = () => (store);

export default configureStore;
