import React, { Component } from 'react';

import TranslateForm from './TranslateForm';
import TranslateOutput from './TranslateOutput';

class TranslateContainer extends Component {
  render() {
    return (
      <div className="translate-container">
        <TranslateForm />
        <TranslateOutput />
      </div>
    );
  }
}

export default TranslateContainer;