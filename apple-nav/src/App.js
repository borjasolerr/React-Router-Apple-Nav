import React, { Component } from 'react';
import './App.css';
import NavWrapper from './Components/Nav/NavWrapper';
import { Route } from 'react-router-dom';
import Data from './Data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: Data });
  }
  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <NavWrapper {...props} data={this.state.data} />} />
      </div>
    );
  }
}

export default App;
