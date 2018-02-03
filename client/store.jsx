import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

//import data from database here somehow

const defaultState = {//create an object for the default data
  brands,
  analyzed_data,
  top10Positive,
  top10Negative
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
