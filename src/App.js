import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'semantic-ui-react';

import store from './store';
import Home from './components/Home';
import Navbar from './components/Navbar';
import EventDetail from './components/EventDetail';
import BookingForm from './components/BookingForm';
import BookingReview from './components/BookingReview';
import BookingSuccess from './components/BookingSuccess';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='page-wrap'>
            <Navbar/>
            <Container>
              <Route exact path='/' component={Home}/>
              <Route path='/events/:id' component={EventDetail}/>
              <Route exact path='/order' component={BookingForm}/>
              <Route path='/order/review' component={BookingReview}/>
              <Route path='/order/success' component={BookingSuccess}/>
            </Container>
            <div className='footer'><p>Booking System | Nandira S Paturohman</p></div>
          </div>
        </Router>
      </Provider>
    );
  };
};

export default App;
