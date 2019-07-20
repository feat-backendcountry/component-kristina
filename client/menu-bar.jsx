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
        <div className='menu-item explore'>
          <ul className='menu-name'>Explore</ul>
        </div>
        <div className='menu-item new-arrivals'>
          <ul className='menu-name'>New Arrivals</ul>
          <HoverNewArrivals />
        </div>
        <div className='menu-item brands'>
          <ul className='menu-name'>Brands</ul>
          <HoverBrands />
        </div>
        <div className='menu-item activities'>
          <ul className='menu-name'>Activities</ul>
          <HoverActivities />
        </div>
        <div className='menu-item women'>
          <ul className='menu-name'>Women</ul>
          <HoverWomen />
        </div>
        <div className='menu-item men'>
          <ul className='menu-name'>Men</ul>
          <HoverMen />
        </div>
        <div className='menu-item kids'>
          <ul className='menu-name'>Kids</ul>
          <HoverKids />
        </div>
        <div className='menu-item sale'>
          <ul className='menu-name'>Sale</ul>
          <HoverSale />
        </div>
        <div className='hover-dim-background'>
        </div>
      </div>
    )
  }
};

export default MenuBar;