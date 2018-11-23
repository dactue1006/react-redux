import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import Test from './views/test';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/test' component={Test} />
          <Route path='*' component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
