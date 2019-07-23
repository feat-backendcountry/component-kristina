import React from 'react';
import MenuBar from './menu-bar.jsx';
import MainBar from './main-bar.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      query: '',
      searchProduct: '',
      searchTextItems: [],
      searchAutoFillSuggestions: [
        'shirt',
        'shoes',
        'shorts',
        'shorts womens',
        'shoes men',
        'shirts jackets',
        'shelters',
        'helmet',
        'headlamps',
        'headbands',
        'henley',
        'hex',
        'backpacks',
        'backcountry',
        'backpacking tents',
        'backpacks womens'
      ],
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
      this.getSearchResultImageItems(this.state.data);
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

  getAll() {
    axios
      .get('products/all')
      .then(({ data }) => {
        this.setState({ data })
      })
      .catch(() => {
        console.error('Not able to find search result');
      })
  }

  getSearchResultImageItems(data) {
    var results = [];
    var searchDisplayItems = [];
    var searchTextItems = [];
    var searchProduct = '';
    for (var i = 0; i < data.length; i++) {
      if (data[i].productType.slice(0, this.state.query.length) === this.state.query) {
        results.push(data[i]);
      }
    }
    searchDisplayItems = results.slice(0, 8);
    searchTextItems = results.slice(0, 3);
    if (results.length > 0) {
      searchProduct = results[0].productType;
    }
    this.setState({ searchDisplayItems, searchTextItems, searchProduct })
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

  // styleSearchBar() {
  //   var mainBar = document.getElementsByClassName('main-bar')[0];
  //   var shippingBar = document.getElementsByClassName('shipping-bar')[0];
  //   var prevScrollpos = window.pageYOffset;
  //   window.onscroll = function () {
  //     var currentScrollPos = window.pageYOffset;
  //     if(currentScrollPos >= 33) {
  //       mainBar.position = 'fixed';
  //       if (prevScrollpos > currentScrollPos) {
  //         mainBar.style.top = '0';
  //       } else {
  //         mainBar.style.top = '-113px';
  //         shippingBar.style.display = 'none';
  //       }
  //       prevScrollpos = currentScrollPos;
  //     }
  //   }
  // }

  componentDidMount() {
    this.getAll();
    // this.styleSearchBar();
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
        {/* <img className='static-image' src='https://i.imgur.com/rne9LJl.png' alt='static image component' /> */}
      </div>
    )
  }
};

export default App;