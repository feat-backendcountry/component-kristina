import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: ''
    };
  };

  render() {
    return (
      <div id='menu-bar'>
        <span className='menu-item'>Explore</span>
        <span className='menu-item'>New Arrivals</span>
        <span id='brands' className='menu-item'>Brands</span>
        <span className='menu-item'>Activities</span>
        <span className='menu-item'>Women</span>
        <span className='menu-item'>Men</span>
        <span className='menu-item'>Kids</span>
        <span className='menu-item'>Sale</span>
      </div>

    )
  }
};

export default Menu;