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
      <section className='main-bar'>
        {/* Company Logo */}
        <div className='company-logo-container'>
          <img className='company-logo-image' src='https://i.imgur.com/KSGQ4Du.png' alt='company logo' />
        </div>
        {/* Search */}
        <div className='search-container'>
          <span className='search-bar'>
            <button className='search-button'></button>
            <input className='search-input' placeholder='Search gear & clothing'></input>
          </span>
        </div>
        {/* Chat */}
        <div className='chat-container'>
          <img className='chat-icon' src='https://i.imgur.com/RBbMWxB.png' alt='chat icon' />
          <span>Chat</span>
        </div>
        {/* Phone */}
        <div className='phone-container'>
          <img className='phone-icon' src='https://i.imgur.com/5OXksuV.png' alt='phone icon' />
          <span className='phone-text'>1-800-409-4502</span>
        </div>
        {/* Login */}
        <div className='login-container'>
          <span className='login-text'>My Account</span>
          <img className='avatar-icon' src='https://i.imgur.com/Gwo5Cto.jpg' alt='user avatar'></img>
        </div>
        {/* Checkout */}
        <div className='checkout-container'>
          <img className='cart-icon' src='https://i.imgur.com/XbqZWjn.png' alt='cart icon' />
        </div>
      </section>
    )
  }
};

export default MainBar;