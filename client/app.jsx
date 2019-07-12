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
      <div id='nav-bar'>
        <section id='shipping-bar'>
          <a id='shipping-text' href='localhost:3838'>Free 2-Day Shipping on Orders Over $50</a>
        </section>
        <MainBar />
        <MenuBar />
        <div id='sale-bar'>
          <a id='sale-text1' href='localhost:3838'>
            <span id='sale-text2'>Savings on Backcountry-Built Gear & Apparel </span>
            Up to 30% Off Select Styles for Summer
          </a>
        </div>
      </div>
    )
  }
};

export default App;