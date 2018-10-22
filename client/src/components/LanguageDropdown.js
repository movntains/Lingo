import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

const options = ['Chinese', 'French', 'Russian', 'Spanish'];

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
    console.log(this.state.selected);
    // this.props.setLanguage(selected);
  }

  render() {
    const { selected } = this.state;

    return (
      <div>
        <Dropdown
          options={options}
          value={selected}
          onChange={this._onSelect}
        />
      </div>
    );
  }
}

export default LanguageDropdown;
