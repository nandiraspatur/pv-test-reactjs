import React, { Component } from 'react';
import EventList from './EventList'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Home Page</h1>
        <EventList/>
      </div>
    )
  }
}

export default Home