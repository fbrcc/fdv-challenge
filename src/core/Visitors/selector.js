import { createSelector } from 'reselect';

const visitors = (store) => store.visitors.toJS().visitors;

export const getVisitorsToJS = createSelector(
    visitors,
    (visitors) => visitors
);