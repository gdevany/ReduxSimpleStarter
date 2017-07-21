import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }
  render() {
    return (
      <div className="search-bar d-flex">
        <input
          className="sbinputbox"
          value = {this.state.term}
          placeholder = 'search here'
          onChange={ (event) => this.onInputChange(event.target.value) }
        />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
