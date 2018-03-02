import { all, takeEvery } from 'redux-saga/effects';

import { getCountries } from './Countries/saga';

function* rootSagas() {
  yield all([
    takeEvery('GET_COUNTRIES', getCountries)
  ]);
}

export default rootSagas;