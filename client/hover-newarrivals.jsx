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
      <section id='hover-new-arrivals'>
        {keys.map((category, key) => {
          return (
            <div id={'container-' + key} className='category-container' key={key}>
              <span className='category-name'>{category}</span>
              {this.state.newArrivals[category].map((subcategory, key) => {
                return(
                  <span className='category-item' key={key}>{subcategory}</span>
                )
              })}
            </div>
          )
        })}
        <div id='seasonal-ad'>
          <img className='ad-photo' src='https://i.imgur.com/faEL4yU.jpg' alt='camping photo'></img>
          <span className='ad-small-text'>Special Summer Collection</span>
          <span className='ad-large-text'>Retro-Inspired Camping Gear</span>
        </div>
      </section>

    )
  }
};

export default HoverNewArrivals;