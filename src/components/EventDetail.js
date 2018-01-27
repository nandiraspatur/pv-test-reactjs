import React, { Component } from 'react';

class EventDetail extends Component {
  render() {
    let eventId = this.props.match.params.id
    return (
      <div>
        <p>{JSON.stringify(eventId)}</p>
      </div>
    )
  }
};

export default EventDetail;