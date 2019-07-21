import React from 'react';
import MenuBar from './menu-bar.jsx';
import MainBar from './main-bar.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      searchProduct: 'shirts',
      searchTextItems: [],
      searchAutoFillSuggestions: ['shirts', 'shoes', 'shorts', 'shovel'],
      searchDisplayItems: [],
      allowHover: true,
      showUserModal: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClickLogin = this.handleOnClickLogin.bind(this);
    this.handleOnClickExitLogin = this.handleOnClickExitLogin.bind(this);
  };

  handleOnChange(e) {
    this.setState({
      query: e.target.value
    }, () => {
      this.toggleAllowHover();
      this.getSearchResultImageItem();
    })
  }

  toggleAllowHover() {
    if (this.state.query.length >= 2 || this.state.showUserModal) {
      this.setState({
        allowHover: false
      })
    } else {
      this.setState({
        allowHover: true
      })
    }
  }

  getSearchResultImageItem() {
    var searchDisplayItems;
    var searchTextItems;
    axios
      .get('http://localhost:4001/products/all')
      .then(({ data }) => {
        searchDisplayItems = data.slice(0, 8);
        searchTextItems = data.slice(0, 3);
        this.setState({ searchDisplayItems, searchTextItems }, () => console.log(searchDisplayItems))
      })
      .catch(() => {
        console.error('Not able to find search result');
      })
  }

  handleOnClickLogin(e) {
    this.setState({
      showUserModal: !this.state.showUserModal
    }, () => {
      this.toggleAllowHover();
    })
  }

  handleOnClickExitLogin(e) {
    this.setState({
      showUserModal: false
    }, () => {
      this.toggleAllowHover();
    })
  }

  render() {
    return (
      <div className='nav-bar'>
        <section className='shipping-bar'>
          <a className='shipping-text' href='localhost:4001'>Free 2-Day Shipping on Orders Over $50</a>
        </section>
        <MainBar
          handleOnChange={this.handleOnChange}
          query={this.state.query}
          searchProduct={this.state.searchProduct}
          searchTextItems={this.state.searchTextItems}
          searchAutoFillSuggestions={this.state.searchAutoFillSuggestions}
          searchDisplayItems={this.state.searchDisplayItems}
          showUserModal={this.state.showUserModal}
          handleOnClickLogin={this.handleOnClickLogin}
          handleOnClickExitLogin={this.handleOnClickExitLogin}
        />
        <MenuBar allowHover={this.state.allowHover} />
        <div className='sale-bar'>
          <a className='sale-text1' href='localhost:3838'>
            <span className='sale-text2'>Go Seek </span>
            How Kids Find Their Backcountry
          </a>
        </div>
        <img className='static-image' src='https://i.imgur.com/rne9LJl.png' alt='static image component' />
      </div>
    )
  }
};

export default App;