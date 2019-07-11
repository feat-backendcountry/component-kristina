import React from 'react';
import MenuBar from './menu-bar.jsx';
import MainBar from './main-bar.jsx';
import HoverNewArrivals from './hover-newarrivals.jsx';
import HoverBrands from './hover-brands.jsx';
import HoverActivities from './hover-activities.jsx';
import HoverWomen from './hover-women.jsx';
import HoverMen from './hover-men.jsx';
import HoverKids from './hover-kids.jsx';
import HoverSale from './hover-sale.jsx';

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
        <HoverNewArrivals />
        <HoverBrands />
        <HoverActivities />
        <HoverWomen />
        <HoverMen />
        <HoverKids />
        <HoverSale />
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