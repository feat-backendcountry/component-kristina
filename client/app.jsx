import React from 'react';
import MenuBar from './menu-bar.jsx';
import MainBar from './main-bar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: ''
    };
  };

  render() {
    return (
      <div className='nav-bar'>
        <section className='shipping-bar'>
          <a className='shipping-text' href='localhost:3838'>Free 2-Day Shipping on Orders Over $50</a>
        </section>
        <MainBar />
        <MenuBar />
        <div className='sale-bar'>
          <a className='sale-text1' href='localhost:3838'>
            <span className='sale-text2'>Go Seek </span>
            How Kids Find Their Backcountry
          </a>
        </div>
        <div className='app'>REST OF WEB PAGE</div>
      </div>
    )
  }
};

export default App;