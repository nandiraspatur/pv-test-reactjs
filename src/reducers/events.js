let initialState = {
  events: []
}

const eventReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case 'GET_ALL_EVENTS':
      return {...state, events: actions.payload};
    default:
      return state;
  }
}

export default eventReducers