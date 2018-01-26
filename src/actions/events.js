import axios from 'axios'

export const eventsData = (payload) => {
  return {
    type: 'GET_ALL_EVENTS',
    payload: payload
  };
};

export const getAllEvents = () => {
  console.log('dispatch')
  return async (dispatch) => {
    try {
      let events = await axios.get('http://localhost:3000/events')
      dispatch(eventsData(events))
    } catch (error) {
      console.log(error)
    }
  }
}

