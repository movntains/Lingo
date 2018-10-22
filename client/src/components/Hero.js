import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1>Lingo</h1>
        <p>
          Enter a word or phrase, and then choose the language to which you want
          it to be translated.
        </p>
        <p>
          Powered by{' '}
          <a
            href="http://translate.yandex.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Yandex.Translate
          </a>
        </p>
      </div>
    );
  }
}

export default Hero;
