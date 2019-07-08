import React from 'react';

class HoverSale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sale: {
        Women: ['Jackets', 'Vests', 'Tops', 'Dresses & Skirts', 'Pants', 'Shorts', 'Baselayers', 'Underwear & Sleepwear', 'Swimwear', 'Footwear', 'Accessories', 'Shop All'],
        Men: ['Jackets', 'Vests', 'Shirts', 'Sweaters & Hoodies', 'Pants', 'Shorts', 'Baselayers', 'Undersear & Sleepwear', 'Swimwear', 'Footwear', 'Accessories', 'Shop All'],
        Kids: ['Girls', 'Boys', 'Toddler Girls', 'Toddler Boys', 'Infant', 'Accessories', 'Shop All'],
        Activities: ['Ski', 'Snowboard', 'Hike & Campt', 'Bike', 'Climb', 'Run & Training', 'Snowshoe', 'Paddle', 'Surf', 'Fly Fish', 'Yoga', 'Travel']
      }
    };
  };

  render() {
    const keys = Object.keys(this.state.sale);
    return (
      <div id='hover-sale'>
        {keys.map((category, key) => {
          return (
            <span className='sale-item' key={key}>
              <div className='sale-category'>{category}</div>
              {this.state.sale[category].map((subcategory, key) => {
                return(
                  <div key={key}>{subcategory}</div>
                )
              })}
            </span>
          )
        })}
      </div>

    )
  }
};

export default HoverSale;