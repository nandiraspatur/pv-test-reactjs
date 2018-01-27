import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class EventItem extends Component {
  render() {
    return (
      <Card>
        <Image src={this.props.event.urlImage}/>
        <Card.Content>
          <Card.Header>
            {this.props.event.name}
          </Card.Header>
          <Card.Meta>
            <span>
              <Icon name='marker'/> {this.props.event.location}
            </span>
          </Card.Meta>
          <Card.Description>
            {this.props.event.description.substring(0, 100)}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <span>
            <b>Rp {this.props.event.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</b> /org
          </span>
          <Link to={`/events/${this.props.event._id}`}>
            <button className='button-detail'>Cari Tiket</button>
          </Link>
        </Card.Content>
      </Card>
    )
  }
}

export default EventItem;