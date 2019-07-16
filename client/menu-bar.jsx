import React from 'react';
import HoverBrands from './hover-brands.jsx';
import HoverNewArrivals from './hover-newarrivals.jsx';
import HoverActivities from './hover-activities.jsx';
import HoverWomen from './hover-women.jsx';
import HoverMen from './hover-men.jsx';
import HoverKids from './hover-kids.jsx';
import HoverSale from './hover-sale.jsx';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: ''
    };
  };

  render() {
    return (
      <div className='menu-bar'>
        <li className='menu-item explore'>
          <ul className='menu-name'>Explore</ul>
        </li>
        <li className='menu-item new-arrivals'>
          <ul className='menu-name'>New Arrivals</ul>
          <HoverNewArrivals />
        </li>
        <li className='menu-item brands'>
          <ul className='menu-name'>Brands</ul>
          <HoverBrands />
        </li>
        <li className='menu-item activities'>
          <ul className='menu-name'>Activities</ul>
          <HoverActivities />
        </li>
        <li className='menu-item women'>
          <ul className='menu-name'>Women</ul>
          <HoverWomen />
        </li>
        <li className='menu-item men'>
          <ul className='menu-name'>Men</ul>
          <HoverMen />
        </li>
        <li className='menu-item kids'>
          <ul className='menu-name'>Kids</ul>
          <HoverKids />
        </li>
        <li className='menu-item sale'>
          <ul className='menu-name'>Sale</ul>
          <HoverSale />
        </li>
      </div>
    )
  }
};

export default MenuBar;