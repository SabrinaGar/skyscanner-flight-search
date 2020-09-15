import { FETCH_FLIGHTS } from '../actions/actions';
const initialState = {
    //list: []
}

export function showFlights(state = initialState, action) {
    
    switch (action.type) {
      /*   case FETCH_AIRPORT:
            return Object.assign({}, state, {list: action.payload}) */
        case FETCH_FLIGHTS:
            console.log('reducer',action);
            console.log('state de reducer', state ); 
            return Object.assign({},state,{list: action.payload}) 
            
     /*    case FETCH_LOCAL:
            return Object.assign({}, state, {list: action.payload}) */
        default:
            return state;
            
    }
}
    
