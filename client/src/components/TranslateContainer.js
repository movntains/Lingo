import React, { Component } from 'react';

import TranslateForm from './TranslateForm';

class TranslationContainer extends Component {
  render() {
    return (
      <div className="translate-container">
        <TranslateForm />
      </div>
    );
  }
}

export default TranslationContainer;