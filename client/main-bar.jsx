import React from 'react';

class MainBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: ''
    };
  };

  render() {
    return (
      <section id='main-bar'>
        {/* Company Logo */}
        <div id='company-logo-container'>
          <img id='company-logo-image' src='https://i.imgur.com/cRnLYYM.png' alt='company logo' />
        </div>
        {/* Search */}
        <div id='search-container'>
          <span id='search-bar'>
            <button id='search-button'></button>
            <input id='search-input' placeholder='Search gear & clothing'></input>
          </span>
        </div>
        {/* Chat */}
        <div id='chat-container'>
          <img id='chat-icon' src='https://i.imgur.com/RBbMWxB.png' alt='chat icon' />
          <span>Chat</span>
        </div>
        {/* Phone */}
        <div id='phone-container'>
          <img id='phone-icon' src='https://i.imgur.com/5OXksuV.png' alt='phone icon' />
          <span id='phone-text'>1-800-409-4502</span>
        </div>
        {/* Login */}
        <div id='login-container'>
          <span id='login-text'>My Account</span>
          <img id='avatar-icon' src='https://i.imgur.com/Gwo5Cto.jpg' alt='user avatar'></img>
        </div>
        {/* Checkout */}
        <div id='checkout-container'>
          <img id='cart-icon' src='https://i.imgur.com/XbqZWjn.png' alt='cart icon' />
        </div>
      </section>
    )
  }
};

export default MainBar;