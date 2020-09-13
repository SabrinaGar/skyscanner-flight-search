import { FETCH_AIRPORT } from '../actions/actions';
import { FETCH_FLIGHTS } from '../actions/actions';
import { FETCH_LOCAL } from '../actions/actions';

const initialState = {
    list: []
}

export function showFlights(state = initialState, action) {
    
    switch (action.type) {
      /*   case FETCH_AIRPORT:
            return Object.assign({}, state, {list: action.payload}) */
        case FETCH_FLIGHTS:
            return Object.assign({}, state, {list: action.payload})
     /*    case FETCH_LOCAL:
            return Object.assign({}, state, {list: action.payload}) */
        default:
            return state;
    }
}
    