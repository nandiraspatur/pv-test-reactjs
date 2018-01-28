import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventList from './EventList'
import { clearEventDetail } from '../actions/events';

class Home extends Component {
  componentWillMount() {
    this.props.clearEventDetail()
  }

  render () {
    return (
      <div className='home-wrap'>
        <h1>Home Page</h1>
        <EventList/>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearEventDetail: () => dispatch(clearEventDetail())
  }
};

let HomeConnect = connect(null, mapDispatchToProps)(Home);

export default HomeConnect;