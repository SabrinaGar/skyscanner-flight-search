import { combineReducers } from 'redux';
import { showFlights} from './flights'

const rootReducer = combineReducers({
    flight: showFlights
});

export default rootReducer;