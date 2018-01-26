import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import eventReducers from './reducers/events'

let middleware = applyMiddleware(thunk)
let store = createStore(eventReducers, middleware);

export default store;