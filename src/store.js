import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers/index';
import Async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

export default createStoreWithMiddleware(reducers);

