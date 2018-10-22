import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

TranslateOutput.propTypes = {
  output: PropTypes.string
};

export default TranslateOutput;
