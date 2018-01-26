import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, Image, Icon } from 'semantic-ui-react'

import { getAllEvents } from '../actions/events'

class EventList extends Component {
  componentWillMount() {
    this.props.getAllEvents()
  }

  render () {
    return (
      <Card.Group itemsPerRow={4} stackable>
        {!this.props.events ? 
          <p>Loading...</p>
          :
          this.props.events.map((event, i) => {
            return <Card key={i}>
                    <Image src={event.urlImage}/>
                    <Card.Content>
                      <Card.Header>
                        {event.name}
                      </Card.Header>
                      <Card.Meta>
                        <span>
                          <Icon name='marker'/> {event.location}
                        </span>
                      </Card.Meta>
                      <Card.Description>
                        {event.description.substring(0, 100)}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content>
                      <span>
                        <b>Rp {event.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</b> /org
                      </span>
                      <button className='button-detail'>Cari Tiket</button>
                    </Card.Content>
                  </Card>
          })
        }
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllEvents: () => dispatch(getAllEvents())
  }
}

const EventListConnect = connect(mapStateToProps, mapDispatchToProps)(EventList)

export default EventListConnect