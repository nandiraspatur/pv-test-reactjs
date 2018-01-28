let initialState = {
  bookingData: '',
  bookingStatus: '',
  bookingList: ''
};

const bookingReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_DATE_AMOUNT':
      return {...state, bookingData: action.payload}
    case 'SAVE_CONTACT_DATA':
      return {...state, bookingData: action.payload}
    case 'DATA_SAVED':
      return {...state, bookingStatus: action.payload}
    case 'GET_ALL_BOOKING':
      return {...state, bookingList: action.payload}
    default:
      return state;
  }
};

export default bookingReducers;