import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TranslateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textToTranslate: '',
      language: 'es'
    };
  }

  onSearchChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSelectChange = e => {
    this.setState({ language: e.target.value });
  };

  onSearchSubmit = e => {
    const { textToTranslate, language } = this.state;
    const { onTextChange } = this.props;

    e.preventDefault();
    onTextChange(textToTranslate, language);
  };

  render() {
    const { textToTranslate, language } = this.state;

    return (
      <div className="translate-form">
        <form onSubmit={this.onSearchSubmit}>
          <input
            className="translate-input"
            type="text"
            placeholder="Enter a word or phrase..."
            name="textToTranslate"
            value={textToTranslate}
            onChange={this.onSearchChange}
          />
          <select value={language} onChange={this.onSelectChange}>
            <option value="ar">Arabic</option>
            <option value="zh">Chinese</option>
            <option value="nl">Dutch</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="el">Greek</option>
            <option value="he">Hebrew</option>
            <option value="hi">Hindi</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="es">Spanish</option>
            <option value="sv">Swedish</option>
          </select>
          <button type="submit" className="translate-btn">
            Translate
          </button>
        </form>
      </div>
    );
  }
}

TranslateForm.propTypes = {
  onTextChange: PropTypes.func
};

export default TranslateForm;
