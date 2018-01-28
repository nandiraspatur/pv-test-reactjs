import axios from 'axios';

const eventsData = (payload) => {
  return {
    type: 'GET_ALL_EVENTS',
    payload
  };
};

export const getAllEvents = () => {
  return async (dispatch) => {
    try {
      let events = await axios.get('http://api.booking.bhinfinix.com/events')
      dispatch(eventsData(events.data))
    } catch (error) {
      console.log(error)
    };
  };
};

const eventDetailData = (payload) => {
  return {
    type: 'GET_EVENT_DETAIL',
    payload
  };
};

export const getEventDetail = (id) => {
  return async (dispatch) => {
    try {
      let eventDetail = await axios.get(`http://api.booking.bhinfinix.com/events/${id}`)
      dispatch(eventDetailData(eventDetail.data))
    } catch (error) {
      console.log(error)
    };
  };
};

export const clearEventDetail = () => {
  return {
    type: 'CLEAR_EVENT_DETAIL',
    payload: ''
  }
}