import React from 'react';
import SearchResult from './search-results.jsx';
import axios from 'axios';

class MainBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      searchDisplayItems: [],
      searchTextItems: [],
      searchAutoFillSuggestions: ['shirts', 'shoes', 'shorts', 'shovel'],
      searchProduct: 'shirts'
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  };

  handleOnChange(e) {
    this.setState({
      query: e.target.value
    }, () => {
      // this.get()
    })
  }

  getSearchResultImageItem() {
    var searchDisplayItems;
    var searchTextItems;
    axios
      .get('http://localhost:3838/products/all')
      .then(({ data }) => {
        searchDisplayItems = data.slice(0, 8);
        searchTextItems = data.slice(0, 3);
        this.setState({ searchDisplayItems , searchTextItems }, () => console.log(searchDisplayItems))
      })
      .catch(() => {
        console.error('Not able to find search result');
      })
  }

  displaySearch() {
    if (this.state.query.length >= 2) {
      return (
        <SearchResult query={this.state.query} searchProduct={this.state.searchProduct} searchTextItems={this.state.searchTextItems} searchAutoFillSuggestions={this.state.searchAutoFillSuggestions} searchDisplayItems={this.state.searchDisplayItems}/>
      )
    }
  }

  componentDidMount() {
    this.getSearchResultImageItem();
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
            <input className='search-input' placeholder='Search gear & clothing' onChange={this.handleOnChange}></input>
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
        {this.displaySearch()}
      </section>
    )
  }
};

export default MainBar;