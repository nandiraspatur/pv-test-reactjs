export const getAllEvents = (events) => {
  return {
    type: 'GET_ALL_EVENTS',
    payload: events
  };
};

