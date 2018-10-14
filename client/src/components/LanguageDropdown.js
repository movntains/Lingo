import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

const options = [
  'Spanish',
  'Russian'
];

class LanguageDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'Spanish'
    };

    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    this.setState({ selected: option });
  }

  render() {
    const defaultOption = this.state.selected;

    return (
      <div>
        <Dropdown
          options={options}
          onChange={this._onSelect}
          value={defaultOption}
        />
      </div>
    );
  }
}

export default LanguageDropdown;