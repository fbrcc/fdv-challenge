import { createSelector } from 'reselect';

const countries = (store) => store.countries.toJS().countries;

export const getCountriesToJS = createSelector(
    countries,
    (countries) => countries
);