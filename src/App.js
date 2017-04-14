import React, { Component } from 'react';
import Link from './Link';
import CheckboxWithLabel from './CheckboxWithLabel';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      linkLabel: 'Not Clicked'
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Link href="test" onClick={() => { this.setState({ linkLabel: 'Clicked' }) }}>{this.state.linkLabel}</Link>
          <CheckboxWithLabel labelOn="On" labelOff="Off" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
