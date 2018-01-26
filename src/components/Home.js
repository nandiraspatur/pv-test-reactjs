import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getAllEvents } from '../actions/events'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('stateEvents  ', state)
  return {
    events: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllEvents: () => dispatch(getAllEvents)
  }
}

const HomeConnect = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeConnect