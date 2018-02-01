import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import brands from './brands';
import tweets from './tweets';
import profile from './profile';
import settings from './settings';

const rootReducer = combineReducers({ brands, tweets, profile,
  settings, routing: routerReducer });

export default rootReducer;
