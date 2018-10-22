import React, { Component } from 'react';

class TranslateOutput extends Component {
  render() {
    const { output } = this.props;

    return (
      <div className="translate-output">
        <p>{output}</p>
      </div>
    );
  }
}

export default TranslateOutput;
