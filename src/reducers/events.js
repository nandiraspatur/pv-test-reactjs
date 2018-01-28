let initialState = {
  events: '',
  eventDetail: '',
}

const eventReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_EVENTS':
      return {...state, events: action.payload};
    case 'GET_EVENT_DETAIL':
      return {...state, eventDetail: action.payload}
    case 'CLEAR_EVENT_DETAIL':
      return {...state, eventDetail: action.payload}
    default:
      return state;
  }
}

export default eventReducers