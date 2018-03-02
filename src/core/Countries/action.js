export function getCountries () {
    return {
        type: 'GET_COUNTRIES'
    };
}

export function setCountries (payload) {
    return {
        type: 'SET_COUNTRIES',
        payload,
    };
}