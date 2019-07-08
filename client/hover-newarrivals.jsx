import React from 'react';

class HoverNewArrivals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newArrivals: {
        Women: ['Jackets', 'Vests', 'Tops', 'Dresses & Skirts', 'Pants', 'Shorts', 'Baselayers', 'Underwear & Sleepwear', 'Swimwear', 'Footwear', 'Accessories', 'Shop All'],
        Men: ['Jackets', 'Vests', 'Shirts', 'Hoodies & Sweaters', 'Pants', 'Shorts', 'Baselayers', 'Underwear & Sleepwear', 'Swimwear', 'Footwear', 'Accessories', 'Shop All'],
        Activities: ['Ski', 'Snowboard', 'Hike & Camp', 'Bike', 'Climb', 'Run & Training', 'Snowshoe', 'Paddle', 'Surf', 'Fly Fish', 'Yoga', 'Travel'],
        Brands: ['Patagonia', 'The North Face', 'Osprey', 'Big Agnes', 'Marmot', 'Prana', 'Arc\'teryx']
      }
    };
  };

  render() {
    const keys = Object.keys(this.state.newArrivals);
    return (
      <div id='hover-new-arrivals'>
        {keys.map((category, key) => {
          return (
            <span className='new-arrivals-item' key={key}>
              <div className='new-arrivals-category'>{category}</div>
              {this.state.newArrivals[category].map((subcategory, key) => {
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

export default HoverNewArrivals;