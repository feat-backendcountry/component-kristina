import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: ''
    };
  };

  render() {
    return (
      <div id='search-bar'>
        <span> | Company LOGO | </span>
        <span>Backcountry</span>
        <input id='search-input' placeholder='Search gear & clothing'></input>
        <span> | Chat-LOGO | </span>
        <span>Chat</span>
        <span> | Phone LOGO | </span>
        <span>1-800-409-4502</span>
        <span>My Account</span>
        <span>Image</span>
        <span> | CART LOGO | </span>
      </div>

    )
  }
};

export default Search;