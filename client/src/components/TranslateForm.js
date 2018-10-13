import React, { Component } from 'react';

class TranslateForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter a word..."
          />
          <p>Dropdown here</p>
          <input
            type="submit"
            value="Translate"
          />
        </form>
      </div>
    );
  }
}

export default TranslateForm;