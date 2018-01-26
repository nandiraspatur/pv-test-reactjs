import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      activeItem: ''
    }
  }

  handleItemClick(name) {
    this.setState({
      activeItem: name
    })
  }

  componentWillMount() {
    console.log(this)
  }

  render() {
    return (
      <Menu stackable className='navbar'>
        <Container>
          <Menu.Item>
            <h4>BOOKING SYSTEM</h4>
          </Menu.Item>
          <Menu.Item
            active={this.state.activeItem === 'home'}
            onClick={() => this.handleItemClick('home')}
          >
            Home
          </Menu.Item>
          <Menu.Item
            active={this.state.activeItem === 'booking-list'}
            onClick={() => this.handleItemClick('booking-list')}
          >
            Booking List
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Navbar