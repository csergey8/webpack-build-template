import React, { Component } from 'react';
import Users from './containers/Users';
import { Link, Route } from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
  return import('./containers/Pizza.js');
})

class App extends Component {
  render () {
    return (
      <div>
        <div>
          <Link to="/">Users</Link> |
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/pizza"  component={AsyncPizza} />
        </div>
      </div>
    );
  }
}

export
