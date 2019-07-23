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
      classNames: ['explore', 'new-arrivals', 'brands', 'activities', 'women', 'men', 'kids', 'sale'],
    };
  };

  hoverClassName(index) {
    if (this.props.allowHover) {
      return this.state.classNames[index];
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className='menu-bar'>
        <div className={'menu-item ' + this.hoverClassName(0)}>
          <ul className='menu-name'>Explore</ul>
        </div>
        <div className={'menu-item ' + this.hoverClassName(1)}>
          <ul className='menu-name'>New Arrivals</ul>
          <HoverNewArrivals />
        </div>
        <div className={'menu-item ' + this.hoverClassName(2)}>
          <ul className='menu-name'>Brands</ul>
          <HoverBrands />
        </div>
        <div className={'menu-item ' + this.hoverClassName(3)}>
          <ul className='menu-name'>Activities</ul>
          <HoverActivities />
        </div>
        <div className={'menu-item ' + this.hoverClassName(4)}>
          <ul className='menu-name'>Women</ul>
          <HoverWomen />
        </div>
        <div className={'menu-item ' + this.hoverClassName(5)}>
          <ul className='menu-name'>Men</ul>
          <HoverMen />
        </div>
        <div className={'menu-item ' + this.hoverClassName(6)}>
          <ul className='menu-name'>Kids</ul>
          <HoverKids />
        </div>
        <div className={'menu-item ' + this.hoverClassName(7)}>
          <ul className='menu-name'>Sale</ul>
          <HoverSale />
        </div>
        <div className='hover-dim-background'></div>
      </div>
    )
  }
};

export default MenuBar;