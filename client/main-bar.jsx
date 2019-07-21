import React from 'react';
import SearchResult from './search-results.jsx'

class MainBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  };

  displaySearch() {
    if (this.props.query.length >= 2) {
      return (
        <SearchResult query={this.props.query} searchProduct={this.props.searchProduct} searchTextItems={this.props.searchTextItems} searchAutoFillSuggestions={this.props.searchAutoFillSuggestions} searchDisplayItems={this.props.searchDisplayItems} />
      )
    }
  }

  displaySearchBackground() {
    if (this.props.query.length >= 2) {
      return (
        <div className='search-result-dim-background'></div>
      )
    }
  }

  displayUserModal() {
    if (this.props.showUserModal) {
      return (
        <div>
          <div className='login-modal-dim-background' onClick={this.props.handleOnClickExitLogin}></div>
          <form className='login-modal'>
            <div className='login-modal-exit-icon-container' onClick={this.props.handleOnClickExitLogin}>
              <img className='login-modal-exit-icon' src='https://i.imgur.com/5hLFahj.png' alt='exit icon' />
            </div>
            <div className='login-modal-container'>
              <img className='login-modal-logo' src='https://i.imgur.com/kXI8mh7.png' alt='company logo'/>
            </div>
            <div className='login-modal-text'>Email</div>
            <input className='login-modal-input' autoFocus='autofocus' onFocus='this.select()'></input>
            <div className='login-modal-text'>Password</div>
            <input className='login-modal-input' type='password'></input>
            <a className='login-forgot'>Forgot?</a>
            <button className='login-button'>Sign In</button>
            <a className='login-new-account'>Create an Account</a>
          </form>
        </div>
      )
    }
  }

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
            <div className='search-button'></div>
            <input className='search-input' placeholder='Search gear & clothing' onChange={this.props.handleOnChange}></input>
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
        <div className='login-container' onClick={this.props.handleOnClickLogin}>
          <span className='login-text'>My Account</span>
          <img className='avatar-icon' src='https://i.imgur.com/Gwo5Cto.jpg' alt='user avatar'></img>
        </div>
        {/* Checkout */}
        <div className='checkout-container'>
          <img className='cart-icon' src='https://i.imgur.com/XbqZWjn.png' alt='cart icon' />
        </div>
        {this.displaySearch()}
        {this.displaySearchBackground()}
        {this.displayUserModal()}
      </section>
    )
  }
};

export default MainBar;