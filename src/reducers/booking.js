let initialState = {
  bookingData: '',
  bookingStatus: ''
};

const bookingReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_DATE_AMOUNT':
      return {...state, bookingData: action.payload}
    case 'SAVE_CONTACT_DATA':
      return {...state, bookingData: action.payload}
    case 'DATA_SAVED':
      return {...state, bookingStatus: action.payload}
    default:
      return state;
  };
};

export default bookingReducers;