import React, { Component } from 'react';

import Hero from './Hero';
import TranslateContainer from './TranslateContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Hero />
        <TranslateContainer />
      </div>
    );
  }
}

export default App;
