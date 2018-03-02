import { Record } from 'immutable';

const NewRecord = new Record({
    countries: [],
});

export function countriesReducer(state = new NewRecord(), { type, payload }) {
    switch (type) {
        case 'SET_COUNTRIES':
        return state.set('countries', payload);
        
        default:
        return state;
    }
}