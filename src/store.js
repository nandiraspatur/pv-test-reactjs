import { createStore } from 'redux';

import eventReducers from './reducers/events'

let store = createStore(eventReducers);

export default store;