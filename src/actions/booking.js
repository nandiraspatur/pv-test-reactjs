import axios from 'axios';

export const saveDateAmount = (payload) => {
  return {
    type: 'SAVE_DATE_AMOUNT',
    payload
  };
};

export const saveContactData = (payload) => {
  return {
    type: 'SAVE_CONTACT_DATA',
    payload
  };
};

const dataSaved = (payload) => {
  return {
    type: 'DATA_SAVED',
    payload
  };
};

export const saveBookingData = (bookingData) => {
  return async (dispatch) => {
    try {
      let booking = await axios.post('http://api.booking.bhinfinix.com/booking', bookingData)
      if(booking.data) dispatch(dataSaved({
        status: 'success',
        data: booking.data
      }))
    } catch (error) {
      console.log(error)      
    };
  };
};

const bookingList = (payload) => {
  return {
    type: 'GET_ALL_BOOKING',
    payload
  };
};

export const getAllBooking = () => {
  return async (dispatch) => {
    try {
      let booking = await axios.get('http://api.booking.bhinfinix.com/booking')
      dispatch(bookingList(booking.data))
    } catch (error) {
      console.log(error)
    };
  };
};