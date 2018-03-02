import { Record } from 'immutable';

const NewRecord = new Record({
    visitors: [],
});

export function visitorsReducer(state = new NewRecord(), { type, payload }) {
    switch (type) {
        case 'SET_VISITORS':
        return state.set('visitors', payload);
        
        default:
        return state;
    }
}