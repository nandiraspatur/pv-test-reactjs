import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Container } from 'semantic-ui-react'

import store from './store'
import Home from './components/Home'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar/>
            <Container>
              <Route exact path='/' component={ Home }/>
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
