import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home4 } from './Home4';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path='/' component={Home4} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
