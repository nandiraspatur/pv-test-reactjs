let initialState = {
  events: [],
  eventDetail: '',
  bookingData: {}
}

const eventReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_EVENTS':
      return {...state, events: action.payload};
    case 'GET_EVENT_DETAIL':
      return {...state, eventDetail: action.payload}
    case 'SAVE_DATE_AMOUNT':
      return {...state, bookingData: action.payload}
    case 'SAVE_CONTACT_DATA':
      return {...state, bookingData: action.payload}
    default:
      return state;
  }
}

export default eventReducers