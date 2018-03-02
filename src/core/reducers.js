import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { countriesReducer } from './Countries/reducer';
import { visitorsReducer } from './Visitors/reducer';

export default function rootReducer() {
  return combineReducers({
    router: routerReducer,
    countries: countriesReducer,
    visitors: visitorsReducer
  });
};