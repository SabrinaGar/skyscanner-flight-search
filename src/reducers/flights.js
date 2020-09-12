import { SHOW_FLIGHTS } from '../actions/actions'

const initialState = {
    list: []
}

export function showFlights(state = initialState, action) {
    
    switch (action.type) {
        case SHOW_FLIGHTS:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state;
    }
}
    