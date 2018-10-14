import React, { Component } from 'react';

import LanguageDropdown from './LanguageDropdown';

class TranslateForm extends Component {
  render() {
    return (
      <div className="translate-form">
        <form>
          <input
            className="translate-input"
            type="text"
            placeholder="Enter a word or phrase..."
          />
          <LanguageDropdown />
          <button type="submit" className="translate-btn">
            Translate
          </button>
        </form>
      </div>
    );
  }
}

export default TranslateForm;