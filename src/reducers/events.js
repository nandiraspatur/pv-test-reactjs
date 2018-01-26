const eventReducers = (state, actions) => {
  switch (actions.type) {
    case 'GET_ALL_EVENTS':
      return {...state, events: actions.payload};
    default:
      return state;
  }
}

export default eventReducers