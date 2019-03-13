import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Test from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

