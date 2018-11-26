import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Test from './views';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Test}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
