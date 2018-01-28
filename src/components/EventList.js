import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import Spinner from 'react-spinkit';

import { getAllEvents } from '../actions/events'
import EventItem from './EventItem'

class EventList extends Component {
  componentWillMount() {
    this.props.getAllEvents()
  }

  render () {
    return (
      <div>
        {this.props.events ? 
          <Card.Group itemsPerRow={3} stackable>
            {this.props.events.map((event, i) => {
              return <EventItem key={i} event={event}/>
            })}
          </Card.Group>
          :
          <div className='loading'>
            <Spinner name="ball-beat" color='orange' fadeIn='none'/>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.eventReducers.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllEvents: () => dispatch(getAllEvents())
  }
}

const EventListConnect = connect(mapStateToProps, mapDispatchToProps)(EventList)

export default EventListConnect