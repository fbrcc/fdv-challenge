import { call, put } from 'redux-saga/effects';

import axios from 'axios';

function get() {
    return axios.get(`http://restcountries.eu/rest/v2/all`)
        .then(function ({data}) {
            return data;
        });
};

export function* getCountries() {
    try {
        const data = yield call(get);
        
        yield put({ type: 'SET_COUNTRIES', payload: data });
    } catch (e) {
        console.log(e);
    }
};