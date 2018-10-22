import React, { Component } from 'react';
import axios from 'axios';

import keys from '../keys';
import TranslateForm from './TranslateForm';
import TranslateOutput from './TranslateOutput';

class TranslateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      translatedText: ''
    };
  }

  performTranslation = async (text, lang) => {
    const CORS_URL = 'https://stark-dusk-62893.herokuapp.com/';
    const BASE_URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    const API_KEY = `?key=${keys.yandexKey}`;

    const res = await axios.get(
      `${CORS_URL}${BASE_URL}${API_KEY}&text=${text}&lang=${lang}`
    );

    this.setState({ translatedText: res.data.text[0] });
  };

  render() {
    const { translatedText } = this.state;

    return (
      <div className="translate-container">
        <TranslateForm
          onTextChange={(text, lang) => this.performTranslation(text, lang)}
        />
        <TranslateOutput output={translatedText} />
      </div>
    );
  }
}

export default TranslateContainer;
