import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import eventReducers from './reducers/events'
import bookingReducers from './reducers/booking'

let middleware = applyMiddleware(thunk)
let reducers = combineReducers({eventReducers, bookingReducers})
let store = createStore(reducers, middleware);

export default store;